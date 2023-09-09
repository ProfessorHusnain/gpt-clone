"use client";

import { useChat } from "ai/react";
import {BiSend} from 'react-icons/bi'
export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="pt-4 pb-32">
      {messages.map((message) => {
        return (
          <div
            key={message.id}
            className={`border-t border-black/10 
          ${message.role === "assistant" && "bg-gray-50"}`}
          >
            <div className="max-w-3xl mx-auto py-6 flex">
              <span className="ml-3">{message.content}</span>
            </div>
          </div>
        );
      })}
      <form
        onSubmit={handleSubmit}
        className="fixed inset-x-0 bottom-10 max-w-3xl mx-auto  
      flex shadow-xl px-3 text-sm justify-between rounded-lg border"
      >
        <input
          className="w-full h-10 py-8 outline-none"
          placeholder="I'm looking for.........."
          type="text"
          value={input}
          onChange={handleInputChange}
        />

        <button className="flex items-center justify-center text-center group bg-blue-700">
          <span
            className="group-hover:translate-x-2
         duration-500 transition-all"
          >
            <span
              className="flex group-hover:translate-y-6   text-center
           group-hover:opacity-0 transition-all duration-1000"
            >
              Submit
            </span>
          </span>
          <span className="flex -translate-y-[100%] -translate-x-[100%]
          duration-500 transition-all opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
          Submit
          </span>
        </button>
      </form>
    </div>
  );
}
