"use client";

import { useChat } from "ai/react";
export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="pt-4 pb-32">
      {messages.map((message, index) => (
        <div key={message.id} className="border-t border-black/20">
          <div className="max-w-3xl mx-auto py-6 flex">
            <span className="ml-3">{message.content}</span>
          </div>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
      </form>
    </div>
  );
}
