import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MobileNavItem = ({ name, icon, path, toggleMobileMenu }) => {
  return (
    <NavLink to={path}>
      <div className="flex items-center gap-1" onClick={toggleMobileMenu}>
        <p className="text-[#333] font-bold">{icon}</p>
        <p className="text-[#333]">{name}</p>
      </div>
    </NavLink>
  );
};

MobileNavItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
  toggleMobileMenu: PropTypes.func.isRequired,
};
export default MobileNavItem;
