
"use client"
import { useEffect, useState } from "react";
import { motion } from "motion/react"
import PortfolioWork from "./PortfolioWork";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

const ContactInfo = () => {
    const [size, setSize] = useState(20);

    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth < 450 ? 10 : 20);
        };

        handleResize(); // run once on mount
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: .4 }}
            viewport={{ once: true }}
            className="w-full flex flex-col md:flex-row justify-between items-start text-black/50 ">
                
            <div className="flex flex-col w-fit justify-center items-start ">
                <span className="font-georgia font-bold text-black text-base lg:text-2xl">
                    Hours
                </span>
                <div className="flex flex-col text-xs lg:text-sm">
                    <span className="whitespace-nowrap">
                        Monday – Friday
                    </span>
                    <span className="whitespace-nowrap">
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
                        Phone : +44 7344327193
                    </span>
                    <span className="hover:text-black cursor-pointer flex gap-1 items-center justify-start">
                        Email : supriya.chaudhary@wrenkitchens.com
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactInfo;
