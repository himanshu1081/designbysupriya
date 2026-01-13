"use client"
import { motion } from "motion/react"

const PortfolioWork = ({ id,
    title,
    category,
    image,
    year }) => {

    return (
        <div className="w-70 md:w-100 xl:w-130 h-100 md:h-130 xl:h-160 p-1 flex flex-col justify-around items-center bg-[#e9e6e2]">
            <div className="xl:w-130 xl:h-130 overflow-hidden">
                <img
                    src={image}
                    alt="portfolio-design-image"
                    className="object-cover w-70 h-70 md:w-100 md:h-100 xl:w-130 xl:h-130 hover:scale-110 hover:brightness-90 transition-all duration-500 ease-in-out"
                />
            </div>
            <div className="flex w-full justify-between h-fit text-xs md:text-sm">
                <span>
                    {category}
                </span>
                <span>
                    {year}
                </span>
            </div>
            <div className="flex w-full items-start text-xl md:text-2xl lg:text-3xl font-georgia font-bold text-black">
                {title}
            </div>
            <div className="w-full h-fit flex justify-center items-center my-5 cursor-pointer">
                <div className="border uppercase bg-black w-fit text-sm md:text-base p-2 lg:p-3 hover:bg-white hover:border-white hover:text-black text-white transition-all ease-in-out duration-200">
                    View Project
                </div>
            </div>
        </div>
    );
};

export default PortfolioWork;
