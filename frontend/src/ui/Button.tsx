import React from "react";
import { cn } from "./utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "w-full rounded-full bg-theme-500 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-theme-600 flex items-center justify-center gap-2",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
