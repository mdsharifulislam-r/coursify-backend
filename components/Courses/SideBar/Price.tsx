"use client";

import { useState } from "react";

export default function Price() {
  const [price, setPrice] = useState(0);


  const handleChange = (e: any) => {
    setPrice(parseInt(e.target.value));
  };
  return (
    <div className="pb-4 relative">
      <h1 className="title text-2xl font-semibold">Price</h1>
      <span className="absolute right-0 top-1">${price}</span>
      <div className="flex flex-col gap-3 py-3 border-b">
        <input
          type="range"
          min={0}
          name="price"
          max="1000"
          value={price}
          onChange={handleChange}
          className="range range-accent"
        />
      </div>
    </div>
  );
}
