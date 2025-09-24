import ReportCard from "@/components/ReportCard";
import { UseGetAllReports } from "@/services/api/getApi";
import type { reportType } from "@/services/types";
import { useEffect, useState } from "react";

const ReportPage = () => {
  const reports = UseGetAllReports();

  const [reportList, setReportList] = useState<reportType[]>([]);

  useEffect(() => {
    if (reports.data?.reports) {
      setReportList(reports.data?.reports);
    }
  }, [reports.data?.reports]);

  return (
    <div>
      <div className="grid grid-cols-3 justify-items-center gap-8 m-20">
        {reportList.map((data) => (
          <ReportCard
            key={data._id}
            _id={data._id}
            title={data.title}
            report={data.report}
            writer={data.writer}
            writerrol={data.writerrol}
            writerprofile={data.writerprofile}
            date={data.date}
          />
        ))}
      </div>
    </div>
  );
};

export default ReportPage;
