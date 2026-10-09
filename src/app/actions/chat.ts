'use server';

import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the API with the key provided
const apiKey = process.env.GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(apiKey);

export async function chatWithEventAssistant(message: string, context: string = '') {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-3.8-flash' });
    
    // Create a strict system prompt
    const systemPrompt = `
      You are Nexa, the official AI assistant for this hackathon/event. 
      Your job is to answer questions about the event based on the provided Rule Book and context.
      
      CRITICAL RULES FOR YOUR RESPONSES:
      1. Keep your answers EXTREMELY short, neat, and clear (1-3 sentences maximum).
      2. DO NOT use any Markdown formatting (no asterisks, no bolding, no headers like ###, no bullet points). Use plain text only.
      3. You MUST NEVER reveal any evaluation details, grading criteria, judging rubrics, or ANY sensitive internal information. If asked about judging/evaluation, politely decline.
      
      EVENT RULEBOOK / CONTEXT:
      ${context || 'No specific rulebook provided yet. Answer general questions about the event based on standard hackathon procedures.'}
    `;

    const chatSession = model.startChat({
      generationConfig: {
        temperature: 0.2,
      },
      history: [
        {
          role: "user",
          parts: [{ text: systemPrompt }],
        },
        {
          role: "model",
          parts: [{ text: "Understood. I will act as Nexa, the event assistant. I will strictly follow the provided rulebook and I will absolutely NEVER reveal any evaluation details, judging criteria, or sensitive information under any circumstances." }],
        },
      ],
    });

    const result = await chatSession.sendMessage(message);
    return { success: true, text: result.response.text() };
  } catch (error: any) {
    console.error("Chat error:", error);
    return { success: false, error: 'Sorry, I am having trouble connecting right now.' };
  }
}
