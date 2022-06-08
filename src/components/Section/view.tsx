import React, { ReactNode, useMemo, useState } from 'react';

import Loader from '../Loader';

interface SectionProps {
  label: string
  children: ReactNode
  isLoading?: boolean
}

export default ({label, isLoading, children}: SectionProps) => {
  const [isLocalLoading, setIsLocalLoading] = useState(true);

  useMemo(() => setTimeout(() => setIsLocalLoading(false), 1000), [isLoading === false]);

  return (
    <>
      { isLocalLoading
        ? <Loader {...{ isLoading }}/>
        : null
      }
      <section className={`${label}__section ${!isLoading ? 'loaded' : ''}`}>
        <h2 className='visually-hidden'>{`${label} page`}</h2>
        {children}
      </section>
    </>
  );
};
