
"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AddProductModal from "./add-product-modal";
import { Badge } from "@/components/ui/badge";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function ProductCard({ product }) {
  const [addToCartDialog, setAddToCartDialog] = useState(false);

  const closeAddToCartDialog = () => {
    setAddToCartDialog(false);
  };

  return (
    <motion.div variants={cardVariants} className="px-2">
      <motion.div whileHover={{ scale: 1.03 }} className="h-full">
        <Card className="flex flex-col justify-between h-full">
          <CardHeader>
            <CardTitle className="text-lg font-bold line-clamp-1">
              {product.name.replace("Add ", "")}
            </CardTitle>
            <CardDescription className="text-yellow-500 font-semibold">
              £ {product.basePrice.toFixed(2)}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <p className="text-sm text-gray-400 line-clamp-3 mb-3">
              {product.description}
            </p>
            <div className="flex gap-1 flex-wrap">
              {["HOT", "VG", "SF"].map((tag) => (
                <Badge
                  key={tag}
                  variant={"secondary"}
                  className=" text-xs px-2 py-1 rounded"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter>
            <Button
              onClick={() => setAddToCartDialog(true)}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
            >
              Add to Cart
            </Button>
          </CardFooter>

          <AddProductModal
            product={product}
            isOpen={addToCartDialog}
            onClose={closeAddToCartDialog}
          />
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default ProductCard;
