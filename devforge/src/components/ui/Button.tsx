import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "py-3 px-6 rounded-2xl font-semibold transition-colors duration-300";
  const variants = {
    primary: "bg-green-500 hover:bg-green-600 text-black",
    outline: "bg-gray-700 hover:bg-gray-600 text-white border border-gray-500",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
