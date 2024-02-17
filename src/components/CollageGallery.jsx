// CollageGallery.js
//import React from 'react';

function CollageGallery() {
  return (
    <div className="collage-gallery">
      <h2 className="text-2xl font-bold mb-4">Collage Gallery</h2>
      <div className="grid grid-cols-3 gap-4">
        <img src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" alt="Image 1" className="w-full h-auto" />
        <img src="image2.jpg" alt="Image 2" className="w-full h-auto" />
        <img src="image3.jpg" alt="Image 3" className="w-full h-auto" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
}

export default CollageGallery;
