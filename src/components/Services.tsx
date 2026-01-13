"use client"
import { motion } from "motion/react"
import { ComponentType } from "react";
import ServicesList from "./ServicesList";

//icons
import { ImSpoonKnife } from "react-icons/im";
import { FaBed } from "react-icons/fa6";
import { BiHome } from "react-icons/bi";
import { IoMdColorPalette } from "react-icons/io";

const Services = () => {

    type Service = {
        title: string;
        description: string;
        icon: ComponentType<{ className?: string }>;
    };

    const services: Service[] = [
        {
            title: "Kitchen Design",
            description:
                "From intimate galley kitchens to expansive chef's spaces, we create culinary environments that inspire creativity and connection.",
            icon: ImSpoonKnife,
        },
        {
            title: "Bedroom Design",
            description:
                "Personal sanctuaries designed for rest and rejuvenation, where every detail contributes to your well-being.",
            icon: FaBed,
        },
        {
            title: "Full Renovations",
            description:
                "Complete transformations that reimagine your space while honoring its architectural character and your vision.",
            icon: BiHome,
        },
        {
            title: "Design Consultation",
            description:
                "Expert guidance on materials, colors, and layouts to help you make informed decisions for your project.",
            icon: IoMdColorPalette,
        },
    ];

    return (
        <div
            id="services"
            className="px-5 py-10 bg-[#221f1c] lg:px-30 flex flex-col items-start justify-center min-h-screen text-white">
            <div className="mb-10">
                <div className="text-white/60 text-sm">
                    What We Offer
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl flex flex-col gap-1 font-georgia">
                    Comprehensive Design
                    <span className="italic">
                        Services
                    </span>
                </div>
            </div>
            <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-4 gap-2 justify-items-center">
                {
                    services.map((s, index) => {
                        const Icon = s.icon;
                        return (
                            <ServicesList title={s.title} description={s.description} icon={Icon} key={index} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Services;
