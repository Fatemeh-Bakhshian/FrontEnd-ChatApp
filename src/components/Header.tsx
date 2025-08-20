import { HugeiconsIcon } from "@hugeicons/react";
import { Sun01Icon, Moon02Icon, UserIcon } from "@hugeicons/core-free-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const menu = [
    {
      id: 0,
      title: "Home",
      Link: "/",
    },
    {
      id: 2,
      title: "ReprotPage",
      Link: "/report-page",
    },
  ];
  return (
    <div className=" py-8 max-sm:px-2 max-sm:pt10 grid grid-cols-3 gap-28 ">
      <div className="justify-self-start flex gap-3">
        <HugeiconsIcon icon={Sun01Icon} className="block" />
        <HugeiconsIcon icon={Moon02Icon} className="hidden" />
        <Link to={'/login'}>
          <HugeiconsIcon icon={UserIcon} />
        </Link>
      </div>

      <h1 className="font-semibold text-xl justify-self-center">
        {" "}
        Welcome To Job Report Application{" "}
      </h1>

      <ul className="flex font-medium gap-3 justify-self-end">
        {menu.map((items) => (
          <li
            key={items.id}
            className="pb-2 transition-all duration-700 hover:text-[#1e8eb0] bg-none hover:bg-gradient-to-r from-white via-[#1e8eb0] to-white hover:cursor-pointer"
          >
            <Link to={items.Link} className="bg-white w-full h-full p-2">
              {items.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
