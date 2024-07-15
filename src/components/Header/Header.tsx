import React from 'react'
import '../Header/Header.css'
import logo from '../../assets/imgs/logo-header.svg'

function Header() {
  return (
    <header>
      <div className='menu-wrapper'>
        <img src={logo} alt="" />
        <div className="search-bar">
          <input type="text" />
          <img src="" alt="" />
        </div>
        <div className="button-container"></div>
      </div>
    </header>
  );
}

export default Header