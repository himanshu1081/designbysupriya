import heroImage from "../../public/images/hero-kitchen.jpg";
import Image from "next/image";
import StartAnimation from "../components/StartAnimation";
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
                    <div className="absolute inset-0 bg-foreground/20" />
                </div>

                <div className="relative z-10 container mx-auto px-6 lg:px-12 lg:pt-24">
                    <div className="max-w-3xl">
                        <p
                            className="text-sm font-body tracking-[0.3em] uppercase text-primary-foreground/80 mb-6 animate-fade-up"
                            style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
                        >
                            Architecture & Interior Design
                        </p>
                        <h1
                            className=" text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.1] mb-8 animate-fade-up font-cormorant"
                            style={{ animationDelay: "0.4s", animationFillMode: "backwards" }}
                        >
                            Designing Spaces
                            <br />
                            <span className="italic">That Inspire</span>
                        </h1>
                        <p
                            className="font-body text-sm lg:text-lg text-primary-foreground/90 max-w-xl mb-10 animate-fade-up"
                            style={{ animationDelay: "0.6s", animationFillMode: "backwards" }}
                        >
                            We craft bespoke kitchens and bedrooms that blend timeless elegance
                            with modern functionality, creating spaces where life unfolds
                            beautifully.
                        </p>
                        <div
                            className="flex gap-4 animate-fade-up"
                            style={{ animationDelay: "0.8s", animationFillMode: "backwards" }}
                        >
                            <a
                                href="#work"
                                className="text-xs md:text-sm tracking-widest uppercase px-4 py-2 md:px-8 md:py-4 transition-all duration-300 ease-in lg:border bg-black text-white border-black hover:border-white lg:hover:bg-white lg:hover:text-black"
                            >
                                View Our Work
                            </a>
                        </div>
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
