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
          About Us
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
              src="/pic.jpg" // Replace with your profile image path
              alt="Profile Image"
              width={400}
              height={400}
              className="rounded-full object-cover mx-auto shadow-lg w-50 h-50"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold">
             SOFTWARE ENGINEER
            </h3>
            <p className="text-lg text-gray-700">
            I am a versatile software engineer specializing in web development, data processing, and automation. My expertise encompasses full stack development, where I leverage front-end technologies such as HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS, alongside back-end solutions using Python and Flask. I excel in creating dynamic web applications that provide seamless user experiences.

In addition to my web development capabilities, I have a strong foundation in data analytics and automation. I am skilled in data analysis, processing, and visualization, enabling me to transform raw data into actionable insights. My proficiency in task automation and web scraping allows me to streamline processes efficiently, while my experience in bot development enhances my ability to deliver robust automation solutions.

I also focus on application and integration solutions, developing both desktop and web applications that cater to diverse client needs. I specialize in Google Sheets integration and document management solutions, ensuring that data is well-organized and accessible. My strong API integration skills allow me to customize applications, making them more versatile and user-friendly.

With a commitment to continuous learning and innovation, I am passionate about leveraging technology to solve complex problems and enhance productivity.


            </p>
            <p className="text-lg text-gray-700">
              Additionally, I am proficient in graphic design, creating logos, book covers, flyers, and more. My diverse
              skill set also includes automating workflows using Python, scraping websites for data,
              and sending bulk emails. I am passionate about learning and growing, and I’m also
              exploring the fields of blockchain and cybersecurity.
            </p>
            <motion.button
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
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
