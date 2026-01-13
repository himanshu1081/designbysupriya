"use client"
import { motion } from "motion/react"

const ServicesList = ({
    title,
    description,
    icon: Icon }) => {

    return (
        <div className="w-full flex flex-col gap-5 justify-around items-start border border-white/20 hover:border-white/60 p-5">
            <div>
                <Icon className="w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 text-white" />
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl font-georgia whitespace-nowrap">
                {title}
            </div>
            <div className="text-xs md:text-sm text-white/60">
                {description}
            </div>
        </div>
    );
};

export default ServicesList;
