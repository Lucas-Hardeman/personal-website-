"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-gray-200 px-6 md:px-10 lg:px-16 py-12 md:py-20 flex flex-col">
      {/* Navbar with Resume Link */}
      <header className="w-full flex justify-end mb-10">
        <Link
          href="/resume"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
        >
          Resume
        </Link>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center md:text-left mb-16 flex-1">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-start mb-6"
        >
          <Image
            src="/profile.jpg.jpeg" // keep your file inside /public and name it profile.jpg
            alt="Lucas Hardeman Profile"
            width={160}
            height={160}
            className="rounded-full border-4 border-gray-700 shadow-lg"
            priority
          />
        </motion.div>

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I’m <span className="text-blue-400">Lucas Hardeman</span> 👋
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-6">
            Computer Science student passionate about{" "}
            <span className="text-gray-200">software engineering</span>,{" "}
            <span className="text-gray-200">research</span>, and building{" "}
            <span className="text-gray-200">innovative projects</span>.
          </p>
        </motion.div>
      </section>

      {/* About Me Section */}
      <motion.section
        className="max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          I’m currently finishing my{" "}
          <span className="text-gray-200">B.S. in Computer Science at Florida State University</span>{" "}
          and beginning my{" "}
          <span className="text-gray-200">Master’s in Computer Science at UCF</span>.
          My experience includes research on{" "}
          <span className="text-gray-200">GIS-based pollutant transport modeling (ArcNLET)</span>,
          full-stack web development, and competitive programming & CTF security challenges.
          Outside of academics, I’ve built a successful{" "}
          <span className="text-gray-200">vintage clothing resale business</span> and enjoy exploring
          how technology can solve real-world problems.
        </p>
      </motion.section>

      {/* Featured Projects */}
      <motion.section
        className="max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Project cards stay the same */}
        </div>
      </motion.section>

      {/* Footer with GitHub + LinkedIn */}
      <footer className="text-center text-gray-500 text-sm mt-16">
        <div className="flex justify-center gap-4 mb-4">
          <Link
            href="https://github.com/your-github"
            target="_blank"
            className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-lg transition"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-lg transition"
          >
            LinkedIn
          </Link>
        </div>
        © {new Date().getFullYear()} Lucas Hardeman · Built with Next.js & TailwindCSS
      </footer>
    </main>
  );
}
