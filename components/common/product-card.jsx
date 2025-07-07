"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AddProductModal from "./add-product-modal";


const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function ProductCard({product}) {
  const [addTocartDailog, setAddToCartDialog] = useState(false);

  const closeAddToCartDialg = () => {
    setAddToCartDialog(false);
  };
  return (
    <motion.div variants={cardVariants} className="px-2">
      <motion.div whileHover={{ scale: 1.03 }} className="h-full">
        <Card className="">
          <CardHeader>
            <CardTitle>{product.name.replace("Add ", "")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-48 w-full mb-4">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <p className="text-sm line-clamp-3">
              {product.description}
            </p>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => setAddToCartDialog(true)}
              className="w-full text-black"
            >
              Add to Cart
            </Button>
          </CardFooter>
          <AddProductModal
            product={product}
            isOpen={addTocartDailog}
            onClose={closeAddToCartDialg}
          />
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default ProductCard;
