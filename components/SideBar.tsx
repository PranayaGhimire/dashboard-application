'use client'
import Link from "next/link"
import { IoHome } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { toggle } from "@/redux/layoutSlice";

const SideBar = () => {
  const isCollapse = useSelector((state:RootState) => state.layout.value);
  const dispatch = useDispatch();

  const path =usePathname();
  console.log(path);
  const links =[
    {
      name:"Home",
      route:"/",
      icon:<IoHome/>
    },
    {
      name:"Data",
      route:"/data",
      icon:<FaDatabase/>
    }
  ];
  return (
    <nav className={` hidden md:block ${isCollapse ? "w-[100px]" : "w-[250px]"}  
    h-screen shadow-lg shadow-gray-300 p-4 space-y-4 bg-linear-to-r transition-all duration-200`}>
      <div className="flex gap-2 items-center">
          {!isCollapse && <div className="font-bold">Dashboard Application</div>}
          <Button
          onClick={() => dispatch(toggle())} 
          className={`${isCollapse && "rotate-180"} bg-teal-500 hover:bg-teal-600 rounded-full cursor-pointer`}><IoIosArrowBack /></Button>
      </div>
      <ul className="space-y-3">
        {links.map((link:{name:string,route:string,icon:React.ReactNode}) => 
          <li key={link.name} className={`${path === link.route && "bg-teal-200"}
          flex gap-2  items-center  p-2 rounded-lg`}>
            <Link  href={link.route} className="flex gap-2 items-center">
                {link.icon}
               {!isCollapse && <p>{link.name}</p>}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default SideBar
