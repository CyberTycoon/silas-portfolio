"use client";
import { motion } from 'framer-motion';
import Head from "next/head";



export default function Home() {
   
  return (
    <>
    <Head>
      <title>Silas Okanlawon</title>
      <meta name="description" lang="eng" content="Portfolio of a Full Stack Web Developer and Data Scentist" />
    </Head>

    <div className="bg-gray-700 min-h-screen bg-image text-white">
      {/* Hero Section */}
       <div className="py-10">
       <section className="flex flex-col bg-gray-800 section items-center justify-center text-center my-30 py-20 space-y-4">
        <motion.h1
          className="text-blue-500 text-6xl font-extrabold font-cartoon glow"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          className="text-xl md:px-5 max-w-3xl px-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          I’m a Full Stack Developer, Data Scientist, and Automation Specialist, offering dynamic web solutions, advanced data science, insightful analytics, seamless API integrations, custom task automations, efficient file and document management, and specialized bot development.
        </motion.p>
        <motion.a
          className="bg-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition duration-300"
          whileHover={{ scale: 1.05 }}
          href="/contact"
        >
          <a href="/resume.docx" download>Download CV</a>
        </motion.a>
      </section>
      </div>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Services I Offer
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-blue-700 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
              <p>Developing seamless web applications with clean, modern code across front-end and back-end, ensuring efficient user experience</p>
            </motion.div>

            <motion.div
              className="bg-gray-700 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4"> Data Analysis</h3>
              <p className="">
              Building end-end comprehensive data analysis systems using modern and efficient coding practices.</p>
            </motion.div>

            <motion.div
              className="bg-blue-700 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Python Automation</h3>
              <p>Creating seamless automation solutions using Python, leveraging efficient and modern coding practices.</p>
            </motion.div>
          </div>
        </div>
      </section>

     
  <section className="py-10 px-6 bg-white">
  <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Projects & Solutions</h2>
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
    
    <motion.div className="bg-blue-700 rounded-lg shadow-md p-6"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5 }}>
      <h3 className="text-xl font-semibold">Automated Stock Price Notifier</h3>
      <p className="mt-2">Built a Python script that retrieves stock prices periodically and updates a Google Sheet in real-time. Integrated with notification services for real-time alerts.</p>
    </motion.div>

    <motion.div className="bg-gray-800 rounded-lg shadow-md p-6"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5 }}>
      <h3 className="text-xl font-semibold">Web Automation for Padel Club Court Reservations</h3>
      <p className="mt-2">Automated court reservations with a Selenium Python script, logging data to Google Sheets every 45 minutes.</p>
    </motion.div>

    <motion.div className="bg-blue-700 rounded-lg shadow-md p-6"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5 }}>
      <h3 className="text-xl font-semibold">Image and Video Processing Suite</h3>
      <p className="mt-2">Created a solution for image retouching, color correction, and video editing with transitions, including face censoring and audio mood analysis.</p>
    </motion.div>

    <motion.div className="bg-gray-800 rounded-lg shadow-md p-6"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5 }}>
      <h3 className="text-xl font-semibold">English Dictionary Desktop GUI Application</h3>
      <p className="mt-2">Developed a desktop GUI app with Python for offline dictionary access. Integrated user-friendly interfaces and responsive design elements to optimize user experience.</p>
    </motion.div>

    <motion.div className="bg-blue-700 rounded-lg shadow-md p-6"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5 }}>
      <h3 className="text-xl font-semibold">Weather Forecast Web Application (Next.js)</h3>
      <p className="mt-2">Built a responsive weather forecast application that fetches real-time weather data using Next.js and API integration. Designed with Tailwind CSS for a clean and modern interface.</p>
    </motion.div>

    <motion.div className="bg-gray-800 rounded-lg shadow-md p-6"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5 }}>
      <h3 className="text-xl font-semibold">Data Visualization Dashboard</h3>
      <p className="mt-2">Constructed a data visualization dashboard with interactive charts, tables, and summaries. This dashboard provides real-time insights and analytics for business data, allowing users to draw insights from complex data sets.</p>
    </motion.div>

  </div>
</section>

       

      {/* Call to Action */}
      <section className="py-16 bg-white text-blue-950">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Ready to work with me?
          </motion.h2>
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Let’s bring your ideas to life with creative solutions and modern web development.
          </motion.p>
          <motion.a
            className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-950 transition duration-300"
            whileHover={{ scale: 1.05 }}
            href="/contact"
          >
            Get in Touch
          </motion.a>
        </div>
      </section>
    </div>
  </>
  );
}
