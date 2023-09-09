// api/chat

import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const runtime = "edge";

export async function POST(req: Request) {
  const body = await req.json();
  const { messages } = body;
 
  //  ask openai for the streaming chat completion
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages,
  });
 
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
