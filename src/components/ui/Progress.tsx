import React from "react";

type ProgressType = {
  value: number;
  className?: string;
};

const Progress: React.FC<ProgressType> = ({ value, className }) => {
  return (
    <div
      className={`relative h-[18px] w-full bg-[#1B233A] rounded-[5px] overflow-hidden ${className}`}
    >
      <div
        className="h-full transition-all duration-100 ease-in-out rounded-[5px]"
        style={{
          background:
            "linear-gradient(292.97deg, rgba(249, 137, 5, 0.75) -19.33%, rgba(252, 72, 2, 0.75) 27.58%, rgba(254, 138, 1, 0.75) 59.24%, rgba(225, 167, 32, 0.75) 78.88%, rgba(252, 177, 0, 0.75) 96.21%), linear-gradient(0deg, #FDC05E, #FDC05E)",
          width: `${value / 10}%`,
          boxShadow:
            "0px 0px 10px 0px #F2960E inset, 0px 5px 2.2px 0px #FFCC55 inset",
        }}
      ></div>
    </div>
  );
};

export default Progress;
