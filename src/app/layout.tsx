import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Head from "next/head";  // Import Head

export const metadata: Metadata = {
  title: "Silas Okanlawon",
  description: "Welcome To My Portfolio",
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

