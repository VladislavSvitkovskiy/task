import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
  path: string
  title: string
  icon: ReactNode
}

export default ({ path, title, icon }: NavItemProps) => {
  const base = 'Nav-item';

  return (
  <li className={base}>
    <NavLink to={path} >
      <div>
        {icon}
      </div>
      <span>{title}</span>
    </NavLink>
  </li>
  );
};
