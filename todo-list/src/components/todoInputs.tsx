"use client";

import { FC, useState } from "react";
import { Todo } from "../lib/interfaces/todo.interface";

interface TodoProps {
  handleSubmit: Todo;
}

export const TodoInputs: FC<TodoProps> = () => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [todo, setTodo] = useState<Todo>({ text, date, description });

  const handleaAddTodo = () => {
    console.log("Submitted");
    console.log(text, date, description);
    setTodo({ text, date, description });
    console.log(todo);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleaAddTodo}>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your text here"
          onChange={(e) => setText(e.target.value)}
          key={1}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        />
        <input
          type="date"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your date here"
          key={2}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your description here"
          key={3}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
