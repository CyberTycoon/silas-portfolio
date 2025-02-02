"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const GradientText = ({ children, className }) => (
  <span
    className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ${className}`}
  >
    {children}
  </span>
)

const ProjectCard = ({ project, index }) => (
  <motion.div
    className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="relative h-48 md:h-64">
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 transform hover:scale-110"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">
        <GradientText>{project.title}</GradientText>
      </h3>
      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
      <div className="flex justify-between items-center">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center"
          >
            <FaGithub className="mr-2" />
            Repository
          </a>
        )}
        {project.website && (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-300 transition-colors duration-300 flex items-center"
          >
            <FaExternalLinkAlt className="mr-2" />
            Website
          </a>
        )}
      </div>
    </div>
  </motion.div>
)

export default function Projects() {
  const projects = [
    {
      title: "Swolenormous (Gym Site)",
      description:
        "Developed an engaging and responsive gym site with dynamic features like class scheduling, membership management, and fitness tracking.",
      image: "/swolenormous.png",
      repo: "https://github.com/CyberTycoon/swolenormous",
      website: "https://swolenormous-eta.vercel.app/",
    },
    {
      title: "FlowAI (AI Chat App)",
      description:
        "Created an innovative AI chat application delivering intelligent conversational experiences with real-time responses and customizable chat flows.",
      image: "/flowAI.png",
      repo: "https://github.com/CyberTycoon/FlowAI",
      website: "https://flow-3dfi9fn3u-silas-okanlawon-s-projects.vercel.app/",
    },
    {
      title: "Automated Stock Price Notifier",
      description:
        "Built a Python script that retrieves stock prices periodically and updates a Google Sheet in real-time with notification services.",
      image: "/stockPrice.jpg",
      repo: "https://github.com/CyberTycoon/StockPriceNotifier.git",
    },
    {
      title: "Web Automation for Padel Club",
      description:
        "Developed a Selenium-based Python script for automating court reservation checks, utilizing Google Sheets for data recording.",
      image: "/webAutomation.jpg",
      repo: "https://github.com/CyberTycoon/Web-Automation.git",
    },
    {
      title: "Image and Video Processing Suite",
      description:
        "Created a comprehensive solution for image retouching, video editing, face censoring, and mood analysis from audio.",
      image: "/imageProcessing.jpg",
      repo: "https://github.com/CyberTycoon/image-video-processing.git",
    },
    {
      title: "English Dictionary Desktop App",
      description:
        "Developed a desktop GUI app with Python for offline dictionary access, featuring user-friendly interfaces and responsive design.",
      image: "/dictionary.png",
      repo: "https://github.com/CyberTycoon/Python-Dictionary-GUI.git",
    },
    {
      title: "Weather Forecast Web Application",
      description:
        "Built a responsive weather forecast application using Next.js and API integration, designed with Tailwind CSS for a modern interface.",
      image: "/data (2).jpg",
      repo: "https://github.com/CyberTycoon/weatherApp.git",
      website: "https://weather-watch-seven.vercel.app/",
    },
    {
      title: "Data Visualization Dashboard",
      description:
        "Constructed an interactive data visualization dashboard with charts, tables, and summaries for real-time business insights and analytics.",
      image: "/data.jpg",
      repo: "https://github.com/CyberTycoon/My-Dashboard.git",
    },
  ]

  return (
    <section className="bg-gray-900 text-white py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <GradientText>My Projects</GradientText>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}