import { Link } from "react-router-dom";
import ReportCard from "../ReportCard";
import { Button } from "../ui/button";
import { UseGetAllReports } from "@/services/api/getApi";

const RecentReports = () => {
  const reports = UseGetAllReports();
  return (
    <div className="grid justify-items-center gap-6 rounded-4xl bg-[#CDD6D8] shadow-sm shadow-[#6A838A] mt-20 m-12 p-8 ">
      <h1 className="font-bold text-3xl"> Recent Reports </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {reports.data?.reports.slice(0, 3).map((data) => (
          <ReportCard
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
