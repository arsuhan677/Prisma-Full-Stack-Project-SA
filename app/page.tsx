// import Header from '@/components/header/Header';
// import Footer from '@/components/footer/Footer';
// import Hero from '@/components/sections/Hero';
// import Categories from '@/components/sections/Categories';
// import BestDeals from '@/components/sections/BestDeals';
// import HeroTwo from '@/components/sections/HeroTwo';
// import JustForYou from '@/components/sections/JustForYou';
// import Newsletter from '@/components/Newsletter';
// import TrendingNow from '@/components/sections/TrendingNow';
// import ServiceHighlights from '@/components/ServiceHighlights';
// import prisma from '@/lib/prisma';
// // import RelatedProduct from '@/components/shared/RelatedProduct';

// export default async function Home() {
//   const products = await prisma.product.findMany();
//   // const categories = await prisma.category.findMany();
//   return (
//     <>
//       <Header />

//       <main>
//         <Hero />

//         <div className="space-y-[50px] md:space-y-[80px] lg:space-y-[120px] mt-[50px] md:mt-[80px] lg:mt-[120px]">
//           <Categories />
//           <BestDeals products={products} />
//         </div>

//         <div className="mt-[50px] md:mt-[80px] lg:mt-[120px]">
//           <HeroTwo />
//         </div>

//         <div className="space-y-[50px] md:space-y-[80px] lg:space-y-[120px] mt-[50px] md:mt-[80px] lg:mt-[120px]">
//           <JustForYou products={products} />
//           <Newsletter />
//           <TrendingNow products={products} />
//           {/* <RelatedProduct /> */}
//           <ServiceHighlights />
//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// }


import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/sections/Hero';
import Categories from '@/components/sections/Categories';
import BestDeals from '@/components/sections/BestDeals';
import HeroTwo from '@/components/sections/HeroTwo';
import JustForYou from '@/components/sections/JustForYou';
import Newsletter from '@/components/Newsletter';
import TrendingNow from '@/components/sections/TrendingNow';
import ServiceHighlights from '@/components/ServiceHighlights';

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <Header />

      <main>
        <Hero />

        <div className="space-y-[50px] md:space-y-[80px] lg:space-y-[120px] mt-[50px] md:mt-[80px] lg:mt-[120px]">
          <Categories />
          <BestDeals products={products} />
        </div>

        <div className="mt-[50px] md:mt-[80px] lg:mt-[120px]">
          <HeroTwo />
        </div>

        <div className="space-y-[50px] md:space-y-[80px] lg:space-y-[120px] mt-[50px] md:mt-[80px] lg:mt-[120px]">
          <JustForYou products={products} />
          <Newsletter />
          <TrendingNow products={products} />
          <ServiceHighlights />
        </div>
      </main>

      <Footer />
    </>
  );
}

