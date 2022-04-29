import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  return (
    <div className='container'>
      <div className='navbar'>
        <div>
          <p className='navbar__text'>
            Products by Offiza
          </p>
        </div>
        <div>
          <ul className='navbar__list'>
            <li className='navbar__list-item'>
              <Link to='/home' className='navbar__text'>
                <p style={{ marginRight: '1em' }}>
                  Home
                </p>
              </Link>
            </li>
            <li className='navbar__list-item'>
              <Link to='/products' className='navbar__text'>
                <p>
                  Products
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}