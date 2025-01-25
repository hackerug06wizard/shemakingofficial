"use client"

import { motion } from "framer-motion"

const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 text-center"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        style={{ textShadow: "0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff" }}
      >
        Welcome to the Official Website
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-center"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        Explore the music and journey of your favorite artist
      </motion.p>
    </div>
  )
}

