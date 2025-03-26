import { TextBox } from "./textBox";
//import { useState } from "react";

export const TodoInputs = () => {
  //const [callBack, setCallback] = useState("");

  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <TextBox type="text" placeholder="Enter your text here" />
        <TextBox type="date" placeholder="Enter your date here" />
        <TextBox type="text" placeholder="Enter your description here" />
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
