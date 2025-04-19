
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { Button } from "./button";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  id: number;
  sellerName?: string;
}

export function ProductCard({ title, price, image, id, sellerName }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-square relative">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-forest text-lg">R{price.toFixed(2)} per kg</p>
        {sellerName && (
          <p className="text-sm text-gray-500 mt-1">Sold by: {sellerName}</p>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
