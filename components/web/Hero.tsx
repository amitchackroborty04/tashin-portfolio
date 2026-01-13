"use client"

import { motion, Variants } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-[120px] md:pt-[150px] px-4"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto"
      >
        {/* TOP */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-[100px] items-center md:items-start">
          
          {/* Avatar */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-40 h-40 mx-auto md:mx-0"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-2xl" />

              <div className="relative w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[258px] md:h-[258px]">
                
                {/* Overlay — hidden on mobile */}
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[385px] h-[481px] -z-50">
                  <Image
                    src="/assets/overly2.png"
                    alt="overlay"
                    fill
                    className="object-cover"
                  />
                </div>

                <Image
                  src="/assets/Me.png"
                  alt="Avatar"
                  fill
                  className="object-cover z-40"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.div
              variants={itemVariants}
              className="text-center md:text-left mb-4"
            >
              <p className="text-neutral-400 text-sm tracking-widest">
                Hello! I am{" "}
                <span className="text-[#7127BA]">Ibrahim Memon</span>
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mb-6 text-center md:text-left"
            >
              <p className="text-white text-[17px] mb-2">A Designer who</p>

              <h2 className="text-white text-[30px] md:text-[50px] font-normal">
                Judges a book
                <br />
                by its{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  cover
                </span>
                ...
              </h2>

              <p className="text-neutral-500 text-sm mt-2">
                Because if the cover does not impress you what else can?
              </p>
            </motion.div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <motion.div
          variants={itemVariants}
          className="mb-12 mt-16 md:mt-[132px] text-center md:text-left"
        >
          <h3 className="text-2xl md:text-[50px] font-normal mb-5 text-white tracking-[0.1em]">
            I'm a Software Engineer.
          </h3>

          <p className="text-white max-w-2xl mx-auto md:mx-0">
            Currently, I'm a Software Engineer at{" "}
            <span className="text-blue-400 font-semibold">Facebook</span>.
          </p>

          <p
            className="
              text-white
              w-full
              md:w-[892px]
              leading-relaxed
              md:leading-[2.5]
              tracking-[0.1em]
              text-base
              md:text-[21px]
              mt-10
              md:mt-[70px]
            "
          >
            A self-taught UI/UX designer, functioning in the industry for 3+ years
            now. I make meaningful and delightful digital products that create an
            equilibrium between user needs and business goals.
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-purple-400/50" />
      </motion.div>
    </section>
  )
}
