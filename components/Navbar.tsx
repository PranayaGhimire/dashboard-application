"use client";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { RootState } from "@/redux/store";
import { toggle } from "@/redux/layoutSlice";
import PhoneSideBar from "./PhoneSideBar";

const Navbar = () => {
  const isOpen = useSelector((state: RootState) => state.layout.value);
  const dispatch = useDispatch();
  return (
    <nav className="p-4  shadow-lg   ">
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/20">
          <div className="absolute left-0 top-0 h-full  bg-white shadow-xl">
            <PhoneSideBar />
          </div>
        </div>
      )}
      <div className="flex justify-between items-center ">
        <div className="font-bold">Dashboard</div>
        <Button
          onClick={() => dispatch(toggle())}
          className="md:hidden bg-teal-600"
        >
          <GiHamburgerMenu />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
