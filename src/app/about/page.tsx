"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FaRocket, FaCode, FaDatabase } from "react-icons/fa"


export default function About() {
  return (
    <section className="bg-gray-900 py-20 text-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">About Me</h1>
        </motion.h2>

        {/* About Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Profile Image */}
          <motion.div
            className="w-full lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/pic.png"
              alt="Profile Image"
              width={400}
              height={400}
              className="rounded-lg object-contain mx-auto shadow-lg w-50 h-50"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl px-4 font-semibold">
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">SOFTWARE ENGINEER</h1>
            </h3>
            <p className="text-lg px-4 text-gray-300">
              I am Silas Okanlawon, a versatile software developer with expertise in web development, data science, and
              Python automation. Proficient in full-stack development (React, Next.js, Python, Flask, Firebase, REST API) and creating
              dynamic user experiences. Skilled in data analysis, machine learning, task automation, and custom API
              integrations to deliver innovative solutions and streamline workflows. Passionate about solving complex
              problems and enhancing productivity with cutting-edge technology.
            </p>

            <motion.div className="flex flex-wrap gap-4 px-4 mt-6">
              <motion.div
                className="flex items-center bg-gray-800 rounded-full px-4 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaCode className="mr-2 text-purple-500" />
                <span>Web Development</span>
              </motion.div>
              <motion.div
                className="flex items-center bg-gray-800 rounded-full px-4 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDatabase className="mr-2 text-pink-500" />
                <span>Data Science</span>
              </motion.div>
              <motion.div
                className="flex items-center bg-gray-800 rounded-full px-4 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket className="mr-2 text-red-500" />
                <span>Automation</span>
              </motion.div>
            </motion.div>

            <motion.button
              className="bg-gradient-to-r from-purple-500 to-pink-500 ml-4 px-8 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" passHref>
                Contact Me
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

