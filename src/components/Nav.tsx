import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav-bar'>
      <div className='nav-header'>
        <h2>TheCocktailDB</h2>
      </div>
      <div className='nav-links'>
        <ul>
          <li>
            <Link style={{ textDecoration: 'none', color: '#333' }} to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none', color: '#333' }} to='/about'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
