import AboutUs from "@/components/Landing/AboutUs"
import Category from "@/components/Landing/Options"
import UserList from "@/components/Landing/UserList"

const Landing = () => {
  return (
    <div className='grid justify-items-center'> 
        <Category/>
        <UserList/>
        <AboutUs/>
    </div>
  )
}

export default Landing