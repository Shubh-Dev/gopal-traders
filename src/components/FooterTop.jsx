import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from './parts/PrimaryButton';

const FooterTop = () => {
    return (
      <div className="w-full py-10 text-center bg-[#505d58]">
        <p className="text-3xl text-white">Lets Stay Connected</p>
        <div className="flex justify-center items-center gap-4 mt-8">
          <input
            type="text"
            placeholder="Enter Email"
            className="rounded-lg border-2 pl-4 w-2/6 border-white-600 h-11 bg-transparent placeholder:text-white placeholder:text-xl focus:outline-none"
          />
          <PrimaryButton buttonText="Subscribe" bgColor="bg-[#feeb6d]" />
        </div>
      </div>
    );
};

export default FooterTop;
