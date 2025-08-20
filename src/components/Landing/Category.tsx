import { Task01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const Category = () => {
  return (
    <div className="text-sm grid grid-cols-3 gap-4 justify-items-center text-center">
      <div className="bg-amber-300 col-span-2 ml-8 grid justify-items-center w-[200px] h-[200px]  rounded-full font-semibold p-2 shadow-lg shadow-[#03407826]">
        <HugeiconsIcon icon={Task01Icon} className="mt-10 w-16 h-16" />
        <p>Attendance sheet</p>
      </div>

      <div className="bg-amber-300 col-span-1 mt-16 grid justify-items-center w-[200px] h-[200px]  rounded-full font-semibold p-2 shadow-lg shadow-[#03407826]">
        <HugeiconsIcon icon={Task01Icon} className="mt-10 w-16 h-16" />
        <p>report sheet</p>
      </div>

      <div className="bg-amber-300 col-span-3 ml-0 grid justify-items-center w-[200px] h-[200px]  rounded-full font-semibold p-2 shadow-lg shadow-[#03407826]">
        <HugeiconsIcon icon={Task01Icon} className="mt-10 w-16 h-16" />
        <p>request sheet</p>
      </div>
    </div>
  );
};

export default Category;
