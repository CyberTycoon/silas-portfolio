"use client";

import { motion } from "framer-motion";
import { FaCode, FaRobot, FaBrain, FaChartBar, FaSpider, FaImage } from "react-icons/fa";

const GradientText = ({ children, className }) => (
  <span
    className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ${className}`}
  >
    {children}
  </span>
)

const ServiceCard = ({ title, description, icon: Icon, index }) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-xl shadow-lg"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
  >
    <Icon className="text-4xl mb-4 text-purple-500" />
    <h3 className="text-xl font-semibold mb-2">
      <GradientText>{title}</GradientText>
    </h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
)

export default function Services() {
  const services = [
    {
      title: "Full Stack Web Development",
      description: "I create responsive, scalable web applications using modern frameworks, from front-end to back-end, managing the entire development cycle.",
      icon: FaCode
    },
    {
      title: "Task Automation and Bot Development",
      description: "Developing automation scripts and bots to streamline repetitive tasks and improve efficiency.",
      icon: FaRobot
    },
    {
      title: "Data Science and Machine Learning Solutions",
      description: "Developing data-driven solutions by leveraging machine learning models and integrating them into applications to address specific client needs.",
      icon: FaBrain
    },
    {
      title: "Data Analysis and Visualization",
      description: "Transforming raw data into actionable insights through data analysis and creating visualizations.",
      icon: FaChartBar
    },
    {
      title: "Web Scraping",
      description: "Extract and organize large datasets from websites for various business, research, or marketing purposes.",
      icon: FaSpider
    },
    {
      title: "Image, Video, and Audio Processing",
      description: "Offering comprehensive services for image retouching, video editing, and audio enhancement.",
      icon: FaImage
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <GradientText>My Services</GradientText>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
