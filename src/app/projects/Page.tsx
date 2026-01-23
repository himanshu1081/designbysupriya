"use client"
import { useState } from "react"
import { motion } from "motion/react"
import PortfolioModal from "../../components/PortfolioModal"

const portfolioData = [
    {
        id: 1,
        title: "The Greenwich Townhouse",
        category: "Kitchen Design",
        image: [
            "images/Project 1/Main.png",
            "images/Project 1/1.png",
            "images/Project 1/2.png",
            "images/Project 1/3.png",
        ],
        year: "2024",
    },
    {
        id: 2,
        title: "Soho Penthouse Suite",
        category: "Bedroom Design",
        image: [
            "images/Project 2/Main.png",
            "images/Project 2/1.png",
            "images/Project 2/2.png",
        ],
        year: "2024",
    },
    {
        id: 3,
        title: "Chelsea Chef’s Kitchen",
        category: "Kitchen Design",
        image: [
            "images/Project 3/Main.png",
            "images/Project 3/1.png",
            "images/Project 3/2.png",
        ],
        year: "2023",
    },
    {
        id: 4,
        title: "Hamptons Coastal Retreat",
        category: "Bedroom Design",
        image: [
            "images/Project 4/Main.png",
        ],
        year: "2023",
    },
    {
        id: 5,
        title: "Upper East Side Residence",
        category: "Living Room Design",
        image: [
            "images/Project 5/Main.png",
        ],
        year: "2024",
    },
    {
        id: 6,
        title: "Tribeca Modern Loft",
        category: "Open Space Design",
        image: [
            "images/Project 6/Main.png",
        ],
        year: "2024",
    },
    {
        id: 7,
        title: "Notting Hill Townhome",
        category: "Living Room Design",
        image: [
            "images/Project 7/Main.png",
            "images/Project 7/1.png",
            "images/Project 7/2.png",
        ],
        year: "2023",
    },
    {
        id: 8,
        title: "Mayfair Luxury Apartment",
        category: "Bedroom Design",
        image: [
            "images/Project 8/Main.png",
            "images/Project 8/1.png",
            "images/Project 8/2.png",
        ],
        year: "2024",
    },
    {
        id: 9,
        title: "Brooklyn Brownstone",
        category: "Kitchen Design",
        image: [
            "images/Project 9/Main.png",
            "images/Project 9/1.png",
            "images/Project 9/2.png",
        ],
        year: "2023",
    },
    {
        id: 10,
        title: "Central Park West Residence",
        category: "Living Room Design",
        image: [
            "images/Project 10/Main.jpg",
        ],
        year: "2024",
    },
    {
        id: 11,
        title: "Kensington Garden Flat",
        category: "Bedroom Design",
        image: [
            "images/Project 11/Main.jpg",
        ],
        year: "2023",
    },
    {
        id: 12,
        title: "SoHo Industrial Studio",
        category: "Open Space Design",
        image: [
            "images/Project 12/Main.png",
        ],
        year: "2024",
    },
]

const ProjectsPage = () => {
    const [selected, setSelected] = useState<any>(null)

    return (
        <>
            <section className="bg-[#f9f8f6] px-4 md:px-16 py-20 min-h-screen">
                {/* Header */}
                <div className="text-center mb-14">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs uppercase tracking-widest text-black/60"
                    >
                        All Work
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-georgia text-black"
                    >
                        View All <span className="italic">Projects</span>
                    </motion.h1>
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                    {portfolioData.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="mb-6 cursor-pointer group"
                            onClick={() => setSelected(item)}
                        >
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src={item.image[0]}
                                    alt={item.title}
                                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                    <div>
                                        <h3 className="text-white font-georgia text-lg">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/70 text-xs">
                                            {item.category} · {item.year}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* MODAL */}
            {selected && (
                <PortfolioModal
                    data={selected}
                    close={() => setSelected(null)}
                />
            )}
        </>
    )
}

export default ProjectsPage
