type ReasoningResult = {
  reply: string;
};

export function getSmartReasoningFallback(userMessage: string): ReasoningResult {
  const normalized = userMessage.trim().toLowerCase();

  if (normalized.length < 7) {
    return {
      reply:
        "Hello, How can I help you today ?",
    };
  } else if (normalized.length < 15) {
    return {
      reply:
      "I want to make sure I understand you correctly. Could you add a bit more context or clarify what you're looking for?"
    }
  }

  return {
    reply:
      "Here’s how I’d approach this at a high level:" +
      "\n• First, clarify the goal and constraints." +
      "\n• Then, break the problem into smaller, manageable parts." +
      "\n• Evaluate options logically instead of jumping to conclusions." +
      "\n• Arrive at a decision based on trade-offs." +
      "\n\nIf you want, I can go deeper into any step or tailor this to a specific scenario.",
  };
}
