"use client";

import { productCategories } from "@/data/products";

interface ProductTabsProps {
  activeId: string;
  onTabClick: (id: string) => void;
}

export default function ProductTabs({ activeId, onTabClick }: ProductTabsProps) {
  return (
    <div className="sticky top-24 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
          {productCategories.map((category) => {
            const isActive = activeId === category.id;
            return (
              <button
                key={category.id}
                onClick={() => onTabClick(category.id)}
                className={`whitespace-nowrap px-6 py-2.5 text-sm rounded-button transition-colors duration-300 ${
                  isActive
                    ? "bg-carbon text-white"
                    : "text-gray-500 hover:bg-gray-100 hover:text-carbon"
                }`}
              >
                {category.shortTitle}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
