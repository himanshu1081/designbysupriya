"use client"
import { motion } from "motion/react"
import PortfolioWork from "./PortfolioWork";

const Portfolio = () => {

    type PortfolioDataType =
        {
            id: Number,
            title: string,
            category: string,
            image: string,
            year: string
        }

    const portfolioData: PortfolioDataType[] = [
        {
            id: 1,
            title: "The Greenwich Townhouse",
            category: "Kitchen Design",
            image: "images/project-kitchen-1.jpg",
            year: "2024",
        },
        {
            id: 2,
            title: "Soho Penthouse Suite",
            category: "Bedroom Design",
            image: "images/project-bedroom-1.jpg",
            year: "2024",
        },
        {
            id: 3,
            title: "Hamptons Coastal Retreat",
            category: "Bedroom Design",
            image: "images/project-bedroom-2.jpg",
            year: "2023",
        },
        {
            id: 4,
            title: "Chelsea Chef's Kitchen",
            category: "Kitchen Design",
            image: "images/project-kitchen-2.jpg",
            year: "2023",
        },
    ]
    return (
        <div
            id="portfolio"
            className="px-1 md:px-5 py-10 bg-[#ede8d0] lg:px-30 min-h-screen text-black/60 ">
            <div className="w-full flex flex-col justify-center items-center gap-1 md:gap-2">
                <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: .7, delay: .1 }}
                    className="text-xs md:text-sm uppercase tracking-widest">
                    Selected Work
                </motion.span>
                <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: .7, delay: .2 }}
                    className="text-3xl md:text-6xl font-georgia text-black">
                    Our <span className="italic">Portfolio</span>
                </motion.span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 align-middle justify-items-center p-4 w-full h-fit">
                {
                    portfolioData.map((p, index) => (
                        <PortfolioWork
                            key={index}
                            id={p.id}
                            image={p.image}
                            category={p.category}
                            year={p.year}
                            title={p.title}
                        />
                    ))
                }
            </div>
            <div className="w-full uppercase h-fit flex justify-center items-center my-5 cursor-pointer">
                <div className="border w-fit text-sm md:text-base p-2 lg:p-3 hover:bg-black hover:text-white transition-all ease-in-out duration-200">
                    View all Project
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
