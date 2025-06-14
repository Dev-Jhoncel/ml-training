import React, { LabelHTMLAttributes } from "react";

interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
  htmlFor: string;
}

const Label: React.FC<ILabelProps> = ({ text, ...rest }) => {
  return <label {...rest}>{text}</label>;
};

export default Label;
