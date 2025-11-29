"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import Header from "../components/headernav";

// ------------------------------------
// TYPES
// ------------------------------------
interface ProjectImage {
  src: string;
  category: "branding" | "graphics" | "logo" | "UI/UX";
}

// ------------------------------------
// IMAGE DATA
// ------------------------------------
const projects: ProjectImage[] = [
  { src: "/emmy_work/IMG-20251129-WA0004.jpg", category: "branding" },
  { src: "/emmy_work/IMG-20251129-WA0005.jpg", category: "graphics" },
  { src: "/emmy_work/IMG-20251129-WA0006.jpg", category: "logo" },
  { src: "/emmy_work/IMG-20251129-WA0007.jpg", category: "branding" },
  { src: "/emmy_work/IMG-20251129-WA0008.jpg", category: "graphics" },
  { src: "/emmy_work/IMG-20251129-WA0009.jpg", category: "logo" },
  { src: "/emmy_work/IMG-20251129-WA0010.jpg", category: "branding" },

  { src: "/emmy_work/IMG-20251129-WA0011.jpg", category: "graphics" },
  { src: "/emmy_work/IMG-20251129-WA0012.jpg", category: "logo" },
  { src: "/emmy_work/IMG-20251129-WA0013.jpg", category: "branding" },
  { src: "/emmy_work/IMG-20251129-WA0014.jpg", category: "graphics" },
  { src: "/emmy_work/IMG-20251129-WA0015.jpg", category: "logo" },
  { src: "/emmy_work/IMG-20251129-WA0016.jpg", category: "branding" },
  { src: "/emmy_work/IMG-20251129-WA0017.jpg", category: "graphics" },
  { src: "/emmy_work/IMG-20251129-WA0018.jpg", category: "logo" },
  { src: "/emmy_work/IMG-20251129-WA0019.jpg", category: "branding" },
  { src: "/emmy_work/IMG-20251129-WA0020.jpg", category: "graphics" },
  { src: "/emmy_work/IMG-20251129-WA0021.jpg", category: "logo" },
  { src: "/emmy_work/IMG-20251129-WA0022.jpg", category: "branding" },
  { src: "/emmy_work/IMG-20251129-WA0023.jpg", category: "graphics" },
  { src: "/emmy_work/IMG-20251129-WA0024.jpg", category: "logo" },
  { src: "/emmy_work/IMG-20251129-WA0025.jpg", category: "branding" },
  { src: "/emmy_work/IMG-20251129-WA0026.jpg", category: "graphics" },
  { src: "/emmy_work/IMG-20251129-WA0027.jpg", category: "logo" },
  { src: "/emmy_work/IMG-20251129-WA0028.jpg", category: "branding" },
  { src: "/emmy_work/IMG-20251129-WA0029.jpg", category: "graphics" },
  { src: "/emmy_work/IMG-20251129-WA0030.jpg", category: "logo" },
  { src: "/emmy_work/IMG-20251129-WA0031.jpg", category: "branding" },
  { src: "/emmy_work/IMG-20251129-WA0032.jpg", category: "graphics" },
  { src: "/emmy_work/IMG-20251129-WA0033.jpg", category: "logo" },
  { src: "/emmy_work/IMG-20251129-WA0034.jpg", category: "branding" },
  { src: "/emmy_work/IMG-20251129-WA0035.jpg", category: "graphics" },
  { src: "/emmy_work/IMG-20251129-WA0036.jpg", category: "logo" },
  { src: "/emmy_work/IMG-20251129-WA0037.jpg", category: "branding" },
  { src: "/emmy_work/IMG-20251129-WA0038.jpg", category: "graphics" },
  { src: "/emmy_work/IMG-20251129-WA0039.jpg", category: "logo" },
  { src: "/emmy_work/IMG-20251129-WA0040.jpg", category: "branding" },
  { src: "/emmy_work/IMG-20251129-WA0041.jpg", category: "graphics" },
  { src: "/emmy_work/IMG-20251129-WA0042.jpg", category: "logo" },
  { src: "/emmy_work/IMG-20251129-WA0043.jpg", category: "branding" },
  { src: "/emmy_work/IMG-20251129-WA0044.jpg", category: "graphics" },
  { src: "/emmy_work/IMG-20251129-WA0045.jpg", category: "logo" },
  { src: "/emmy_work/IMG-20251129-WA0046.jpg", category: "branding" },
  { src: "/emmy_work/IMG-20251129-WA0047.jpg", category: "graphics" },
  { src: "/emmy_work/IMG-20251129-WA0048.jpg", category: "logo" },
  { src: "/emmy_work/IMG-20251129-WA0049.jpg", category: "branding" },
  { src: "/emmy_work/IMG-20251129-WA0050.jpg", category: "graphics" },
];


// ------------------------------------
// ANIMATION
// ------------------------------------
const imageVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0, 0.2, 1] } },
};

type Category = "all" | "branding" | "graphics" | "logo" | "UI/UX";

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>("all");
  const categories: Category[] = ["all", "logo", "graphics", "branding", "UI/UX"];

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <main className="w-screen min-h-screen bg-[#f3e4f0] pt-32 md:pt-38 flex flex-col gap-16">
      <Header/>
      {/* ------------------ TITLE ------------------ */}
      <section className="text-center">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-museo text-[#5c0d67]">
          Our Projects
        </h1>
        <p className="mt-4 text-lg sm:text-xl font-medium text-[#5c0d67]/80 font-erbar">
          Explore our collection of branding, graphics, and logo projects.
        </p>
      </section>

      {/* ------------------ CATEGORIES ------------------ */}
      <section className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-lg sm:text-xl font-medium transition-all
              ${
                active === cat
                  ? "bg-[#5c0d67] text-[#f3e4f0] shadow-lg"
                  : "bg-[#e3cdda] text-[#5c0d67] hover:bg-[#d9c1cf]"
              }
            `}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </section>

      {/* ------------------ IMAGE GRID (MASONRY EFFECT) ------------------ */}
      <section className="columns-2 sm:columns-2 lg:columns-3 gap-4 px-4 sm:px-8 md:px-12">
        {filtered.map((project, index) => (
          <motion.div
            key={index}
            className="mb-4 break-inside-avoid"
            variants={imageVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.04 }}
          >
            <Image
              src={project.src}
              alt={`Project ${index}`}
              width={800}
              height={1000}
              className="w-full rounded-xl object-cover shadow-md hover:scale-[1.02] transition-all duration-300"
            />
          </motion.div>
        ))}
      </section>

      {/* ------------------ CTA BUTTON ------------------ */}
      <div className="flex items-center justify-center pb-10">
        <a
          href="/contact"
          className="bg-[#5c0d67] w-auto text-[#f3e4f0] px-6 py-3 md:px-8 md:py-4 text-lg sm:text-xl cursor-pointer rounded-full font-semibold hover:bg-[#5c0d67]/90 transition-all duration-300"
        >
          Start Your Project
        </a>
      </div>
    </main>
  );
}
