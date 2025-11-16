'use client'
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { RootState } from "@/redux/store";
import { toggle } from "@/redux/layoutSlice";

const Navbar = () => {
  const isOpen = useSelector((state:RootState) => state.layout.value);
  const dispatch = useDispatch();
  return (
    <nav className='flex justify-between items-center p-4  shadow-lg '>
        <div className="font-bold">Dashboard</div>
        <Button onClick={() => dispatch(toggle())} 
          className="md:hidden bg-teal-600"><GiHamburgerMenu />
        </Button>
    </nav>
  )
}

export default Navbar
