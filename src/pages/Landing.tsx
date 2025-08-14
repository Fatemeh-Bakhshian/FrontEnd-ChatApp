import AboutUs from "@/components/Landing/AboutUs"
import Category from "@/components/Landing/Options"

const Landing = () => {
  return (
    <div className='grid justify-items-center'> 
        <Category/>
        <AboutUs/>
    </div>
  )
}

export default Landing