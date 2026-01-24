"use client"
import { motion } from "motion/react"
import { useState } from "react"
import PortfolioModal from "./PortfolioModal"

const PortfolioWork = ({ data }) => {
  const [open, setOpen] = useState(false)

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
