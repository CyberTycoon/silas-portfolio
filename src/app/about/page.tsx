"use client"; // Ensures client-side rendering

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-white py-20 text-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
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
              src="/pic.jpg" 
              alt="Profile Image"
              width={400}
              height={400}
              className="rounded-[100%] object-cover mx-auto shadow-lg w-50 h-50"
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
             SOFTWARE ENGINEER
            </h3>
            <p className="text-lg px-4 text-gray-700">
            Versatile software engineer with expertise in web development, data science, and python automation. Proficient in full-stack development (React, Next.js, Python, Flask) and creating dynamic user experiences. Skilled in data analysis, machine learning, task automation, and custom API integrations to deliver innovative solutions and streamline workflows. Passionate about solving complex problems and enhancing productivity with cutting-edge technology.


            </p>
          
            <motion.button
              className="bg-blue-600 ml-4 px-8 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
