"use client"
import { useState } from "react"
import { motion } from "motion/react"
import PortfolioModal from "./PortfolioModal"

const portfolioData = [
  {
    id: 1,
    title: "Kitchen Design 1",
    category: "Kitchen Design",
    image: [
      "/images/Project 1/Main.png",
      "/images/Project 1/1.png",
      "/images/Project 1/2.png",
      "/images/Project 1/3.png",
    ],
  },
  {
    id: 2,
    title: "Kitchen Design 2",
    category: "Kitchen Design",
    image: [
      "/images/Project 2/Main.png",
      "/images/Project 2/1.png",
      "/images/Project 2/2.png",
    ],
  },
  {
    id: 3,
    title: "Kitchen Design 3",
    category: "Kitchen Design",
    image: [
      "/images/Project 3/Main.png",
      "/images/Project 3/1.png",
      "/images/Project 3/2.png",
    ],
  },
  {
    id: 4,
    title: "Kitchen Design 4",
    category: "Kitchen Design",
    image: [
      "/images/Project 4/Main.png",
    ],
  },
  {
    id: 5,
    title: "Kitchen Design 5",
    category: "Kitchen Design",
    image: [
      "/images/Project 5/Main.png",
    ],
  },
  {
    id: 6,
    title: "Kitchen Design 6",
    category: "Kitchen Design",
    image: [
      "/images/Project 6/Main.png",
    ],
  },
  {
    id: 7,
    title: "Kitchen Design 7",
    category: "Kitchen Design",
    image: [
      "/images/Project 7/Main.png",
      "/images/Project 7/1.png",
      "/images/Project 7/2.png",
    ],
  },
  {
    id: 8,
    title: "Kitchen Design 8",
    category: "Kitchen Design",
    image: [
      "/images/Project 8/Main.png",
      "/images/Project 8/1.png",
      "/images/Project 8/2.png",
    ],
  },
  {
    id: 9,
    title: "Kitchen Design 9",
    category: "Kitchen Design",
    image: [
      "/images/Project 9/Main.png",
      "/images/Project 9/1.png",
      "/images/Project 9/2.png",
    ],
  },
  {
    id: 10,
    title: "Kitchen Design 10",
    category: "Kitchen Design",
    image: [
      "/images/Project 10/Main.jpg",
    ],
  },
  {
    id: 11,
    title: "Kitchen Design 11",
    category: "Kitchen Design",
    image: [
      "/images/Project 11/Main.jpg",
    ],
  },
  {
    id: 12,
    title: "Kitchen Design 12",
    category: "Kitchen Design",
    image: [
      "/images/Project 12/Main.png",
    ],
  },
]


const Portfolio = () => {
  const [selected, setSelected] = useState<any>(null)
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = showAll
    ? portfolioData
    : portfolioData.slice(0, 6)

  return (
    <>
      <section
        id="portfolio"
        className="bg-[#f9f8f6] px-4 md:px-16 py-20"
      >
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-widest text-black/60"
          >
            {showAll ? "All Work" : "Selected Work"}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-georgia text-black"
          >
            Our <span className="italic">Portfolio</span>
          </motion.h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {visibleProjects.map((item, i) => (
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
                <div className="absolute inset-0 bg-black/20 hover:bg-black/40 opacity-100 transition-opacity flex items-end p-4">
                  <div>
                    <h3 className="text-white font-georgia text-lg">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-xs">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="border border-black px-6 py-3 text-sm uppercase tracking-wide text-black hover:bg-black hover:text-white transition cursor-pointer"
          >
            {showAll ? "Show Less Projects" : "View All Projects"}
          </button>
        </div>
      </section>

      {selected && (
        <PortfolioModal
          data={selected}
          close={() => setSelected(null)}
        />
      )}
    </>
  )
}

export default Portfolio
