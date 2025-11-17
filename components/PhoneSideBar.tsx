'use client'
import Link from "next/link"
import { IoHome } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { toggle } from "@/redux/layoutSlice";
import { RxCross2 } from "react-icons/rx";

const PhoneSideBar = () => {
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
    <nav className={`   
    w-[200px] h-screen shadow-lg shadow-gray-300 p-4 space-y-4 bg-linear-to-r transition-all duration-200`}>
      <div className="flex gap-2 items-center">
          <div className="font-bold">Dashboard Application</div>
          <Button
          onClick={() => dispatch(toggle())} 
          className={` bg-teal-500 hover:bg-teal-600 rounded-full cursor-pointer`}><RxCross2 /></Button>
      </div>
      <ul className="space-y-3">
        {links.map((link:{name:string,route:string,icon:React.ReactNode}) => 
          <li key={link.name} className={`${path === link.route && "bg-teal-200"}
          flex gap-2  items-center  p-2 rounded-lg`}>
            <Link  href={link.route} className="flex gap-2 items-center">
                {link.icon}
                <p>{link.name}</p>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default PhoneSideBar
