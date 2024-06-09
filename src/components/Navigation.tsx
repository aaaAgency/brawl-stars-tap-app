import FriendsImg from "/nav-icons/friends.svg";
import RatingImg from "/nav-icons/rating.svg";
import TasksImg from "/nav-icons/tasks.svg";
import MarketImg from "/nav-icons/market.svg";
import { NavLink } from "react-router-dom";

const MyBr = () => {
  return <div className="min-w-px h-[60px] bg-[#FFEACBB2]" />;
};

const links = [
  {
    name: "Друзья",
    img: FriendsImg,
    // path: "/friends",
    path: "/",
  },
  {
    name: "Рейтинг",
    img: RatingImg,
    // path: "/rating",
    path: "/",
  },
  {
    name: "Задания",
    img: TasksImg,
    // path: "/tasks",
    path: "/",
  },
  {
    name: "Рынок",
    img: MarketImg,
    // path: "/market",
    path: "/",
  },
];

const Navigation = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex items-center justify-between w-full bg-[#333B4E] border-[#000E2E] rounded-[12px] px-[24px] ${className}`}
      style={{
        boxShadow:
          "0px 2px 2.5px 0px #000000CC, 0px 5px 2.2px 0px #655F86 inset",
      }}
    >
      {links.map(({ name, img, path }, index) => (
        <>
          <NavLink key={name} to={path} className="flex flex-col items-center">
            <img className="w-[30px] h-[30px]" src={img} alt={name} />
            <span className="text-[12px] font-medium leading-[14px]">
              {name}
            </span>
          </NavLink>
          {index !== links.length - 1 && <MyBr />}
        </>
      ))}
    </div>
  );
};

export default Navigation;
