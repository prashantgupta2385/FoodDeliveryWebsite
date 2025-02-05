import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div
      className="relative w-full h-[60vh] md:h-[80vh] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.header_img})` }} // Use inline styles
    >
      <div className="absolute flex flex-col items-start gap-6 max-w-[90%] md:max-w-[50%] bottom-[10%] left-[5%] animate-fadeIn">
        <h2 className="text-white font-medium text-[max(5vw,24px)]">
          Order Your Favourite Food Here
        </h2>
        <p className="text-white text-[max(2vw,16px)] md:text-[1.2vw]">
          Choose from a diverse menu featuring a delectable array of dishes crafted with the best ingredients.
        </p>
        <button className="border-none text-[#747474] font-medium px-6 py-3 bg-white text-[max(1.2vw,14px)] rounded-full hover:bg-gray-200 transition">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
