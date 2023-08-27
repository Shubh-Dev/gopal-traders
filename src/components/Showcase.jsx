import React from 'react';

const Showcase = () => {
  return (
    <div className="relative">
      <img
        src="https://hindware.com/wp-content/uploads/2021/03/Sanitaryware_Category_Banner_1500x400-03.jpg"
        alt="showcase"
        className="block mx-auto"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-opacity-50 bg-white px-2 py-2 w-48 rounded-xl">
          <p className="text-center text-sm">
            Siliguri's No-1 Bathware Boutique
          </p>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
