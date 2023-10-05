import React from 'react';
import { CiFilter } from 'react-icons/ci';
import { MdKeyboardArrowDown } from 'react-icons/md';
import ProductCard from './ProductCard';
import productdata from '../util/productdata';

const Shop = () => {
  return (
    <div>
      <div className="w-full">
        <img src="banner.png" alt="banner" className="w-full" />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center px-2 my-4">
          <CiFilter className="text-2xl" />
          <p>Apply Filters</p>
        </div>
        <div className="flex items-center px-2 my-4">
          <p>Add Sort: </p>
          <p> Fast Dispatch </p>
          <MdKeyboardArrowDown className="text-2xl" />
        </div>
      </div>
      <div>
        {productdata.map((product) => {
          return (
            <div key={product.id} className="grid grid-cols-1">
              <ProductCard
                image={product.image}
                title={product.title}
                size={product.size}
                sku={product.sku}
                price={product.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
