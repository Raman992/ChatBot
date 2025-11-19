import { GoogleGenerativeAI } from "@google/generative-ai";

async function runChat(prompt) {
  const ai = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

  const model = ai.getGenerativeModel({
    model: "gemini-2.0-flash-lite",
  });

  const stream = await model.generateContentStream({
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
  });

  let fullText = "";

  for await (const chunk of stream.stream) {
    const text = chunk.text();
    if (text) {
      console.log(text);
      fullText += text;
    }
  }

  return fullText;
}

export default runChat;
