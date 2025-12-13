import BestDeals from "@/componenets/BestDeals";
import Categories from "@/componenets/Categories";
import Footer from "@/componenets/footer/Footer";
import Header from "@/componenets/header/Header";
import Hero from "@/componenets/Hero";

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
