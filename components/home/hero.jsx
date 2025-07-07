"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { heroFood1, heroFood2, grill, brianiy, burger, checken} from "@/assets"

const backgroundImages = [checken, burger, brianiy]

export default function CustomerHero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full min-h-[90vh] dark:bg-transparent = flex items-center text-foreground overflow-hidden">
      {/* Background Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 -z-20"
        >
          <Image
            src={backgroundImages[currentImage]}
            alt="Background Food"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-10 py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Offer Tag */}
          <motion.div
            className="inline-block bg-red-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 animate-pulse"
            initial={{ scale: 0.9 }}
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            🛍️ 30% OFF On All Combo Meals!
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
            Satisfy Your Cravings with{" "}
            <span className="text-primary">Delicious</span> Food
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-xl">
            Freshly cooked meals from your favorite restaurants delivered right
            to your doorstep.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button size="lg" asChild>
              <Link href="/menu">Order Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#popular">View Popular</Link>
            </Button>
          </div>
        </motion.div>

        {/* Right - Floating Dish Card */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-white/30 dark:bg-black/30 backdrop-blur-lg rounded-xl shadow-xl p-4 max-w-sm text-center">
            <Image
              src={grill}
              alt="Featured Dish"
              width={400}
              height={300}
              className="rounded-lg mx-auto object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-primary mb-1">Grilled Chicken Special</h3>
            <p className="text-sm text-black dark:text-muted-foreground">Served with fries & salad</p>
            <p className="text-sm font-bold mt-2 text-green-600 dark:text-green-400">Only $6.99</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
