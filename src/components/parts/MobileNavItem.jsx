import React from 'react';
import PropTypes from 'prop-types';

const MobileNavItem = ({ name, icon }) => {
  return (
    <div className="flex items-center gap-1">
      <p className="text-black">{icon}</p>
      <p className="text-black">{name}</p>
    </div>
  );
};

MobileNavItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
export default MobileNavItem;
