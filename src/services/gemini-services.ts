import { config } from '../config/env';
import { GoogleGenerativeAI } from '@google/generative-ai';

if (!config.geminiApiKey) {
  throw new Error('GEMINI_API_KEY is missing');
}

const genAI = new GoogleGenerativeAI(config.geminiApiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-3-flash-preview',
});

export async function getGeminiResponse(userMessage: string): Promise<string> {
  
  try {
    
    const result = await model.generateContent(userMessage);
    return result.response.text();
  
  } catch (error: any) {
    console.error("Error occured: ", error.message);
    throw error;
  }
}
