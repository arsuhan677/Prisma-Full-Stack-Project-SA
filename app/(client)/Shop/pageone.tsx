// 'use client'

// import Breadcrumb from "@/components/shared/Breadcump";
// import ShopCategory from "@/components/shared/ShopCat";
// import ShopFilter from "@/components/shared/ShopFilt";
// import ProductCard from "@/components/sections/ProductCard";
// import { Product } from "@/app/generated/prisma/client";
// // import { Product } from '@/app/generated/prisma/client';


// export default function ShopOne({ products }: { products: Product[]; }) {
//   return (
//     <>      <main>
//         <Breadcrumb
//             title="Men's Caps & Hats"
//             itemsCount={120}
//             path={["Home", "Men's Caps & Hats"]}
//         />
//         <ShopCategory />
//         <ShopFilter />
//         <section className="products-wrapper mt-15">
//             <div className="container mx-auto">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8">
//                     {products.map((product) => (
//                         <ProductCard key={product.id} product={product} variant="best-ShopOne" />
//                     ))}
//                 </div>
//             </div>
//         </section>
        
//       </main>
//     </>
//   );
// }



'use client';

import Breadcrumb from "@/components/shared/Breadcump";
import ShopCategory from "@/components/shared/ShopCat";
import ShopFilter from "@/components/shared/ShopFilt";
import ProductCard from "@/components/sections/ProductCard";
import { Product } from "@/types/product";

type Props = {
  products?: Product[];
};

export default function ShopOne({ products = [] }: Props) {
  return (
    <main>
      <Breadcrumb
        title="Men's Caps & Hats"
        itemsCount={products.length}
        path={["Home", "Men's Caps & Hats"]}
      />

      <ShopCategory />
      <ShopFilter />

      <section className="products-wrapper mt-15">
        <div className="container mx-auto">
          {products.length === 0 ? (
            <p className="text-center py-10 text-gray-500">
              No products found
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  variant="best-ShopOne"
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
