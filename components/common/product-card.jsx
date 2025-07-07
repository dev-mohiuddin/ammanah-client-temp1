'use client'
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { burger } from "@/assets";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AddProductModal from "./add-product-modal";

const product = {
  id: "vodka-123",
  name: "Add Vodka",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only has been the industry's standard dummy text ever since thehas been the industry's standard dummy text ever-since the",
  image: burger,
  basePrice: 25.0,
};

function ProductCard() {
  const [addTocartDailog, setAddToCartDialog] = useState(false);

  const closeAddToCartDialg = () => {
    setAddToCartDialog(false);
  };
  return (
    <Card className="w-[350px]">
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
        <p className="text-gray-400 text-sm line-clamp-3">
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
  );
}

export default ProductCard;
