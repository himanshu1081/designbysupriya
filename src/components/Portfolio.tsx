"use client"
import { motion } from "motion/react"
import PortfolioWork from "./PortfolioWork"

const Portfolio = () => {

  const portfolioData = [
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
      className="px-3 md:px-10 py-16 bg-[#f9f8f6] min-h-screen"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-xs uppercase tracking-widest text-black/60"
        >
          Selected Work
        </motion.p>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-georgia text-black"
        >
          Our <span className="italic">Portfolio</span>
        </motion.h2>
      </div>

      {/* Pinterest Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
        {portfolioData.map((item) => (
          <PortfolioWork key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio
