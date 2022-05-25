import React from 'react';
import './Header.scss';

function Header({ whitesTurn }) {
  return (
    <div className='header_container'>
      <h1>CHECKERS</h1>
      <h2>{whitesTurn && 'Your Turn'}</h2>
      <button onClick={() => document.location.reload()}>RELOAD</button>
    </div>
  );
}

export default Header;
