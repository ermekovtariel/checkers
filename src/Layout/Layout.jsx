import React from 'react';
import { Header } from '../components';
import './Layout.scss';

function Layout(props) {
  const { children } = props;

  return (
    <div className='layout'>
      <Header />
      <div className='data'>{children}</div>
    </div>
  );
}

export default Layout;
