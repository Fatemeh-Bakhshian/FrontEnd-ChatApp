import { HugeiconsIcon } from "@hugeicons/react";
import { Sun01Icon, Moon02Icon, UserIcon } from "@hugeicons/core-free-icons";

const Header = () => {
  const menu = ["contact-Us", "Home", "about-Us"];
  return (
    <div className=" p-10 max-sm:px-2 max-sm:pt10 grid grid-cols-3 gap-6">
      <div className="justify-self-start flex gap-4">
        <HugeiconsIcon icon={Sun01Icon} className="block" />
        <HugeiconsIcon icon={Moon02Icon} className="hidden" />
        <HugeiconsIcon icon={UserIcon} />
      </div>
      <h1 className="font-semibold text-xl justify-self-center">
        {" "}
        Welcome To Job Report Application{" "}
      </h1>
      <ul className="flex font-medium gap-4 justify-self-end">
        {menu.map((items, i) => (
          <li key={i} className="hover:text-[#1e8eb0] hover:cursor-pointer">
            {items}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
