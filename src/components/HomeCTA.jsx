import React from 'react';
import PrimaryButton from './parts/PrimaryButton';
import PropTypes from 'prop-types';

const HomeCTA = ({ image, description, title, buttonText }) => {
  return (
    <div className="py-6 first:bg-[#cacbc1] last:bg-[#cacbc1]">
      <div>
        <img
          src={image}
          alt="kitchenware"
          className="w-9/12 rounded-xl m-auto shadow-xl shadow-slate-700 mt-3"
        />
      </div>
      <div>
        <p className="text-center mt-6 text-3xl">{title}</p>
        <p className="text-center mt-4">{description}</p>
        <div className="text-center mt-4">
          <PrimaryButton buttonText={buttonText} />
        </div>
      </div>
    </div>
  );
};

HomeCTA.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default HomeCTA;
