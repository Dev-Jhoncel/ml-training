import { DateInputs } from "./dateInputs";
import { TextBox } from "./textBox";
import React, { useState } from "react";

interface TodoInputsProps {
  onSubmit: (todo: {
    title: string;
    date: string;
    description: string;
  }) => void;
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TodoInputs = ({ onSubmit }: TodoInputsProps) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, date, description });
    setTitle("");
    setDate("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 w-full border border-gray-300 rounded-md p-4 sm:gap-4 sm:max-w-md"
    >
      <div className="flex flex-col gap-2">
        <TextBox
          type="text"
          placeholder="Enter your text here"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <DateInputs
          value={date}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDate(e.target.value)
          }
        />
        <TextBox
          type="text"
          value={description}
          placeholder="Enter your description here"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
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
