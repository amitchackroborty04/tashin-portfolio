"use client"

import { motion, Variants } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

interface Project {
  id: number
  title: string
  description: string
  image: string
  position: "left" | "right"
}

export function Projects() {
  const { ref, isInView } = useInView()

  const projects: Project[] = [
    {
      id: 1,
      title: "Example Project",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      image: "/assets/project.png",
      position: "left",
    },
    {
      id: 2,
      title: "Example Project",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      image: "/assets/project.png",
      position: "right",
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section ref={ref} id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Featured Projects
          </h2>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-24"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative w-full ${
                  project.position === "right" ? "md:order-last" : ""
                }`}
              >
                <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />

                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                whileHover={{ x: project.position === "left" ? 10 : -10 }}
                className="flex flex-col justify-center gap-6 text-center md:text-left"
              >
                <div>
                  <p className="text-purple-400 text-sm font-semibold tracking-widest mb-2">
                    Featured Project
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {["React", "Node.js", "Design"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-purple-900/30 border border-purple-500/30 rounded-full text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 8 }}
                  className="text-purple-300 hover:text-purple-200 font-semibold flex items-center gap-2 transition-colors w-fit mx-auto md:mx-0"
                >
                  VIEW CASE STUDY <ExternalLink className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
