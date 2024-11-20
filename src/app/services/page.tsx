"use client"; // Ensure client-side rendering

import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="bg-gray-100 px-4  py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{scale: 1.05}}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Full Stack Web Development
            </h3>
            <p className="text-gray-700">
              I create responsive, scalable web applications using modern frameworks, from front-end to back-end, managing the entire development cycle.
            </p>
          </motion.div>

          {/* Python Automation */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            whileHover={{scale: 1.05}}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Task Automation and Bot Development
            </h3>
            <p className="text-gray-700">
            Developing automation scripts and bots to streamline repetitive tasks and improve efficiency.
            </p>
          </motion.div>

          {/* API Integration */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            whileHover={{scale: 1.05}}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            
Data Science and Machine Learning Solutions
            </h3>
            <p className="text-gray-700">
            Developing data-driven solutions by leveraging machine learning models and integrating them into applications to address specific client needs.
            </p>
          </motion.div>

          {/* Graphic Designing */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
            whileHover={{scale: 1.05}}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Data Analysis and Visualization
            </h3>
            <p className="text-gray-700">
            Transforming raw data into actionable insights through data analysis and creating visualizations.
            </p>
          </motion.div>

          {/* Web Scraping Services */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
            whileHover={{scale: 1.05}}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Web Scraping
            </h3>
            <p className="text-gray-700">
              Extract and organize large datasets from websites for various business, research, or marketing purposes.
            </p>
          </motion.div>

          {/* Bulk Email Sending */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            whileHover={{scale: 1.05}}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Image, Video, and Audio Processing
            </h3>
            <p className="text-gray-700">
            Offering comprehensive services for image retouching, video editing, and audio enhancement.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
