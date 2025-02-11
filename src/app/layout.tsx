import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Silas Okanlawon",
  description: "Welcome To My Portfolio, I am Silas Okanlawon, a versatile software developer with expertise in web development, data science, and Python automation. Proficient in full-stack development (React, Next.js, Python, Flask, Firebase, REST API) and creating dynamic user experiences. Skilled in data analysis, machine learning, task automation, and custom API integrations to deliver innovative solutions and streamline workflows. Passionate about solving complex problems and enhancing productivity with cutting-edge technology.",
  verification: {
    google: "7NZY7ue9nb7KjdiSNblV78TZRxZqlm0_zFGhVo409Ms",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}