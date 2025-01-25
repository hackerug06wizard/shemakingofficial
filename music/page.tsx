"use client"

import { motion } from "framer-motion"
import { FaPlayCircle, FaDownload } from "react-icons/fa"

const songs = [
  { id: 1, title: "Neon Nights", duration: "3:45", releaseDate: "2023-05-15", icon: "🌃" },
  { id: 2, title: "Electric Dreams", duration: "4:12", releaseDate: "2023-04-01", icon: "⚡" },
  { id: 3, title: "Cyber Serenade", duration: "3:58", releaseDate: "2023-03-10", icon: "🎶" },
  { id: 4, title: "Digital Daze", duration: "4:30", releaseDate: "2023-02-14", icon: "💻" },
]

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

export default function Music() {
  return (
    <div className="min-h-screen pt-16">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        style={{ textShadow: "0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00" }}
      >
        Music
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {songs.map((song, index) => (
          <motion.div
            key={song.id}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">{song.icon}</span>
              <div>
                <motion.h2
                  className="text-xl font-semibold"
                  variants={headingVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 + 0.2 }}
                  style={{ textShadow: "0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00" }}
                >
                  {song.title}
                </motion.h2>
                <p className="text-gray-400">Duration: {song.duration}</p>
                <p className="text-gray-400">Released: {song.releaseDate}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button className="flex items-center text-purple-400 hover:text-purple-300 transition duration-300">
                <FaPlayCircle className="mr-2" />
                Play
              </button>
              <a href="#" className="flex items-center text-blue-400 hover:text-blue-300 transition duration-300">
                <FaDownload className="mr-2" />
                Download
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

