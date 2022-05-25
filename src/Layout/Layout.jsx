import React from 'react';
import { Header } from '../components';
import './Layout.scss';

function Layout(props) {
  const { children, whitesTurn } = props;

  return (
    <div className='layout'>
      <Header whitesTurn={whitesTurn} />
      <div className='data'>{children}</div>
    </div>
  );
}

export default Layout;
