import fs from "fs";
import path from "path";
import pdf from "pdf-parse";

const dataBuffer = fs.readFileSync(
  path.join(process.cwd(), "public", "detailed_resume.pdf")
);

let cachedResume: string | null = null;

async function resumeLoader(): Promise<string> {
  if (cachedResume) return cachedResume;

  try {
    const data = await pdf(dataBuffer);
    cachedResume = data.text;
    return cachedResume;
  } catch (error) {
    console.error("Error parsing PDF:", error);
    throw error;
  }
}


export async function POST(req: Request): Promise<Response> {
  try {
    const { message }: { message: string } = await req.json();

    if (!message || typeof message !== "string") {
      return Response.json(
        { reply: "Please enter a valid message." },
        { status: 400 }
      );
    }

    const resumeText = await resumeLoader();
    console.log(resumeText);
    const systemPrompt = `You are a friendly and enthusiastic chatbot that represents Sumit , a B.Tech electrical student at IIT Ropar. You are on his portfolio website. You can only answer questions related to the resume below. If the question is unrelated, respond with: "I can't answer anything not related to the portfolio."

Here is the resume:\n\n${resumeText}

Be concise, helpful, and keep answers under 350 tokens. Do not make up information or exaggerate beyond the resume content.`;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama3-70b-8192",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: message },
          ],
          temperature: 0.7,
          max_tokens: 350,
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("Groq API Error:", response.status, errText);
      return Response.json(
        {
          reply:
            "Too many requests! The AI needs a short break. Please wait 20 seconds. In the meantime, feel free to explore my projects on the website!",
        },
        { status: 500 }
      );
    }

    const data = await response.json();
    const reply =
      data?.choices?.[0]?.message?.content ?? "No reply received.";

    return Response.json({ reply });
  } catch (error) {
    console.error("Error in POST /api/getData:", error);
    return Response.json({ reply: "Something went wrong." }, { status: 500 });
  }
}
