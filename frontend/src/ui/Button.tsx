import React from "react";
import { cn } from "./utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button {...props} className={cn("bg-theme font-medium w-full py-2 rounded-full text-white", className)}>
      {children}
    </button>
  );
};

export default Button;
