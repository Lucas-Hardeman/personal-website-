"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-gray-200 px-6 md:px-10 lg:px-16 py-12 md:py-20 flex flex-col">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-16 flex-1">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <Image
            src="/profile.jpg.jpeg" // make sure file is in /public
            alt="Lucas Hardeman Profile"
            width={220} // a bit larger
            height={220}
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
            Hi, I’m <span className="text-blue-400">Lucas Hardeman</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-6">
            Computer Science student passionate about{" "}
            <span className="text-gray-200">software engineering</span>,{" "}
            <span className="text-gray-200">research</span>, and building{" "}
            <span className="text-gray-200">innovative projects</span>.
          </p>

          <div className="flex justify-center mt-8">
  <Link
    href="/resume"
    className="w-full max-w-xl bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg py-4 transition text-center"
  >
    View My Resume
  </Link>
</div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <motion.section
        className="max-w-3xl mx-auto mb-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          I recently finished my{" "}
          <span className="text-gray-200">
            B.S. in Computer Science at Florida State University
          </span>{" "}
          and am beginning my{" "}
          <span className="text-gray-200">
            Master’s in Computer Science at UCF
          </span>
          . My experience includes research on{" "}
          <span className="text-gray-200">
            GIS-based pollutant transport modeling (ArcNLET)
          </span>
          , full-stack web development, and competitive programming & CTF
          security challenges. Outside of academics, I’ve built a successful{" "}
          <span className="text-gray-200">
            vintage clothing resale business
          </span>{" "}
          and enjoy exploring how technology can solve real-world problems.
        </p>
      </motion.section>
      {/* Featured Projects Section */}
<section className="max-w-5xl mx-auto text-center mt-20">
  <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* ArcNLET Project */}
    <div className="bg-gray-900 rounded-xl shadow-lg p-6 text-left">
      <h3 className="text-xl font-semibold mb-3">ArcNLET Python</h3>
      <p className="text-gray-400 mb-4">
        GIS-based pollutant transport modeling tool rewritten in Python for 
        better performance and ArcGIS Pro integration.
      </p>
      <a
        href="https://github.com/ArcNLET-Py/ArcNLET-Py/blob/main/ArcNLET-Py-Source-Code/tool4_transport.py"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-500 font-medium"
      >
        View on GitHub →
      </a>
    </div>

    {/* Climate Analyzer Project */}
    <div className="bg-gray-900 rounded-xl shadow-lg p-6 text-left">
      <h3 className="text-xl font-semibold mb-3">Climate Analyzer</h3>
      <p className="text-gray-400 mb-4">
        Web app for analyzing climate data trends using custom Python models 
        for temperature & humidity prediction.
      </p>
      <a
        href="https://github.com/mhartle02/ClimateAnalyzerProject"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-500 font-medium"
      >
        View on GitHub →
      </a>
    </div>
  </div>
  <footer className="mt-20 text-center">
  <div className="flex flex-wrap justify-center gap-4 mb-12">
    <a
      href="https://github.com/Lucas-Hardeman"
      target="_blank"
      rel="noopener noreferrer"
      className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition"
    >
      GitHub
    </a>
    <a
  href="https://www.linkedin.com/in/lucas-hardeman-824741328/"
  target="_blank"
  rel="noopener noreferrer"
  className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
>
  LinkedIn
</a>
  </div>
</footer>

</section>

    </main>

  
  );

}