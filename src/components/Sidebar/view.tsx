import React, { useState } from 'react';

import { ReactComponent as UsersIcon } from 'assets/icons/users-icon.svg';

import NavItem from './NavItem';
import NavList from './NavList';

export default () => {
  const [ navState ] = useState([
    {
      title: 'Users',
      path: '/users',
      icon: < UsersIcon />
    }
  ]);

  const base = 'Sidebar';

  return (
    <nav className={base}>
      <NavList>
        {navState.map(({ title, path, icon }, idx) => (
          <NavItem {...{title, path, icon}}
            key={idx}
          />
        ))}
      </NavList>
    </nav>
  );
};
