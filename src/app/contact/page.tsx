"use client"

import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from "framer-motion"
import Head from "next/head"
import { useState, useEffect, useRef } from "react"
import { FaRocket, FaChartBar, FaRobot, FaCode, FaDatabase, FaCog } from "react-icons/fa"
import { IconType } from "react-icons"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  icon: IconType
}

interface FloatingIconProps {
  icon: IconType
  delay: number
}

interface Project {
  title: string
  description: string
  icon: IconType
}

const GradientText: React.FC<GradientTextProps> = ({ children, className }) => (
  <motion.span
    className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.span>
)

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, className, icon: Icon }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(0)
  const mouseYSpring = useSpring(0)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  useAnimationFrame(() => {
    mouseXSpring.set(x.get())
    mouseYSpring.set(y.get())
  })

  return (
    <motion.div
      ref={cardRef}
      className={`bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-2xl ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-gray-900 rounded-xl h-full p-6 transform-gpu" style={{ transform: "translateZ(75px)" }}>
        <Icon className="text-4xl mb-4 text-purple-500" style={{ transform: "translateZ(50px)" }} />
        {children}
      </div>
    </motion.div>
  )
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ icon: Icon, delay }) => (
  <motion.div
    className="absolute text-4xl text-purple-500 opacity-50"
    initial={{ y: 0, opacity: 0 }}
    animate={{
      y: [0, -20, 0],
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      delay: delay,
    }}
  >
    <Icon />
  </motion.div>
)

export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const projects: Project[] = [
    {
      title: "Automated Stock Price Notifier",
      description: "Real-time stock price updates with Google Sheets integration and notifications.",
      icon: FaChartBar,
    },
    {
      title: "Web Automation for Padel Club",
      description: "Automated court reservations using Selenium, with data logging to Google Sheets.",
      icon: FaRobot,
    },
    {
      title: "Image and Video Processing Suite",
      description: "Advanced solution for image retouching, video editing, and audio analysis.",
      icon: FaCode,
    },
    {
      title: "English Dictionary Desktop App",
      description: "User-friendly GUI application for offline dictionary access.",
      icon: FaDatabase,
    },
    {
      title: "Weather Forecast Web App",
      description: "Responsive Next.js application with real-time weather data and modern UI.",
      icon: FaRocket,
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard providing real-time insights and analytics for business data.",
      icon: FaCog,
    },
  ]

  return (
    <>
      <Head>
        <title>Silas Okanlawon - Full Stack Developer & Data Scientist</title>
        <meta
          name="description"
          content="Portfolio of Silas Okanlawon - Full Stack Web Developer, Data Scientist, and Automation Specialist"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-gray-900 min-h-screen text-white font-['Poppins']">
        {/* Hero Section */}
        <motion.section
          className="relative h-screen flex items-center justify-center overflow-hidden"
          style={{ opacity, scale }}
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>
            <motion.div
              className="absolute inset-0 bg-[url('/background-pattern.svg')] bg-repeat"
              animate={{
                backgroundPositionX: ["0%", "100%"],
                backgroundPositionY: ["0%", "100%"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: 20,
              }}
            ></motion.div>
          </div>
          <div className="z-10 text-center px-4">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <GradientText>Welcome to My Portfolio</GradientText>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Full Stack Developer, Data Scientist, and Automation Specialist
            </motion.p>
            <motion.a
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition duration-300 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.docx"
              download
            >
              Download CV
            </motion.a>
          </div>
          <FloatingIcon icon={FaRocket} delay={0} />
          <FloatingIcon icon={FaChartBar} delay={1} />
          <FloatingIcon icon={FaRobot} delay={2} />
        </motion.section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <GradientText>Services I Offer</GradientText>
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <AnimatedCard icon={FaCode}>
                <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
                <p>Crafting seamless web applications with clean, modern code for an efficient user experience.</p>
              </AnimatedCard>
              <AnimatedCard icon={FaDatabase}>
                <h3 className="text-2xl font-semibold mb-4">Data Analysis</h3>
                <p>Building comprehensive data analysis systems using cutting-edge practices and technologies.</p>
              </AnimatedCard>
              <AnimatedCard icon={FaCog}>
                <h3 className="text-2xl font-semibold mb-4">Python Automation</h3>
                <p>Creating efficient automation solutions leveraging Python's powerful ecosystem.</p>
              </AnimatedCard>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <GradientText>Projects & Solutions</GradientText>
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
              viewport={{ once: true }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <AnimatedCard className="h-full" icon={project.icon}>
                    <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                    <p>{project.description}</p>
                  </AnimatedCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <GradientText>Ready to Bring Your Ideas to Life?</GradientText>
            </motion.h2>
            <motion.p
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Let's collaborate on creating innovative solutions with cutting-edge web development and data science.
            </motion.p>
            <motion.a
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition duration-300 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
            >
              Get in Touch
            </motion.a>
          </div>
        </section>
      </div>
    </>
  )
}