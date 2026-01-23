"use client"
import { motion } from "motion/react"
import { useState } from "react"
import PortfolioModal from "./PortfolioModal"

const PortfolioWork = ({ data }) => {
  const [open, setOpen] = useState(false)

  const portfolioData = [
  {
    id: 1,
    title: "Kitchen Design 1",
    category: "Kitchen Design",
    image: [
      "images/Project 1/Main.png",
      "images/Project 1/1.png",
      "images/Project 1/2.png",
      "images/Project 1/3.png",
    ],
  },
  {
    id: 2,
    title: "Kitchen Design 2",
    category: "Kitchen Design",
    image: [
      "images/Project 2/Main.png",
      "images/Project 2/1.png",
      "images/Project 2/2.png",
    ],
  },
  {
    id: 3,
    title: "Kitchen Design 3",
    category: "Kitchen Design",
    image: [
      "images/Project 3/Main.png",
      "images/Project 3/1.png",
      "images/Project 3/2.png",
    ],
  },
  {
    id: 4,
    title: "Kitchen Design 4",
    category: "Kitchen Design",
    image: [
      "images/Project 4/Main.png",
      "images/Project 4/1.png",
    ],
  },
  {
    id: 5,
    title: "Kitchen Design 5",
    category: "Kitchen Design",
    image: [
      "images/Project 5/Main.png",
      "images/Project 5/1.png",
    ],
  },
  {
    id: 6,
    title: "Kitchen Design 6",
    category: "Kitchen Design",
    image: [
      "images/Project 6/Main.png",
      "images/Project 6/1.png",
      "images/Project 6/2.png",
    ],
  },
  {
    id: 7,
    title: "Kitchen Design 7",
    category: "Kitchen Design",
    image: [
      "images/Project 7/Main.png",
      "images/Project 7/1.png",
    ],
  },
  {
    id: 8,
    title: "Kitchen Design 8",
    category: "Kitchen Design",
    image: [
      "images/Project 8/Main.png",
      "images/Project 8/1.png",
      "images/Project 8/2.png",
    ],
  },
  {
    id: 9,
    title: "Kitchen Design 9",
    category: "Kitchen Design",
    image: [
      "images/Project 9/Main.png",
      "images/Project 9/1.png",
    ],
  },
  {
    id: 10,
    title: "Kitchen Design 10",
    category: "Kitchen Design",
    image: [
      "images/Project 10/Main.png",
      "images/Project 10/1.png",
      "images/Project 10/2.png",
    ],
  },
  {
    id: 11,
    title: "Kitchen Design 11",
    category: "Kitchen Design",
    image: [
      "images/Project 11/Main.png",
      "images/Project 11/1.png",
    ],
  },
  {
    id: 12,
    title: "Kitchen Design 12",
    category: "Kitchen Design",
    image: [
      "images/Project 12/Main.png",
      "images/Project 12/1.png",
      "images/Project 12/2.png",
    ],
  },
]


  return (
    <>
      <motion.div
        layout
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.02 }}
        viewport={{ once: true }}
        className="mb-5 break-inside-avoid cursor-pointer overflow-hidden rounded-xl bg-[#e9e6e2]"
      >
        <img
          src={data.image[0]}
          alt={data.title}
          className="w-full object-cover hover:brightness-90 transition"
        />

        <div className="p-3">
          <div className="flex justify-between text-xs opacity-70">
            <span>{data.category}</span>
          </div>

          <h3 className="text-xl font-georgia text-black mt-1">
            {data.title}
          </h3>
        </div>
      </motion.div>

      {open && (
        <PortfolioModal
          data={data}
          close={() => setOpen(false)}
        />
      )}
    </>
  )
}

export default PortfolioWork
