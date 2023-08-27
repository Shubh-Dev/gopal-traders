import React from 'react';
import PropTypes from 'prop-types';

const MobileNavItem = ({ name, icon }) => {
  return (
    <div className="flex items-center gap-1">
      <p className="text-[#333] font-bold">{icon}</p>
      <p className="text-[#333]">{name}</p>
    </div>
  );
};

MobileNavItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
export default MobileNavItem;
