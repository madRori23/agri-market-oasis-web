
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { Button } from "./button";

interface Seller {
  id: string;
  name: string;
  price: number;
}

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  id: number;
  sellers?: Seller[];
}

export function ProductCard({ title, price, image, id, sellers }: ProductCardProps) {
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
        <p className="text-forest text-lg">From R{price.toFixed(2)} per kg</p>
        {sellers && sellers.length > 0 && (
          <div className="mt-2 space-y-2">
            <p className="text-sm text-gray-500">Available from {sellers.length} seller{sellers.length > 1 ? 's' : ''}</p>
            <div className="space-y-1">
              {sellers.map((seller) => (
                <div key={seller.id} className="text-sm flex justify-between items-center">
                  <span>{seller.name}</span>
                  <span className="font-medium">R{seller.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
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
