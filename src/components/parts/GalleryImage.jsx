import React from 'react';

const GalleryImage = ({ image }) => {
  return (
    <div className="w-32 rounded-md">
      <img
        src={image}
        alt="gallery"
        className="w-full h-full object-cover object-center rounded-md"
      />
    </div>
  );
}

export default GalleryImage;