import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaBell } from 'react-icons/fa';
import { PiMagnifyingGlassThin } from 'react-icons/pi';
import { PiNoteThin } from 'react-icons/pi';
import Overlay from './Overlay';

const Header = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  if (showOverlay) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  const toggleMobileMenu = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div className="flex justify-between items-center px-2">
      <div className="left flex items-center py-2 gap-2">
        <div className="w-9 rounded-md">
          <img src="/GT.png" alt="logo" className="object-cover rounded-md" />
        </div>
        <div>
          <RxHamburgerMenu
            className="text-2xl text-[#333]"
            onClick={toggleMobileMenu}
          />
        </div>
        <div class="relative">
          <input
            type="text"
            class="rounded-2xl border border-slate-500 px-2 w-40 pr-10   focus:ring-slate-500 focus:outline-none"
            placeholder="Search"
          />
          <div class="absolute inset-y-0 right-2 flex items-center pointer-events-none">
            <span class="text-gray-400">
              <PiMagnifyingGlassThin />
            </span>
          </div>
        </div>
      </div>

      <div className={`${showOverlay ? 'block' : 'hidden'} z-10`}>
        <Overlay toggleMobileMenu={toggleMobileMenu} />
      </div>

      <div className="flex items-center gap-2">
        <div>
          <PiNoteThin className="text-xl text-[#333]" />
        </div>
        <div>
          <FaBell className="text-xl text-[#333]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
