import type { reportType } from "@/services/types";
import { Link } from "react-router-dom";

const ReportCard = ({
  id,
  title,
  report,
  writer,
  writerrol,
  writerprofile,
  date,
}: reportType) => {
  return (
    <Link to={"/Report-detail/" + id}  className="relative grid gap-2 max-w-[350px] shadow-md shadow-[#6A838A] p-6 bg-white rounded-xl">
      <div className="absolute bg-[#07303C] rounded-l-2xl h-24 w-3 top-3 -left-3"></div>
      <img src={writerprofile} alt="avatar" className=" w-16 h-16 border-2 rounded-full" />
      <p className="font-semibold text-[#041D24] text-lg">
        {writer}
         <span className="text-[#395963] text-sm"> {writerrol} </span>{" "}
      </p>
      <p className="font-semibold text-[#041D24] text-lg">
        {title}
      </p>

      <p>

        {report}
      </p>
      <p className="text-[#395963]/40 text-sm font-semibold ">
        {date}
      </p>
    </Link>
  );
};

export default ReportCard;
