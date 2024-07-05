import React, { useState } from "react";
import { categories } from "../../utils/data";

const Category = () => {
  const [data, setData] = useState(categories);
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <p className="text-orange-600 text-4xl font-bold text-center py-12">
        Top Rated Menu Items
      </p>
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3  gap-4 py-6">
        {data.map((item) => 
          <div key={item.id} className="bg-gray-200  flex justify-between items-center px-4">
            <p className="font-bold text-2xl">{item.name}</p>
            <img src={item.image} alt={item.image} 
            className="w-[100px]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
