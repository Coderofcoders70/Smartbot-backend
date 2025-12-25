import { Request, Response } from 'express';
import { getGeminiResponse } from '../services/gemini-services';
import { getSmartReasoningFallback } from '../services/mock-services';

export const chatController = async (req: Request, res: Response) => {
  try {
    console.log('Chat request received');

    const { message } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({
        reply: 'Please provide a valid message.',
      });
    }

    try {
      console.log('Trying to get response from AI...');
      const aiReply = await getGeminiResponse(message);
      console.log('AI responded sucessfully');

      return res.status(200).json({
        reply: aiReply,
      });

    } catch (aiError) {
      console.warn('AI unavailable, using smart reasoning fallback');

      const fallback = getSmartReasoningFallback(message);

      return res.status(200).json({
        reply: fallback.reply,
      });
    }

  } catch (error) {
    console.error('Chat controller error:', error);

    return res.status(500).json({
      reply:
        "Something went wrong on my side. Let's try again in a moment.",
    });
  }
};
