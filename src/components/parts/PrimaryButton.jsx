import React from 'react';
import PropTypes from 'prop-types';

const PrimaryButton = ({ buttonText }) => {
  return (
    <div>
      <button className="bg-[#505d58] text-white px-2 py-1 rounded-sm  shadow-lg">{buttonText}</button>
    </div>
  );
};

PrimaryButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default PrimaryButton;
