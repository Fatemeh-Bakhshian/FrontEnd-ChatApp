import { UseGetReportById } from "@/services/api/getApi";
import type { reportType } from "@/services/types";
import { FavouriteIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReportDetail = () => {
  const { id } = useParams();
  const numericId = parseInt(id ?? "0", 10);

  const rep = UseGetReportById(numericId);
  console.log(rep.data?.report);

   const [report, setReport] = useState<reportType>();
  
    useEffect(() => {
      if (rep.data?.report) {
        setReport(rep.data?.report);
      }
    }, [rep.data?.report]);

  return(
      <div className="m-20 mx-auto w-1/2 text-lg">
        {/* profile info:  */}
        <div className="flex flex-wrap gap-6 items-end my-10">
          <img
            src={report?.writerprofile}
            className="rounded-4xl shadow-[#041D24] shadow-md"
          />
          <div>
            <div className="flex gap-2 items-center">
              <p className="font-bold text-[#07303C]">
                {report?.writer}
              </p>
              <p className="text-sm text-[#395963] font-semibold">
                {report?.writerrol}
              </p>
            </div>
            <div className="flex text-sm gap-1">
              <HugeiconsIcon icon={FavouriteIcon} color="red" fill="red" />
              {report?.like}
            </div>
            <p className="text-sm text-[#395963]/70 font-semibold my-2">
              Write Date: {report?.date}
            </p>
          </div>
        </div>

        {/* reportr : */}

        <p className="my-10">{report?.report}</p>

        {/* comments :  */}
        <div className="border-2 border-[#6A838A] rounded-4xl p-5 ">
          <h3 className="text-[#07303C] font-bold">comments:</h3>

          {report?.comment?.map((i) => (
            <div
              key={i.id}
              className="flex gap-3 items-center my-5 bg-[#e9f0f1] p-4 rounded-4xl inset-shadow-sm inset-shadow-[#07303C]/50 "
            >
              <img src={i.writerprofile} className="rounded-full w-20 h-20" />
              <div>
                <p className="flex items-center gap-2 font-semibold text-sm">
                  {i.writer}
                  <span className="text-[#395963]/60 ">{i.writerrol}</span>
                </p>
                <p className="text-xs text-[#395963]/60 font-semibold">
                  {i.date}
                </p>
                <p className="font-semibold text-[#07303C]"> {i.text} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  
};

export default ReportDetail;
