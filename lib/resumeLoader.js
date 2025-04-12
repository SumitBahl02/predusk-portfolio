import fs from 'fs';
import path from 'path';
import pdf from 'pdf-parse';

const RESUME_PATH = path.join(process.cwd(), 'app', 'detailed_resume.pdf');

let cachedResume: string | null = null;

export async function resumeLoader(): Promise<string> {
  if (cachedResume) return cachedResume;

  try {
    const dataBuffer = fs.readFileSync(RESUME_PATH);
    const data = await pdf(dataBuffer);
    
    cachedResume = data.text
      .replace(/\s+/g, ' ')
      .replace(/(\r\n|\n|\r){3,}/gm, '\n\n')
      .trim();
    
    return cachedResume;
  } catch (error) {
    console.error('Failed to load resume:', error);
    throw new Error('Could not load resume data');
  }
}