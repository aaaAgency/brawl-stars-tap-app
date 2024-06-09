// import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";
import Balance from "../components/ui/Balance";
import Button from "../components/ui/Button";
import Progress from "../components/ui/Progress";

import Bg from "/static/img/backgrounds/main-bg.png";
import Navigation from "../components/Navigation";
// import TapImg from "/tap-img.png";

const HomePage = () => {
  const [progressValue, setProgressValue] = useState(1000);

  useEffect(() => {
    if (progressValue <= 999) {
      const timer = setInterval(() => {
        setProgressValue((prevProgress) =>
          prevProgress <= 999 ? prevProgress + 1 : prevProgress
        );
      }, 2000);

      return () => clearInterval(timer);
    }
  }, [progressValue]);

  return (
    <main className="base-page-style relative px-5 items-center">
      <img
        className="absolute -z-10 h-full w-full object-center object-cover"
        src={Bg}
        alt="bg"
      />
      <Button className={"mt-[15px] text-lg"}>Поиск сообщества</Button>
      <Balance balance={6.534} className="mt-[24px]" />
      <button
        onClick={() => setProgressValue((prev) => prev - 1)}
        className="mt-[80px] max-w-[250px] w-full transition-transform active:scale-95 outline-none"
      >
        <div className="w-full h-[290px] bg-no-repeat bg-center bg-contain bg-[url(/static/img/tap-img.png)]" />
        {/* <img src={TapImg} alt="" className="w-full h-auto" /> */}
      </button>
      <div className="w-full flex flex-col mt-[50px]">
        <span className="leading-[19px] text-[16px] font-medium">
          {progressValue * 1} / 1000
        </span>
        <Progress value={progressValue} className="mt-[10px]" />
      </div>
      <Navigation className="mt-[15px]" />
    </main>
  );
};

export default HomePage;