
"use client"
import { motion } from "motion/react"
import PortfolioWork from "./PortfolioWork";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

const ContactInfo = () => {

    const size:number = window.innerWidth < 450 ? 10 : 20;

    return (
        <div className="w-full flex flex-col lg:flex-row justify-between items-start p-3 text-black/50 ">
            <div className="flex flex-col w-fit justify-center items-start ">
                <span className="font-georgia font-bold text-base lg:text-2xl text-black">
                    Studio
                </span>
                <span className="text-xs lg:text-base">
                    147 West 24th Street
                    New York, NY 10011
                </span>
            </div>
            <div className="flex flex-col w-fit justify-center items-start ">
                <span className="font-georgia font-bold text-black text-base lg:text-2xl">
                    Hours
                </span>
                <div className="flex flex-col text-xs lg:text-sm">
                    <span className="whitespace-nowrap">
                        Monday – Friday
                    </span>
                    <span className="whitespace-nowrap text-xs lg:text-base">
                        9:00 AM – 6:00 PM
                    </span>
                </div>
            </div>
            <div className="flex flex-col w-fit justify-center items-start">
                <span className="font-georgia font-bold text-base lg:text-2xl text-black">
                    Connect
                </span>
                <div className="text-xs lg:text-sm flex flex-col gap-2 ">
                    <span className="hover:text-black cursor-pointer flex gap-1 items-center justify-start">
                        <AiOutlineInstagram size={size} />
                        <span>
                            INSTAGRAM
                        </span>
                    </span>
                    <span className="hover:text-black cursor-pointer flex gap-1 items-center justify-start">
                        <FaPinterest size={size} />
                        <span>
                            PINTEREST
                        </span>
                    </span>
                </div>

            </div>
        </div>
    );
};

export default ContactInfo;
