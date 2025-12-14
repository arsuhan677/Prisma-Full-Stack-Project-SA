import BestDeals from "@/components/BestDeals";
import Categories from "@/components/Categories";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <BestDeals />
      <Footer />

    </div>
  );
}
