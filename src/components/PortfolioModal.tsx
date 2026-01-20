"use client"
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

const PortfolioModal = ({ data, close }) => {
  const images = [data.image, data.image, data.image]
  const [index, setIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  return (
    <>
      <div className="">

        {/* MAIN MODAL */}
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 z-40 bg-black/70 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-[#f9f8f6] rounded-xl p-4 w-[90%] md:w-[70%] lg:w-[50%]"
            >
              {/* Carousel */}
              <div className="relative overflow-hidden rounded-lg">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={index}
                    src={images[index]}
                    onClick={() => setIsFullscreen(true)}
                    className="w-full h-100 object-cover cursor-zoom-in"
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -80, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>

                {/* Prev */}
                <button
                  onClick={() =>
                    setIndex((index - 1 + images.length) % images.length)
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1"
                >
                  ‹
                </button>

                {/* Next */}
                <button
                  onClick={() =>
                    setIndex((index + 1) % images.length)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1"
                >
                  ›
                </button>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 w-2 rounded-full transition-all ${index === i ? "bg-black w-4" : "bg-black/30"
                      }`}
                  />
                ))}
              </div>

              <div className="mt-4">
                <h2 className="text-2xl font-georgia text-black">
                  {data.title}
                </h2>
                <p className="text-sm text-black/60">
                  {data.category} · {data.year}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* FULLSCREEN IMAGE VIEW */}
        <AnimatePresence>
          {isFullscreen && (
            <motion.div
              className="fixed inset-0 z-50 bg-black flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFullscreen(false)}
            >
              <motion.img
                src={images[index]}
                className="max-w-[95%] max-h-[95%] object-contain cursor-zoom-out"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default PortfolioModal
