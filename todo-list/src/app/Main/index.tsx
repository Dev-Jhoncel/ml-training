"use client";

import { Footer } from "../Footer";
import { Todo } from "../../components/todo";
import { TodoInputs } from "@/components/todoInputs";
import { useEffect, useState } from "react";
import { TodoData } from "../../lib/interfaces/todo.interface";

const data = [
  {
    id: 1,
    title: "Learn Next.js",
    date: "2023-03-01",
    description: "Learn Next.js",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Learn Tailwind",
    date: "2023-03-02",
    description: "Learn Tailwind",
    status: "Done",
  },
  {
    id: 3,
    title: "Learn React",
    date: "2023-03-03",
    description: "Learn React",
    status: "In Progress",
  },
];

export const Main = () => {
  const [todos, setTodos] = useState<TodoData[]>([]);
  useEffect(() => {
    setTodos(data);
  }, []);

  const handleAddTodo = (newTodo: {
    title: string;
    date: string;
    description: string;
  }) => {
    const newTodoWithId = {
      id: todos.length + 1,
      ...newTodo,
      status: "In Progress",
    };
    setTodos((prevTodos) => [...prevTodos, newTodoWithId]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`Input changed: ${e.target.name} = ${e.target.value}`);
  };

  return (
    <>
    <div className="w-full items-center justify-items-center p-4 pb-16 gap-8 font-[family-name:var(--font-geist-sans)] sm:p-20 sm:pb-20 sm:gap-16">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start sm:flex-row sm:gap-8 flex-grow">
        <TodoInputs
          onSubmit={handleAddTodo}
          onInputChange={handleInputChange}
        />
        <Todo todos={todos} />
      </main>
    </div>
    <Footer />
    </>
  );
};
