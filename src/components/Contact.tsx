"use client"
import { motion } from "motion/react"
import PortfolioWork from "./PortfolioWork";
import ContactInfo from "./ContactInfo";

const Contact = () => {

    return (
        <div
            id="contact"
            className="px-1 md:px-5 xl:px-40 py-10 bg-[#f9f8f6] lg:px-30  min-h-screen text-black/60 max-w-screen flex flex-col justify-between items-center gap-10 h-screen">
            <div className="flex flex-col w-full gap-5 justify-center items-center h-full">
                <div className="w-full flex flex-col justify-center items-center gap-1 md:gap-2 ">
                    <motion.span
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .7, delay: .1 }}
                        viewport={{ once: true }}
                        className="text-xs md:text-sm uppercase tracking-widest">
                        Start Your Journey
                    </motion.span>
                    <motion.span
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .7, delay: .2 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-6xl font-georgia flex flex-col justify-center items-center text-black">
                        Let's Create Something <span className="italic">Beautiful Together</span>
                    </motion.span>
                </div>
            </div>
            <div className=" w-full flex flex-col justify-center items-center">
                {/* <div className="w-2/4 md:w-3/4 uppercase h-fit flex flex-col md:flex-row justify-around items-center my-5 cursor-pointer gap-5 md:gap-0">
                    <div className="text-white border  md:w-fit text-sm md:text-base p-2 md:p-3  bg-black hover:bg-black/80 hover:text-white transition-all ease-in-out duration-200 md:px-10 whitespace-nowrap">
                        Schedule a Consultation
                    </div>
                    <div className="border  md:w-fit text-sm md:text-base p-2 md:p-3 hover:bg-black hover:text-white transition-all ease-in-out duration-200 px-10 whitespace-nowrap">
                        Contact Us
                    </div>
                </div> */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: .4 }}
                    viewport={{ once: true }}
                    className="border-t border-black/20 w-full flex justify-between items-start lg:pb-5 text-black/50">
                </motion.div>
                <ContactInfo />
            </div>
        </div>
    );
};

export default Contact;
