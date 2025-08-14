import { Task01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const Options = () => {
  const webOptions = [
    {
      id: 1,
      name: "Attendance sheet",
      icon: <HugeiconsIcon icon={Task01Icon} />,
    },
    { id: 2, name: "report sheet", icon: <HugeiconsIcon icon={Task01Icon} /> },
    { id: 3, name: "request sheet", icon: <HugeiconsIcon icon={Task01Icon} /> },
  ];
  return (
    <div className="my-12">
      <h3 className="font-bold text-2xl text-[#001F54] text-center my-5">
        {" "}
        Our features{" "}
      </h3>
      <div className="flex flex-wrap gap-8">
        {webOptions.map((item) => (
          <div
            key={item.id}
            className="grid justify-items-center font-semibold gap-4 p-8 rounded-lg shadow-lg shadow-[#03407826]"
          >
            {item.icon}
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;
