import React, { InputHTMLAttributes } from "react";

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...rest }) => {
  return <input {...rest} />;
};

export default Input;
