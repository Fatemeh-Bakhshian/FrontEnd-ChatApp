import ReportCard from "@/components/ReportCard";
import { UseGetAllReports } from "@/services/api/getApi";

const ReportPage = () => {
  const reports = UseGetAllReports();

  return (
    <div>
      <div className="grid grid-cols-3 justify-items-center gap-8 m-12">
        {reports.data?.reports.map((data) => (
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
    </div>
  );
};

export default ReportPage;
