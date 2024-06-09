import React from "react";

type ButtonTypes = {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonTypes> = ({ children, className, onClick }) => {
  return (
    <button
      className={`bg-[#333B4E] border border-black 
        flex items-center justify-center h-[60px] w-full rounded-xl text-white font-medium
        shadow-grayButton ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
