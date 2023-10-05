import React from 'react';
import PropTypes from 'prop-types';

const PrimaryButton = ({ buttonText, bgColor }) => {
  const buttonBgColor = bgColor || 'bg-[#505d58]';
  const buttonTextColor = bgColor ? 'text-black' : 'text-white';
  return (
    <div>
      <button
        className={`px-2 py-3 rounded-lg shadow-lg  border-y-red-600 ${buttonTextColor} ${buttonBgColor}`}
      >
        {buttonText}
      </button>
    </div>
  );
};

PrimaryButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default PrimaryButton;
