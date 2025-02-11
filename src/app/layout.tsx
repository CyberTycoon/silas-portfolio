import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Head from "next/head";  // Import Head

export const metadata: Metadata = {
  title: "Silas Okanlawon",
  description: "Welcome To My Portfolio, I am Silas Okanlawon, a versatile software developer with expertise in web development, data science, and Python automation. Proficient in full-stack development (React, Next.js, Python, Flask, Firebase, REST API) and creating dynamic user experiences. Skilled in data analysis, machine learning, task automation, and custom API integrations to deliver innovative solutions and streamline workflows. Passionate about solving complex problems and enhancing productivity with cutting-edge technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Set your image as the favicon here */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="google-site-verification" content="7NZY7ue9nb7KjdiSNblV78TZRxZqlm0_zFGhVo409Ms" />
      </Head>
      <body
        className={` antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

