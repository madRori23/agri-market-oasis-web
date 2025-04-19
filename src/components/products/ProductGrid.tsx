
import { Product } from "@/types/user";
import { ProductCard } from "@/components/ui/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
}

export function ProductGrid({ products, isLoading }: ProductGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-[400px] w-full" />
        ))}
      </div>
    );
  }

  // Group products by their ID to show different sellers for the same product
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.id]) {
      acc[product.id] = [];
    }
    acc[product.id].push(product);
    return acc;
  }, {} as Record<number, Product[]>);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.values(groupedProducts).map((productGroup) => (
        <ProductCard
          key={`${productGroup[0].id}-${productGroup[0].sellerId}`}
          id={productGroup[0].id}
          title={productGroup[0].title}
          price={Math.min(...productGroup.map(p => p.price))}
          image={productGroup[0].image}
          sellers={productGroup.map(p => ({
            id: p.sellerId,
            name: p.sellerName,
            price: p.price
          }))}
        />
      ))}
    </div>
  );
}
