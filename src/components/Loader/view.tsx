import React from 'react';
import { createPortal } from 'react-dom';

import classNames from 'classnames';
import BeatLoader from 'react-spinners/BeatLoader';

const loader = document.getElementById('loader');

interface LoaderProps {
  isLoading?: boolean
}

export default ({ isLoading }: LoaderProps) => {
  const base = 'Loader';

  return createPortal(
    <div className={classNames(base, isLoading ? 'active' : '')}>
        <BeatLoader loading={isLoading} color={'#2C79CE'}/>
    </div>,
  loader!
  );
};
