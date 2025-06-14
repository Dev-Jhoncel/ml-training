import React, { FormHTMLAttributes, ReactNode } from "react";

interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const Form: React.FC<IFormProps> = ({ children, ...rest }) => {
  return <form {...rest}>{children}</form>;
};

export default Form;
