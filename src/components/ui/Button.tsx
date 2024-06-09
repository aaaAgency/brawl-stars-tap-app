import React from "react";

type ButtonTypes = {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonTypes> = ({ children, className, onClick }) => {
  return (
    <button
      className={`bg-[#333B4E] border border-[#000E2E] 
        flex items-center justify-center h-[60px] w-full rounded-xl text-lg text-white font-medium ${className}
        shadow-grayButton`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
