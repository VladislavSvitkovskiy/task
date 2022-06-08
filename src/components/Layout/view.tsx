import React from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';

export interface LayoutProps {
  children: React.ReactNode;
}

export default ({ children }: LayoutProps) => {
  const base = 'Layout';

  return (
    <div className={base}>
      <Header />
      <div className={`${base}__container`}>
        <Sidebar/>
        { children }
      </div>
    </div>
  );
};
