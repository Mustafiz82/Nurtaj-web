import { BsTruck } from "react-icons/bs";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { RiStore2Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";


export const HeaderData = [
    {
        icon : <BsTruck />,
        title : "Free shipping" , 
        subtitle : "Incredible"

    },
    {
        icon : <MdOutlineWorkspacePremium />,
        title : "Premium Membership" , 
        subtitle : "Get Up to 70% discount*"

    },
    {
        icon : <HiOutlineDevicePhoneMobile />,
        title : "Get the Nurtaj App" , 
        subtitle : ""

    },
    {
        icon : <RiStore2Line />,
        title : "" , 
        subtitle : "Start Selling to Millions of Buyers on Nurtaj",
        sideIcon  : <IoIosArrowForward/>

    },
]