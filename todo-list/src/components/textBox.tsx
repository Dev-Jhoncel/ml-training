import React from "react";
import PropTypes from "prop-types";
import { Todo } from "../lib/interfaces/todo.interface";

/*
TODO: get the trigger event when a user click or press enter key     
*/
export const TextBox = ({ type, placeholder }: Todo) => {
  return (
    <input
      type={type}
      className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={placeholder}
    />

  );
};

TextBox.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
