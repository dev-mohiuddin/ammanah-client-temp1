// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import Slider from "react-slick"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { cn } from "@/lib/utils"

// import { motion } from "framer-motion"

// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

// import { checken, pizza, burger, bread } from "@/assets"

// const categories = [
//   {
//     name: "Pizza",
//     count: 12,
//     image: pizza,
//   },
//   {
//     name: "Broast",
//     count: 13,
//     image: bread,
//   },
//   {
//     name: "Chicken",
//     count: 14,
//     image: checken,
//   },
//   {
//     name: "Burger",
//     count: 15,
//     image: burger,
//   },
// ]

// const filters = ["All", "Healthy", "Italian", "Asian", "Mexican"]

// export default function TopFoodCategories() {
//   const [activeFilter, setActiveFilter] = useState("All")

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 1280,
//         settings: { slidesToShow: 3 },
//       },
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 640,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   }

//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       viewport={{ once: true }}
//       className="w-full py-16 px-4 md:px-8 bg-background text-foreground"
//     >
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1, duration: 0.5 }}
//           viewport={{ once: true }}
//           className="flex justify-between items-center mb-6"
//         >
//           <h2 className="text-2xl md:text-3xl font-bold">Top Foods Categories</h2>
//         </motion.div>

//         {/* Filters */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.4 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap gap-3 mb-8"
//         >
//           {filters.map((filter) => (
//             <Button
//               key={filter}
//               variant={activeFilter === filter ? "default" : "outline"}
//               size="sm"
//               onClick={() => setActiveFilter(filter)}
//               className="rounded-full capitalize"
//             >
//               {filter}
//             </Button>
//           ))}
//         </motion.div>

//         {/* Slider with Animated Cards */}
//         <Slider {...settings} className="custom-slider">
//           {categories.map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.1 * i, duration: 0.5 }}
//               viewport={{ once: true }}
//               className="px-2"
//             >
//               <motion.div whileHover={{ scale: 1.03 }} className="h-full">
//                 <Card className="rounded-xl p-2 overflow-hidden shadow-md">
//                   <div className="relative h-[200px] w-full">
//                     <Image
//                       src={item.image}
//                       alt={item.name}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <CardContent className="py-4 text-center">
//                     <p className="text-sm text-primary font-semibold mb-1">
//                       {item.count} Restaurants Products
//                     </p>
//                     <h4 className="text-md font-bold text-foreground">
//                       {item.name}
//                     </h4>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </motion.div>
//           ))}
//         </Slider>
//       </div>
//     </motion.section>
//   )
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { checken, pizza, burger, bread } from "@/assets";

const categories = [
  { name: "Pizza", count: 12, image: pizza },
  { name: "Broast", count: 13, image: bread },
  { name: "Chicken", count: 14, image: checken },
  { name: "Burger", count: 15, image: burger },
];

const filters = ["All", "Healthy", "Italian", "Asian", "Mexican"];

// Motion Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function TopFoodCategories() {
  const [activeFilter, setActiveFilter] = useState("All");

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="w-full py-16 px-4 md:px-8 bg-background text-foreground"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-between items-center mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            Top Foods Categories
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className="rounded-full capitalize"
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        {/* Slider with Animated Cards */}
        <Slider {...settings} className="custom-slider">
          {categories.map((item, i) => (
            <motion.div key={i} variants={cardVariants} className="px-2">
              <motion.div whileHover={{ scale: 1.03 }} className="h-full">
                <Card className="rounded-xl p-2 overflow-hidden shadow-md">
                  <div className="relative h-[200px] w-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="py-4 text-center">
                    <p className="text-sm text-primary font-semibold mb-1">
                      {item.count} Restaurants Products
                    </p>
                    <h4 className="text-md font-bold text-foreground">
                      {item.name}
                    </h4>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </motion.section>
  );
}
