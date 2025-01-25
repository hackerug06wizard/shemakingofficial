"use client"

import { motion } from "framer-motion"
import { useState } from "react"

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen pt-16">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        style={{ textShadow: "0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000" }}
      >
        Contact
      </motion.h1>
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mb-4">
          <motion.label
            htmlFor="name"
            className="block text-gray-300 mb-2"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            Name
          </motion.label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div className="mb-4">
          <motion.label
            htmlFor="email"
            className="block text-gray-300 mb-2"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            Email
          </motion.label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div className="mb-4">
          <motion.label
            htmlFor="message"
            className="block text-gray-300 mb-2"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            Message
          </motion.label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  )
}

