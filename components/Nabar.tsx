"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image
                    src="/artist-logo.png"
                    alt="Artist Logo"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-purple-500 animate-pulse"
                  />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/profile">Profile</NavLink>
                <NavLink href="/music">Music</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink href="/" mobile>
                Home
              </NavLink>
              <NavLink href="/profile" mobile>
                Profile
              </NavLink>
              <NavLink href="/music" mobile>
                Music
              </NavLink>
              <NavLink href="/contact" mobile>
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </motion.div>
    </nav>
  )
}

const NavLink = ({ href, children, mobile = false }) => (
  <Link href={href}>
    <span
      className={`${mobile ? "block" : "inline-block"} px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition duration-300 ease-in-out`}
    >
      {children}
    </span>
  </Link>
)

export default Navbar

