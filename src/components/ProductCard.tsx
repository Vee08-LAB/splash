'use client';

import { useState } from 'react';
import { Product } from '@prisma/client';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[3/4] mb-4 bg-gray-100 flex items-center justify-center">
        <span className="text-gray-400">Image</span>
      </div>
      
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium text-lg">{product.name}</h3>
        {/* Convert Prisma Decimal to String safely for rendering */}
        <p className="font-bold">${Number(product.price).toFixed(2)}</p>
      </div>

      <div className="flex text-yellow-500 text-sm mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>{i < Math.round(product.rating) ? "★" : "☆"}</span>
        ))}
      </div>

      <div className="flex space-x-2 mt-auto">
        <button 
          className="flex-1 bg-black text-white py-2 text-sm hover:bg-gray-800 transition"
          onClick={() => alert(`Proceeding to checkout for ${product.name}`)}
        >
          Buy Now
        </button>
        <button 
          onClick={handleAddToCart}
          disabled={isAdding}
          className="flex-1 border border-black py-2 text-sm hover:bg-gray-100 transition disabled:opacity-50"
        >
          {isAdding ? 'Adding...' : 'Add to cart'}
        </button>
      </div>
    </div>
  );
}