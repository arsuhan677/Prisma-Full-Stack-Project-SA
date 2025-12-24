"use client";

import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function BestDeals({ products }: { products: any[] }) {
  return (
    <section className="w-full max-w-[1737px] mx-auto px-4 sm:px-6 lg:px-4">
      {/* Section Header */}
      <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900">
          Today&apos;s Best Deals
        </h2>
        <a
          href="#"
          className="text-xs sm:text-sm font-extrabold uppercase text-gray-500 hover:text-gray-900 inline-flex items-center gap-1 group"
        >
          See all deals
          <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition">
            ↗
          </span>
        </a>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".bestdeal-prev",
          nextEl: ".bestdeal-next",
        }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} variant="best-deals" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <button className="bestdeal-prev w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-200 hover:bg-gray-900 text-gray-900 hover:text-white transition">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button className="bestdeal-next w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-200 hover:bg-gray-900 text-gray-900 hover:text-white transition">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
