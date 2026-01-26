import Breadcrumb from "@/components/shared/Breadcump";
import ShopCategory from "@/components/shared/ShopCat";
import ShopFilter from "@/components/shared/ShopFilt";
import ProductCard from "@/components/sections/ProductCard";
import { Product } from "@/types/product";

const products: Product[] = [
  {
    id: 1,
    name: "Classic Baseball Cap",
    price: 3500,
    originalPrice: 5000,
    discount: 30,
    image: "/assets/image/just-for-you/Rectangle 19333.png",
    description: "A classic baseball cap perfect for any outfit.",
    categoryId: 1,
    category: "Best Sellers",
  },
  {
    id: 2,
    name: "Classic Baseball Cap",
    price: 3500,
    originalPrice: 5000,
    discount: 30,
    image: "/assets/image/just-for-you/Rectangle 19333.png",
    description: "A classic baseball cap perfect for any outfit.",
    categoryId: 1,
    category: "Best Sellers",
  },
  {
    id: 3,
    name: "Classic Baseball Cap",
    price: 3500,
    originalPrice: 5000,
    discount: 30,
    image: "/assets/image/just-for-you/Rectangle 19333.png",
    description: "A classic baseball cap perfect for any outfit.",
    categoryId: 1,
    category: "Best Sellers",
  },
  {
    id: 4,
    name: "Classic Baseball Cap",
    price: 3500,
    originalPrice: 5000,
    discount: 30,
    image: "/assets/image/just-for-you/Rectangle 19333.png",
    description: "A classic baseball cap perfect for any outfit.",
    categoryId: 1,
    category: "Best Sellers",
  },
  {
    id: 5,
    name: "Classic Baseball Cap",
    price: 3500,
    originalPrice: 5000,
    discount: 30,
    image: "/assets/image/just-for-you/Rectangle 19333.png",
    description: "A classic baseball cap perfect for any outfit.",
    categoryId: 1,
    category: "Best Sellers",
  },
  {
    id: 6,
    name: "Classic Baseball Cap",
    price: 3500,
    originalPrice: 5000,
    discount: 30,
    image: "/assets/image/just-for-you/Rectangle 19333.png",
    description: "A classic baseball cap perfect for any outfit.",
    categoryId: 1,
    category: "Best Sellers",
  },
];

export default function ShopTwo() {
  return (
    <main>
      <Breadcrumb
        title="Men's Caps & Hats"
        itemsCount={120}
        path={["Home", "Men's Caps & Hats"]}
      />

      <ShopCategory />
      <ShopFilter />

      <section className="products-wrapper mt-15">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
            <div className="grid grid-cols-1">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-10">
              {products.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
