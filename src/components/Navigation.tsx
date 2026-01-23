"use client";

import { useState, useEffect } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: "normal",
  variable: "--font-cormorant",
  fallback: ["Georgia", "serif"],
});

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id: string) =>
    `font-body tracking-widest uppercase transition ${active === id
      ? "text-black"
      : isScrolled
        ? "text-black/60"
        : "text-white/60"
    } hover:text-black`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 lg:px-20 ${isScrolled
        ? "bg-[#e9e6e2] backdrop-blur-sm py-4 shadow-sm text-black"
        : "bg-transparent py-6"
        }`}
    >
      <div className="mx-auto px-6 lg:px-12 flex items-center justify-center md:justify-between">
        <div className={`${cormorant.className} ${isScrolled ? "text-black" : "text-white"} text-xl lg:text-2xl font-semibold tracking-wide whitespace-nowrap`}>
          Design by Supriya
        </div>

        <div className="hidden md:flex items-center gap-10 text-xs lg:text-sm">
          <a
            href="#about"
            onClick={() => setActive("about")}
            className={linkClass("about")}
          >
            About
          </a>
          <a
            href="#portfolio"
            onClick={() => setActive("portfolio")}
            className={linkClass("portfolio")}
          >
            Portfolio
          </a>
          <a
            href="#testimonials"
            onClick={() => setActive("testimonials")}
            className={linkClass("testimonials")}
          >
            Testimonials
          </a>
          <a
            href="#services"
            onClick={() => setActive("services")}
            className={linkClass("services")}
          >
            Services
          </a>

          <a
            href="#contact"
            onClick={() => setActive("contact")}
            className={linkClass("contact")}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
