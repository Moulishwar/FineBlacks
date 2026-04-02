"use client";

import { useState } from "react";
import { productCategories } from "@/data/products";
import ProductTabs from "@/components/ProductTabs";
import ProductSection from "@/components/ProductSection";
import SectionHeader from "@/components/SectionHeader";

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState(productCategories[0].id);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Our Products"
            description="Explore our comprehensive range of Carbon Black solutions — from sustainable recycled grades to high-purity virgin carbon and ready-to-use masterbatch formulations."
            align="center"
          />
          <p className="text-center text-sm text-gray-500 mt-6">
            REACH compliant · All 8 restricted PAH compliant
          </p>
        </div>
      </section>

      {/* Tabs */}
      <ProductTabs activeId={activeTab} onTabClick={handleTabClick} />

      {/* Product sections */}
      {productCategories.map((category, index) => (
        <ProductSection
          key={category.id}
          category={category}
          index={index}
        />
      ))}
    </>
  );
}
