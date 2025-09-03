import { Link } from "react-router-dom";
import ReportCard from "../ReportCard";
import { Button } from "../ui/button";
import { UseGetAllReports } from "@/services/api/getApi";
import { useEffect, useState } from "react";
import type { reportType } from "@/services/types";

const RecentReports = () => {
  const reports = UseGetAllReports();

   const [reportList, setReportList] = useState<reportType[]>([]);
  
    useEffect(() => {
      if (reports.data?.reports) {
        setReportList(reports.data?.reports);
      }
    }, [reports.data?.reports]);

  return (
    <div className="grid justify-items-center gap-6 rounded-4xl bg-[#9CACB1] shadow-sm shadow-[#6A838A] mt-20 m-12 p-8 ">
      <h1 className="font-bold text-3xl"> Recent Reports </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {reportList.slice(0, 3).map((data) => (
          <ReportCard
            key={data.id}
            id={data.id}
            title={data.title}
            report={data.report}
            writer={data.writer}
            writerrol={data.writerrol}
            writerprofile={data.writerprofile}
            date={data.date}
          />
        ))}
      </div>
      <Button>
        <Link to={"/report-page"}>See All Reports</Link>
      </Button>
    </div>
  );
};

export default RecentReports;
