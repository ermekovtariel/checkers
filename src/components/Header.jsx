import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div className='header_container'>
      <h1>CHECKERS</h1>
      <button onClick={() => document.location.reload()}>RELOAD</button>
    </div>
  );
}

export default Header;
