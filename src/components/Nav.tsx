import React from 'react';

const Nav = () => {
  return (
    <nav className='nav-bar'>
      <div className='nav-header'>
        <h2>TheCocktailDB</h2>
      </div>
      <div className='nav-links'>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
