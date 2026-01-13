"use client";

import type React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import Image from "next/image";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export function WorkExperience() {
  const { ref, isInView } = useInView();

  const experiences: ExperienceCard[] = [
    {
      id: 1,
      title: "CIB on the Mobile",
      description:
        "Take your client onboard seamlessly by our amazing world of digital payment process.",
      icon: "/assets/skill1.png",
      gradient: "gradient-card-1",
    },
    {
      id: 2,
      title: "CIB on the Mobile",
      description:
        "Take your client onboard seamlessly by our amazing world of digital payment process.",
      icon: "/assets/skill1.png",
      gradient: "gradient-card-2",
    },
    {
      id: 3,
      title: "CIB on the Mobile",
      description:
        "Take your client onboard seamlessly by our amazing world of digital payment process.",
      icon: "/assets/skill1.png",
      gradient: "gradient-card-3",
    },
    {
      id: 4,
      title: "CIB on the Mobile",
      description:
        "Take your client onboard seamlessly by our amazing world of digital payment process.",
      icon: "/assets/skill1.png",
      gradient: "gradient-card-4",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      ref={ref}
      id="experience"
      className="relative py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-normal text-white">
            Work Experience
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 relative"
        >
          {/* 🔴 Overlay image — LG ONLY */}
          <div className="hidden lg:block w-[616px] h-[716px] absolute top-1/2 -translate-y-[55%] left-1/2 -translate-x-1/2 pointer-events-none">
            <Image
              src="/assets/overly.png"
              width={1000}
              height={1000}
              alt="overlay"
              className="w-full h-full object-cover"
            />
          </div>

          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.2)",
              }}
              style={{
                background:
                  "linear-gradient(110.49deg, #130428 19.95%, #251043 67.64%, #38126D 107.08%, #261045 156.61%, #190634 183.21%)",
              }}
              className={`${experience.gradient} p-6 sm:p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 group cursor-pointer relative overflow-hidden`}
            >
              {/* Hover layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 flex flex-col sm:flex-row gap-6 sm:gap-x-10">
                {/* Icon */}
                <div className="inline-block p-3 bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition-colors">
                  <div className="w-[90px] h-[90px] sm:w-[121px] sm:h-[115px]">
                    <Image
                      src={experience.icon}
                      alt={experience.title}
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[22px] sm:text-[26px] font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors">
                    {experience.title}
                  </h3>

                  <p className="text-neutral-400 mb-6 text-sm leading-relaxed">
                    {experience.description}
                  </p>

                  <motion.button
                    whileHover={{ x: 4 }}
                    className="text-white border border-[#693B93] bg-[#2C1250] px-[23px] py-[12px] text-sm font-semibold hover:text-purple-200 transition-colors flex items-center gap-2 rounded-[10px]"
                  >
                    LEARN MORE →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
