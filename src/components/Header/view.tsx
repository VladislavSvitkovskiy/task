import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/images/logo.png';

export default () => {
  const base = 'main-header';
  return (
    <header className={base}>
      <h1 className='visually-hidden'>Test</h1>
      <div className={`${base}__block`}>
        <Link
          className={`${base}__logo-link`}
          to='/'
        >
          <img src={logo} alt='logo'/>
        </Link>
      </div>
    </header>
  );
};
