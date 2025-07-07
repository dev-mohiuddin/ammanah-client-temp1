import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import AddProductModal from './add-product-modal'


const product = {
  id: 'vodka-123',
  name: 'Add Vodka',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only has been the industry\'s standard dummy text ever since thehas been the industry\'s standard dummy text ever-since the',
  image: '/cocktail.jpg',
  basePrice: 25.00,
};

function ProductCard() {
  return (
    <Dialog>
      <Card className="w-[350px] bg-gray-800 border-gray-700 text-white">
        <CardHeader>
          <CardTitle>{product.name.replace('Add ', '')}</CardTitle>
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
          <p className="text-gray-400 text-sm line-clamp-3">{product.description}</p>
        </CardContent>
        <CardFooter>
          <DialogTrigger asChild>
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
              Add to Cart
            </Button>
          </DialogTrigger>
        </CardFooter>
      </Card>
      
      <DialogContent className="!w-[1000px] h-[90vh]">
        <AddProductModal product={product} />
      </DialogContent>
    </Dialog>
  );
}

export default ProductCard