"use client"
import { motion } from "motion/react"
import { useState } from "react"

export default function StartAnimation() {
    const [hidden, setHidden] = useState<boolean>(false)
    return (
        <div>
            {!hidden && (
                <motion.div
                    className="w-full h-screen absolute z-100 bg-[#e9e6e2] overflow-hidden"
                    initial={{ y: 0}}
                    animate={{ y: 1000 }}
                    transition={{ duration: .9 }}
                    
                    onAnimationComplete={() => setHidden(true)}
                />
            )}
        </div>
    )
}