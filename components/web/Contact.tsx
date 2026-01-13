"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import emailjs from "emailjs-com"
import { toast } from "sonner"
import { Mail, Phone, MessageCircle, User, MessageSquare } from "lucide-react"

export function ContactForm() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loading) return

    const form = e.currentTarget
    setLoading(true)

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",   //  EmailJS Service ID
        "YOUR_TEMPLATE_ID",  //  EmailJS Template ID
        form,
        "YOUR_PUBLIC_KEY"    //  EmailJS Public Key
      )

      toast.success("Message sent successfully !")
      form.reset()
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-normal text-white mb-4">
            Contact Me
          </h2>
          <p className="text-neutral-400 text-xl">
            Have a project or just want to say hi? Drop a message
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: <Mail />,
                title: "Email",
                value: "youremil.com",
                href: "youremail.com",
              },
              {
                icon: <Phone />,
                title: "Phone",
                value: "+91 98765 43210",
                href: "tel:+919876543210",
              },
              {
                icon: <MessageCircle />,
                title: "WhatsApp",
                value: "+91 98765 43210",
                href: "https://wa.me/919876543210",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                className="flex items-center gap-4 p-5 rounded-xl border border-purple-500/20 bg-purple-900/10 hover:border-purple-500/50 transition-all"
              >
                <div className="p-3 rounded-lg bg-purple-600/20 text-purple-400">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-neutral-400">{item.title}</p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* RIGHT – FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 border border-purple-500/20 rounded-2xl p-6 sm:p-8"
            style={{
              background:
                "linear-gradient(110.49deg, #130428 19.95%, #251043 67.64%, #38126D 107.08%, #261045 156.61%, #190634 183.21%)",
            }}
          >
            {/* Name */}
            <div>
              <label className="block text-lg text-neutral-300 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full pl-10 pr-4 py-4 rounded-lg bg-black/40 border border-purple-500/30 text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg text-neutral-300 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full pl-10 pr-4 py-4 rounded-lg bg-black/40 border border-purple-500/30 text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-lg text-neutral-300 mb-2">
                Phone Number (optional)
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                <input
                  type="tel"
                  name="phone"
                  className="w-full pl-10 pr-4 py-4 rounded-lg bg-black/40 border border-purple-500/30 text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg text-neutral-300 mb-2">
                Message *
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-purple-400" />
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-black/40 border border-purple-500/30 text-white focus:outline-none focus:border-purple-500 resize-none"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
