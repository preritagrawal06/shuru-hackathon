import React from "react";
import { cn } from "./utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input = ({ children, label, className, ...props }: InputProps) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <p className="text-xs font-medium">{label ? label : ""}</p>
      <div className="relative w-full">
        {children}
        <input
          {...props}
          className={cn("w-full rounded-2xl py-1 text-gray-600 focus:outline-gray-500 focus:outline-2", className, {
            "px-8": children,
          })}
        />
      </div>
    </div>
  );
};

export default Input;
