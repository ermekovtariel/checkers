import React from 'react';

function Auth({ setUser }) {
  function onClick() {
    localStorage.setItem('user', JSON.stringify(true));
    setUser(true);
  }
  return <div onClick={onClick}>Start</div>;
}

export default Auth;
