
"use client"
import { motion } from "motion/react"
import PortfolioWork from "./PortfolioWork";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

const ContactInfo = () => {

    return (
        <div className="w-full flex justify-between items-start px-20 pb-5 text-black/50 bg-[#f9f8f6]">
            <div className="flex flex-col w-30 justify-center items-start ">
                <span className="font-georgia font-bold text-2xl text-black">
                    Studio
                </span>
                <span className="text-sm">
                    147 West 24th Street
                    New York, NY 10011
                </span>
            </div>
            <div className="flex flex-col w-30 justify-center items-start ">
                <span className="font-georgia font-bold text-2xl text-black">
                    Hours
                </span>
                <div className="flex flex-col text-sm">
                    <span className="whitespace-nowrap">
                        Monday – Friday
                    </span>
                    <span className="whitespace-nowrap">
                        9:00 AM – 6:00 PM
                    </span>
                </div>
            </div>
            <div className="flex flex-col w-30 justify-center items-start">
                <span className="font-georgia font-bold text-2xl text-black">
                    Connect
                </span>
                <div className="text-sm flex flex-col gap-2 ">
                    <span className="hover:text-black cursor-pointer flex gap-1 items-center justify-start">
                        <AiOutlineInstagram size={20} />
                        <span>
                            INSTAGRAM
                        </span>
                    </span>
                    <span className="hover:text-black cursor-pointer flex gap-1 items-center justify-start">
                        <FaPinterest size={20} />
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
