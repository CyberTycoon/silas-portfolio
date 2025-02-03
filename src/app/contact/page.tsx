"use client"; // Ensure client-side rendering

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

// Define an interface for the form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact(): JSX.Element {
  // Initialize form data and status state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  // Update formData when an input or textarea changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission asynchronously
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    try {
      setStatus("Sending...");

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      // Send the email using emailjs
      const response = await emailjs.send(
        "service_43l9hbf",
        "template_prcg8uu",
        templateParams,
        "ufiaDgchPLDjfXehB"
      );

      // Check response for success
      if (response.status === 200) {
        setTimeout(() => setStatus("Message sent successfully!"), 2000);
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Failed to send message.");
    }
  };

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            className="bg-gray-700 text-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow ring-2 ring-pink-700 text-white bg-clip-border bg-gradient-to-r from-purple-700 to-pink-700 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow ring-2 ring-pink-700 text-white bg-clip-border bg-gradient-to-r from-purple-700 to-pink-700 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow ring-2 ring-pink-700 text-white bg-clip-border bg-gradient-to-r from-purple-700 to-pink-700 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                ></textarea>
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="bg-gradient-to-r from-purple-600 via-pink-700 to-red-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
              {/* Status Message */}
              {status && (
                <p className="mt-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-600 font-semibold">
                  {status}
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="bg-gray-700 text-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="mb-4">
              <h4 className="text-lg font-semibold">Email:</h4>
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-600">
                silasokanla2006@gmail.com
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold">Phone Number:</h4>
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-600">
                +234 902 465 0039
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold">Upwork:</h4>
              <a
                href="https://www.upwork.com/freelancers/~0190e47b810764d48e?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                My Upwork Profile
              </a>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold">GitHub:</h4>
              <a
                href="https://github.com/CyberTycoon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                My GitHub Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
