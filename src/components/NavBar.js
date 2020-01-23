import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <Navlink to='/'>Home</Navlink>
      <NavLink to='/movies'>Movies</NavLink>
      <NavLink to='/directors'>Directors</NavLink>      
      <NavLink to='/actors'>Actors</NavLink>
    </div>
  );
};

export default NavBar;
