import { UseGetAllUser } from "@/services/api/getApi";

const Employe = () => {
  const managers = UseGetAllUser();

  return (
    <div className=" gap-6 flex flex-wrap justify-center  mx-12">
      <div className="border  bg-[#07303C] text-white p-5 rounded-4xl w-1/3 ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
        obcaecati possimus sit modi quaerat excepturi, animi corrupti vitae
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
        obcaecati possimus sit modi quaerat excepturi, animi corrupti vitae
        ipsum? Eos impedit ea quibusdam asperiores corrupti iusto alias nesciunt
        repudiandae non!{" "}
      </div>
      <div className="border border-[#041D24] shadow-[#041D24] shadow-md p-5 rounded-4xl w-1/3 flex justify-center items-center ">
        {managers.data?.users.map((i) => (
          <div key={i.id} className="grid justify-items-center ">
            <img className="rounded-4xl m-2" src={i.roll === "assistant" ? i.profile : ""} />
            <p className="text-lg font-semibold text-[#395963]">
              {i.roll === "assistant" ? i.name : ""}
              <span className="text-[#395963] text-sm">
                {" "}
                {i.roll === "assistant" ? i.roll : ""}{" "}
              </span>{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employe;
