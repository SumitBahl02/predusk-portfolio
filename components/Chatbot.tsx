"use client";
import React, { useRef, useEffect, useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { v4 as uuidv4 } from "uuid";
export default function Chatbot({ isOpen, setIsOpen } : { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) {
  const [isThrottled, setIsThrottled] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi there! I'm Sumit, a B.Tech Electrical student at IIT Ropar. Thanks for visiting my portfolio! Feel free to ask me anything you'd like to know about me.",
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  const [sessionId, setSessionId] = useState(uuidv4());

  const handleSend = async () => {
    if (!input.trim() || isThrottled) return;
  
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
  
    try {
      const response = await fetch("/api/getData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input, sessionId }),
      });
  
      const data = await response.json();
  
      // Throttling logic
      if (data.reply.includes("Too many requests")) {
        setIsThrottled(true);
        setTimeout(() => setIsThrottled(false), 20000); // 20 sec disable
      }
  
      const botMessage = {
        sender: "bot",
        text: data.reply || "Sorry, I couldn't get that. Try again?",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Something went wrong. Please try again." },
      ]);
    }
  };
  
  // Dynamic styling

  return (
    <div
      className="fixed bottom-4 right-4 sm:right-6 z-50 flex flex-col items-end"
    >
      {isOpen && (
        <div
          className={`w-[90vw] sm:w-150 max-h-[80vh] h-[80vh] m-2 sm:m-4 p-3 rounded-lg shadow-lg flex flex-col bg-[#1e1e1e]`}
        >
          {/* Header */}
          <div className={`flex justify-between items-center border-b pb-2 mb-2 border-gray-700`}>
            <span className="text-base sm:text-lg font-semibold">👨🏻‍🏫 Hi! I am Sumit</span>
            <X className="cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>

          {/* Messages */}
          <div
            className={`flex-1 overflow-y-auto mb-2 p-2 border rounded space-y-1 border-gray-700`}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start ${
                  msg.sender === "bot" ? "justify-start" : "justify-end"
                }`}
              >
                {msg.sender === "bot" && (
                  <div className="mr-2 mt-1 text-blue-400 font-semibold text-sm">🤖</div>
                )}
                <div
                  className={`relative p-3 rounded-2xl text-sm sm:text-base break-words w-fit max-w-[85%] shadow-md bg-gradient-to-br from-gray-700 to-gray-800 text-white`}
                >
                  {msg.sender === "bot" ? (
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  ) : (
                    msg.text
                  )}
                  {msg.sender === "bot" && (
                    <span className="absolute bottom-0 right-0 text-xs text-gray-400 pr-2 pb-1">
                      AI
                    </span>
                  )}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input Field */}
          <div className="flex items-center gap-2">
          <input
              type="text"
              className={`p-2 flex-1 border rounded text-sm bg-gray-700 text-gray-100 border-gray-700`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              disabled={isThrottled}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <button
              onClick={handleSend}
              className="px-3 py-2 text-sm bg-blue-600 rounded text-white hover:bg-blue-700 transition disabled:bg-gray-400"
              disabled={isThrottled}
              aria-label="Send message"
            >
              📩
            </button>
          </div>
        </div>
      )}

    </div>
  );
}