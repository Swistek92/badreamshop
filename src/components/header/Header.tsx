/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './Header.scss';
import { useNavigate, matchRoutes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
  let navigate = useNavigate();

  const location = useLocation();

  const isHomePage =
    location.pathname === '/' || location.pathname === '/badreamshop/';
  // checked work correctly

  return (
    <nav className='navbar navbar-expand-lg navbar-light sticky-top '>
      <div className='container-fluid'>
        <a
          className='navbar-brand'
          onClick={() => {
            navigate('/');
          }}
        >
          BaDreamShop
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a
                className='nav-link active'
                aria-current='page'
                onClick={() => {
                  navigate('/');
                }}
              >
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                onClick={() => {
                  navigate('/about');
                }}
              >
                About
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                onClick={() => {
                  navigate('/profile');
                }}
              >
                Profile
              </a>
            </li>
          </ul>
          {/* <form className='d-flex'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-danger' type='submit'>
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
