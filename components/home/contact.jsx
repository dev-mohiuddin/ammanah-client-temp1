// app/components/contact.tsx
"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Left Side - Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight">
              Get in Touch With Us
            </h2>
            <p className="text-muted-foreground">
              Whether you have questions about our restaurant management system, need help placing an order, or want to customize your own food menu interface — we’re here to help!
            </p>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong>📍 Address:</strong> 123 Food Street, Dhaka, Bangladesh</p>
              <p><strong>📞 Phone:</strong> +880 1234-567890</p>
              <p><strong>📧 Email:</strong> support@restomanage.com</p>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.form
            className="space-y-6 w-full"
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={itemVariant}>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input type="text" id="name" placeholder="Full Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input type="email" id="email" placeholder="Name@example.com" required />
              </div>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={itemVariant}>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input type="tel" id="phone" placeholder="+8801XXXXXXXXX" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input type="text" id="subject" placeholder="Request for Demo" />
              </div>
            </motion.div>

            <motion.div className="space-y-2" variants={itemVariant}>
              <Label htmlFor="message">Your Message</Label>
              <Textarea id="message" placeholder="Write your message here..." rows={5} required />
            </motion.div>

            <motion.div variants={itemVariant}>
              <Button type="submit" className="w-full md:w-auto">
                Send Message
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
