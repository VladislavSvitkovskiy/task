import React from 'react';

import Header from '../Header';

export interface LayoutProps {
  children: React.ReactNode;
}

export default ({ children }: LayoutProps) => {
  const base = 'Layout';

  return (
    <div className={base}>
      <Header />
      <div className={`${base}__container`}>
        { children }
      </div>
    </div>
  );
};
