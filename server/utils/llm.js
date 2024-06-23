import { ChatOpenAI } from "@langchain/openai";
import { dotenv } from "../settings.js";

const call_llm = async (question) => {
  const model = new ChatOpenAI({
    temperature: 0.0,
    apiKey: process.env.OPENAI_KEY,
    model: "gpt-3.5-turbo-16k",
  });
  const response = await model.invoke(question);
  return response;
};

module.exports = { call_llm };
