import React from 'react';
import ProductCardButton from './parts/ProductCardButton';

const ProductCard = ({ image, title, size, sku, price }) => {
  return (
    <div>
      <div className="image">
        <img src={image} alt="product" />
      </div>
      <div className="body">
        <div>
          <p>{title}</p>
          <p>{size}</p>
          <p>{sku}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>{price}</p>
          <ProductCardButton buttonText="View Details" bgColor="bg-white" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
