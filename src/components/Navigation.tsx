"use client"
import { useState, useEffect } from "react";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 lg:px-20 ${isScrolled
                ? "bg-white/95 backdrop-blur-sm py-4 shadow-sm text-black"
                : "bg-transparent py-6"
                }`}
        >
            <div className="mx-auto px-6 lg:px-12 flex items-center justify-between">
                <a href="#" className="font-cormorant text-2xl font-extrabold tracking-wide">
                    Design by Supriya
                </a>

                <div className="hidden md:flex items-center gap-10 text-white/50">
                    <a
                        href="#work"
                        className={`${isScrolled ? "text-black/50" : ""} text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-black transition-colors duration-300`}
                    >
                        Portfolio
                    </a>
                    <a
                        href="#about"
                        className={`${isScrolled ? "text-black/50" : ""} text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-black transition-colors duration-300`}
                    >
                        About
                    </a>
                    <a
                        href="#services"
                        className={`${isScrolled ? "text-black/50" : ""} text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-black transition-colors duration-300`}
                    >
                        Services
                    </a>
                    <a
                        href="#contact"
                        className={`${isScrolled ? "text-black/50" : ""} text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-black transition-colors duration-300`}
                    >
                        Contact
                    </a>
                </div>

                <a
                    href="#contact"
                    className="hidden md:inline-block text-sm font-body tracking-widest uppercase border border-[#221f1c] px-6 py-3 hover:text-white hover:bg-[#221f1c] transition-all duration-300"
                >
                    Inquire
                </a>
            </div>
        </nav>
    );
};

export default Navigation;
