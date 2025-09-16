"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Entry = {
  logoSrc: string;
  alt: string;
  name: string;
  description: string;
};

type Section = {
  header: string;
  items: Entry[];
};

// --- Data ---
const SECTIONS: Section[] = [
  {
    header: "Education",
    items: [
      {
        logoSrc: "/fsu-logo.png",
        alt: "Florida State University Logo",
        name: "Florida State University",
        description: "Bachelor of Science in Computer Science (2025)",
      },
      {
        logoSrc: "/ucf-logo.png",
        alt: "University of Central Florida Logo",
        name: "University of Central Florida",
        description: "Master’s Student in Computer Science (2025–2027)",
      },
    ],
  },
  {
    header: "Experience",
    items: [
      {
        logoSrc: "/fsu-logo.png",
        alt: "FSU EOAS Logo",
        name: "Research Intern — ArcNLET Development",
        description: "FSU EOAS · Sep 2024 – Present",
      },
    ],
  },
  {
    header: "Skills",
    items: [
      {
        logoSrc: "/globe.svg", // pick any icon in /public
        alt: "Skills Icon",
        name: "Technical Skills",
        description:
          "Python, Java, JavaScript, SQL, React, Next.js, Django, Flask, ArcGIS Pro",
      },
    ],
  },
];

// ---- Motion variants ----
const slideUp = {
  hidden: { y: -20, opacity: 0, filter: "blur(10px)" },
  visible: { y: 0, opacity: 1, filter: "blur(0px)" },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

function EntryRow({ item }: { item: Entry }) {
  return (
    <motion.div
      variants={slideUp}
      transition={{ duration: 0.9 }}
      className="flex w-full flex-col md:flex-row items-center gap-4 md:gap-16 py-8 md:py-12"
    >
      {/* Logo */}
      <div className="flex-shrink-0 mx-auto md:mx-0">
        <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
          <Image
            src={item.logoSrc}
            alt={item.alt}
            width={112}
            height={112}
            className="object-contain w-full h-auto rounded-full border border-gray-300 bg-white"
            priority
          />
        </div>
      </div>

      {/* Text */}
      <div className="flex-1 text-center md:text-left md:ml-6 lg:ml-10">
        <h3 className="text-xl md:text-2xl font-bold text-gray-100 leading-tight mb-2">
          {item.name}
        </h3>
        <p className="text-base md:text-lg text-gray-400">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function ResumePage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="min-h-screen bg-black px-6 md:px-10 lg:px-12 py-10 md:py-14"
    >
      <div className="max-w-4xl mx-auto">
        {SECTIONS.map((section) => (
          <motion.section
            key={section.header}
            variants={slideUp}
            transition={{ duration: 0.9 }}
            className="mb-16 md:mb-20"
          >
            {/* Add Resume Link Above Education */}
            {section.header === "Education" && (
              <motion.div
                variants={slideUp}
                transition={{ duration: 0.9 }}
                className="mb-4 text-center md:text-left"
              >
                <Link
                  href="https://docsend.com/v/xvpn5/lucashardemanresume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg md:text-xl font-semibold text-blue-400 hover:text-blue-600 underline"
                >
                  View My Resume Here!
                </Link>
              </motion.div>
            )}

            <motion.h1
              variants={slideUp}
              transition={{ duration: 0.9 }}
              className="text-2xl md:text-3xl font-bold text-gray-200 mb-8 md:mb-12 text-center md:text-left"
            >
              {section.header}
            </motion.h1>

            <motion.div variants={stagger} className="md:pl-10 lg:pl-16">
              {section.items.map((item) => (
                <EntryRow key={item.name} item={item} />
              ))}
            </motion.div>
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
}
