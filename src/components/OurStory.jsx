import React from 'react';
import GalleryImage from './parts/GalleryImage';

const OurStory = () => {
  return (
    <div className="container text-center pt-12 px-2 mx-auto flex flex-col items-center text-gray-500">
      <p className="text-3xl text-[#969f95] font-semibold pb-4">
        Our Plumbing Story
      </p>
      <p className="text-md font-semibold pb-4">Proudly born in Siliguri.</p>
      <p className="max-w-3xl">
        Gopal Traders is a Siliguri based Bathware dealer. We are committed to
        source only the best and most competitive priced products from the most
        trusted manufacturers. We provide a wide range of products to suit all
        budgets and styles for bathrooms and kitchens. We have a large selection
        of products on display in our showroom and we are constantly updating
        our range to keep up with the latest trends and styles. We are a family
        run business and we pride ourselves on our friendly and professional
        service. We are always available to offer advice and guidance on all
        aspects of your bathroom and kitchen requirements. We are also happy to
        work with your own plumber or builder.
      </p>
      <div className="max-w-5xl border-b-2 border-gray-300 w-full my-4"></div>
      <p className="text-3xl text-[#969f95] font-semibold pb-4">Our Mission</p>
      <p className="text-md font-semibold">
        To provide the best quality products at the most competitive prices.
      </p>
      <div className="max-w-5xl border-b-2 border-gray-300 w-full my-4"></div>

      <p className="text-3xl text-[#969f95] font-semibold pb-4">Our Vision</p>
      <p className="text-md font-semibold ">
        To be the best bathroom and kitchen supplier in Siliguri.
      </p>
      

      <div className="max-w-5xl border-b-2 border-gray-300 w-full my-6"></div>

      <p className="text-3xl text-[#969f95] font-semibold pb-4">Our Values</p>
      <p className="text-md font-semibold">
        We are a family run business and we pride ourselves on our friendly and
        professional service. We are always available to offer advice and
        guidance on all aspects of your bathroom and kitchen requirements. We
        are also happy to work with your own plumber or builder.
      </p>
      <div className="max-w-5xl border-b-2 border-gray-300 w-full my-6"></div>
      <p className="text-3xl text-[#969f95] font-semibold pb-4">Image Gallery</p>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <GalleryImage image="/toilet-2.jpg" />
        <GalleryImage image="/tub1.png" />
        <GalleryImage image="/toilet-2.jpg" />
        <GalleryImage image="/tub1.png" />
        <GalleryImage image="/toilet-2.jpg" />
        <GalleryImage image="/tub1.png" />
        <GalleryImage image="/toilet-2.jpg" />
        <GalleryImage image="/tub1.png" />
        <GalleryImage image="/toilet-2.jpg" />
        <GalleryImage image="/tub1.png" />
      </div>
    </div>
  );
};

export default OurStory;
