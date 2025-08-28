import AboutUs from "@/components/Landing/AboutUs";
import Category from "@/components/Landing/Category";
import Employe from "@/components/Landing/Employe";
import Managers from "@/components/Landing/Managers";
import RecentReports from "@/components/Landing/RecentReports";

const Landing = () => {
  return (
    <div className="grid justify-items-center gap-6 my-5">
      {/* hero  */}
      <div className="flex flex-wrap justify-center items-center gap-8 p-8 mt-10 mb-20">
        <AboutUs />
        <Category />
      </div>

      <Managers/>
      <Employe />
      <RecentReports/>
    </div>
  );
};

export default Landing;
