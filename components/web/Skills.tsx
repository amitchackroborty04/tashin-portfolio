"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import Image from "next/image"

export function Skills() {
  const { ref, isInView } = useInView()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  }

  return (
    <section
      ref={ref}
      id="skills"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="
          mx-auto
          w-full
          max-w-[360px]
          sm:max-w-[520px]
          md:max-w-[700px]
          lg:w-[895px]
          lg:h-[754px]
        "
      >
        <Image
          src="/assets/tree.png"
          alt="skills"
          width={1000}
          height={1000}
          className="w-full h-auto lg:h-full object-contain"
          priority
        />
      </motion.div>
    </section>
  )
}
