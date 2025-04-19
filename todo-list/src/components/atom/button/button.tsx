import { ButtonHTMLAttributes, FC } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: FC<IButtonProps> = ({ label, ...rest }) => {
  return <button {...rest}>{label}</button>;
};

export default Button;
