import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const AboutUs = () => {
  return (
    <div className="w-1/2 max-w-[500px]">
      <h3 className="font-bold text-4xl text-[#395963] my-5">AboutUs</h3>
      <p className="">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro magni
        officiis consequuntur eius deserunt! Sit quidem asperiores praesentium
        aperiam, sint error nulla voluptatem neque maxime optio iste quae ea
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro magni
        officiis consequuntur eius deserunt! Sit quidem asperiores praesentium
        aperiam, sint error nulla voluptatem neque maxime optio iste quae ea
      </p>
      <div className="my-4 flex gap-4">
        <Button>
          <Link to={"/login"}>start your journey</Link>
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;
