"use client"
import heroImage from "../../public/images/hero-kitchen.jpg";
import Image from "next/image";
import StartAnimation from "../components/StartAnimation";
import { motion } from "motion/react"


export default function Hero() {
    return (
        <div>
            <StartAnimation />
            <section className="relative min-h-screen flex items-center lg:px-20 text-white">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroImage}
                        alt="Luxury kitchen interior"
                        className="w-full h-full object-cover image-reveal saturate-130 contrast-130 brightness-50"
                    />
                </div>

                <div className="md:w-full flex flex-col items-center lg:items-start relative z-10 container mx-auto px-6 lg:px-12 lg:pt-24">
                    <div className="max-w-3xl">
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: .7, delay: .1 }}
                            className="text-sm font-body tracking-[0.3em] uppercase text-primary-foreground/80 mb-6 animate-fade-up"
                            style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
                        >
                            Architecture & Interior Design
                        </motion.p>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: .7, delay: .2 }}
                            className=" text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.1] mb-8 animate-fade-up font-cormorant"
                            style={{ animationDelay: "0.4s", animationFillMode: "backwards" }}
                        >
                            Designing Spaces
                            <br />
                            <span className="italic">That Inspire</span>
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: .7, delay: .3 }}
                            className="font-body text-sm lg:text-lg text-primary-foreground/90 max-w-xl mb-10 animate-fade-up"
                            style={{ animationDelay: "0.6s", animationFillMode: "backwards" }}
                        >
                            I craft bespoke kitchens and bedrooms that blend timeless elegance
                            with modern functionality, creating spaces where life unfolds
                            beautifully.
                        </motion.p>
                        <motion.div
                        initial={{ y: 15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: .7, delay: .4}}
                            className="flex gap-4"
                        >
                            <a
                                href="#portfolio"
                                className="text-xs md:text-sm tracking-widest uppercase px-4 py-2 md:px-8 md:py-4 transition-all duration-300 ease-in lg:border bg-black text-white border-black hover:border-white lg:hover:bg-white lg:hover:text-black"
                            >
                                View Our Work
                            </a>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute bottom-5 md:bottom-10 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1.2s" }}>
                    <div className="flex flex-col items-center gap-2 text-primary-foreground/60">
                        <span className="text-xs tracking-widest uppercase">Scroll</span>
                        <div className="w-px h-12 bg-primary-foreground/40" />
                    </div>
                </div>
            </section>
        </div>

    );
}
