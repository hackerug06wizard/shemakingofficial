"use client"

import { motion } from "framer-motion"
import Image from "next/image"

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

export default function Profile() {
  return (
    <div className="min-h-screen pt-16">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        style={{ textShadow: "0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff" }}
      >
        Artist Profile
      </motion.h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Image src="/artist-profile.jpg" alt="Artist Profile" width={300} height={300} className="rounded-full" />
          <div
            className="absolute inset-0 rounded-full animate-pulse"
            style={{ boxShadow: "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff" }}
          ></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md"
        >
          <motion.h2
            className="text-2xl font-semibold mb-4"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            style={{ textShadow: "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff" }}
          >
            About the Artist
          </motion.h2>
          <p className="text-gray-300 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <p className="text-gray-300">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

