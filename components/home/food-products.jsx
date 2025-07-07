"use client";
import Slider from "react-slick";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ProductCard from "../common/product-card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { checken, pizza, burger, bread } from "@/assets";


// Motion Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};


export default function FoodProducts() {
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
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-between items-center mb-6"
        >
          <div className="flex justify-between items-center w-full">
            <h2 className="text-2xl md:text-3xl font-bold">All Foods</h2>
            <Button className="cursor-pointer" variant={"link"}>
              View all
            </Button>
          </div>
        </motion.div>

        {/* Slider with Animated Cards */}
        <Slider {...settings} className="custom-slider">
          {products.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </Slider>
      </div>
    </motion.section>
  );
}


const products = [
  {
    id: "vodka-123",
    name: "Add Vodka",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: burger,
    basePrice: 25.0,
  },
  {
    id: "burger-001",
    name: "Classic Cheeseburger",
    description:
      "Juicy grilled beef patty with melted cheese, fresh lettuce, tomatoes, and our signature sauce. Served on a toasted bun.",
    image: checken,
    basePrice: 12.99,
  },
  {
    id: "pizza-002",
    name: "Pepperoni Pizza",
    description:
      "Stone-baked pizza with spicy pepperoni, mozzarella cheese, and our special tomato sauce. A true Italian favorite.",
    image: pizza,
    basePrice: 15.5,
  },
  {
    id: "soda-003",
    name: "Chilled Cola",
    description:
      "Refreshing and bubbly cola served cold. The perfect companion for your meal or just to cool down.",
    image: burger,
    basePrice: 3.5,
  },
  {
    id: "fries-004",
    name: "Crispy French Fries",
    description:
      "Golden and crispy on the outside, soft and fluffy on the inside. A timeless side dish for any snack or meal.",
    image: bread,
    basePrice: 4.0,
  },
  {
    id: "dessert-005",
    name: "Chocolate Lava Cake",
    description:
      "Warm, gooey chocolate cake with a molten center. Served with a scoop of vanilla ice cream on top.",
    image: burger,
    basePrice: 6.75,
  },
];

