import React from "react";
import { cn } from "./utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "bg-theme-500 hover:bg-theme-600 w-full rounded-full py-2 font-medium text-white transition-all duration-300 hover:scale-105",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
