'use client';

import { useState } from 'react';
import ProductCard from '@/components/sections/ProductCard';
import { Category, Product } from '@/app/generated/prisma/client';
// import { Product } from '@/types/product';
// import {} from ''

export default function JustForYou(
    { products }: { products: Product[];}
) {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'New Arrivals', 'Best Sellers', 'Featured'];

    return (
        <section className="w-full max-w-[1737px] mx-auto px-4 sm:px-6 lg:px-4">
            {/* Section Header */}
            <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                    Just For You
                </h2>
                <a
                    href="#"
                    className="text-xs sm:text-sm font-extrabold tracking-wide uppercase text-gray-500 hover:text-gray-900 transition-colors duration-200 inline-flex items-center gap-1.5 group"
                >
                    See all product
                    <span
                        aria-hidden="true"
                        className="text-sm transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                    >
                        ↗
                    </span>
                </a>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12">
                {categories.length > 0 && categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 ${activeCategory === category
                            ? 'bg-gray-900 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-2">
                {products.map((product: any) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* See All Button */}
            <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 flex items-center justify-center">
                <button className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white text-sm sm:text-base font-semibold px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 shadow-md hover:shadow-lg transition-all duration-200 uppercase tracking-wide cursor-pointer">
                    SEE ALL PRODUCT
                </button>
            </div>
        </section>
    );
}
