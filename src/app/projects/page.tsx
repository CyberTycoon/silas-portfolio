"use client"; // Ensure client-side rendering

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

           {/* Swolenormous */}
           <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/swolenormous.png" // Replace with your project image path
              alt="Automated Stock Price Notifier"
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mt-20 text-gray-900">
            Swolenormous (Gym Site)
            </h3>
            <p className="text-gray-700 mt-2">
            Developed an engaging and responsive gym site named Swolenormous. The platform offers dynamic features like class scheduling, membership management, and fitness tracking, providing a seamless experience for fitness enthusiasts and gym owners.</p>
            <div className="mt-8 flex flex-row justify-between">
              <a
                href="https://github.com/CyberTycoon/swolenormous" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                View Repository
              </a>
              <a
                href="https://swolenormous-eta.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                View website
              </a>
            </div>
          </motion.div>
          
                    {/* Flow AI */}
                    <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/flowAI.png" // Replace with your project image path
              alt="Weather Forecast Web Application"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <h3 className="text-2xl font-semibold mt-4 text-gray-900">
            FlowAI (AI Chat App)
            </h3>
            <p className="text-gray-700 mt-2">
            Created an innovative and user-friendly AI chat application named FlowAI. The platform delivers intelligent conversational experiences with real-time responses, context-aware dialogue, and customizable chat flows, making it a versatile solution for businesses and individual users alike.
            </p>
            <div className="mt-4 flex justify-between">
              <a
                href="https://github.com/CyberTycoon/FlowAI" // Replace with GitHub link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                View Repository
              </a>
              <a
                href="https://flow-3dfi9fn3u-silas-okanlawon-s-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                View website
              </a>
            </div>
          </motion.div>      

                    {/* Automated Stock Price Notifier */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/stockPrice.jpg" // Replace with your project image path
              alt="Automated Stock Price Notifier"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <h3 className="text-2xl font-semibold mt-4 text-gray-900">
              Automated Stock Price Notifier
            </h3>
            <p className="text-gray-700 mt-2">
              Built a Python script that retrieves stock prices periodically and updates a Google Sheet in real-time. Integrated with notification services for real-time alerts.
            </p>
            <div className="mt-8">
              <a
                href="https://github.com/CyberTycoon/StockPriceNotifier.git" // Replace with GitHub link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                View Repository
              </a>
            </div>
          </motion.div>    

          {/* Web Automation for Padel Club Court Reservations */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/webAutomation.jpg" // Replace with your project image path
              alt="Web Automation for Padel Club Court Reservations"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <h3 className="text-2xl font-semibold mt-4 text-gray-900">
              Web Automation for Padel Club Court Reservations
            </h3>
            <p className="text-gray-700 mt-2">
              Developed a Selenium-based Python script for automating court reservation checks on a club’s website. Utilized Google Sheets for recording data every 45 minutes for accuracy and easy access.
            </p>
            <div className="mt-4">
              <a
                href="https://github.com/CyberTycoon/Web-Automation.git" // Replace with GitHub link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                View Repository
              </a>
            </div>
          </motion.div>

          {/* Image and Video Processing Suite */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/imageProcessing.jpg" // Replace with your project image path
              alt="Image and Video Processing Suite"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <h3 className="text-2xl font-semibold mt-4 text-gray-900">
              Image and Video Processing Suite
            </h3>
            <p className="text-gray-700 mt-2">
              Created a comprehensive solution for image retouching, color correction, and background removal, alongside video editing services with transitions, color grading, and webcam capture. Integrated advanced functionalities, including video face censoring and mood analysis from audio, to enhance user privacy and content understanding.
            </p>
            <div className="mt-4">
              <a
                href="https://github.com/CyberTycoon/image-video-processing.git" // Replace with GitHub link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                View Repository
              </a>
            </div>
          </motion.div>

          {/* English Dictionary Desktop GUI Application */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/dictionary.png" // Replace with your project image path
              alt="English Dictionary Desktop GUI Application"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <h3 className="text-2xl font-semibold mt-4 text-gray-900">
              English Dictionary Desktop GUI Application
            </h3>
            <p className="text-gray-700 mt-2">
              Developed a desktop GUI app with Python for offline dictionary access. Integrated user-friendly interfaces and responsive design elements to optimize user experience.
            </p>
            <div className="mt-16">
              <a
                href="https://github.com/CyberTycoon/Python-Dictionary-GUI.git" // Replace with GitHub link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                View Repository
              </a>
            </div>
          </motion.div>

          {/* Weather Forecast Web Application */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/data (2).jpg" // Replace with your project image path
              alt="Weather Forecast Web Application"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <h3 className="text-2xl font-semibold mt-4 text-gray-900">
              Weather Forecast Web Application
            </h3>
            <p className="text-gray-700 mt-2">
              Built a responsive weather forecast application that fetches real-time weather data using Next.js and API integration. Designed with Tailwind CSS for a clean and modern interface.
            </p>
            <div className="mt-4 flex justify-between">
              <a
                href="https://github.com/CyberTycoon/weatherApp.git" // Replace with GitHub link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                View Repository
              </a>
              <a
                href="https://weather-watch-seven.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                View website
              </a>
            </div>
          </motion.div>

          {/* Data Visualization Dashboard */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/data.jpg" // Replace with your project image path
              alt="Data Visualization Dashboard"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <h3 className="text-2xl font-semibold mt-4 text-gray-900">
              Data Visualization Dashboard
            </h3>
            <p className="text-gray-700 mt-2">
              Constructed a data visualization dashboard with interactive charts, tables, and summaries. This dashboard provides real-time insights and analytics for business data, allowing users to draw insights from complex data sets.
            </p>
            <div className="mt-4">
              <a
                href="https://github.com/CyberTycoon/My-Dashboard.git" // Replace with GitHub link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                View Repository
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
