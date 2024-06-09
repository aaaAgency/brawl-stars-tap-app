import React from "react";
import BalanceImg from "/static/img/balance-img.png";
import BalanceBg from "/static/svg/balance-bg.svg";

type BalanceType = {
  balance: number;
  className?: string;
};

const Balance: React.FC<BalanceType> = ({ balance, className }) => {
  return (
    <div
      className={`relative flex items-center gap-[14px] rounded-[5px] ${className}`}
    >
      <img className="-ml-[30px] x w-[66px] h-[66px]" src={BalanceImg} alt="" />
      <span className="font-bold text-[36px] mr-[80px]">{balance}</span>
      <img
        style={style}
        className="absolute z-[-5] rounded-[5px]"
        src={BalanceBg}
        alt=""
      />
    </div>
  );
};

const style = {
  boxShadow: "0px 5px 2.2px 0px #655F86 inset, 0px 2px 2.5px 0px #000000CC",
  clipPath: "polygon(0 0, 100% 0%, 97% 100%, 0% 100%)",
};

export default Balance;
