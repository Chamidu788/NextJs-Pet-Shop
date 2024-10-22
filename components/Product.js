import React from 'react';

const Product = ({ title, image, description }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md h-64"> 
      <img src={image} alt={title} className="w-full h-32 object-cover" /> 
      <div className="p-4"> 
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Product;
