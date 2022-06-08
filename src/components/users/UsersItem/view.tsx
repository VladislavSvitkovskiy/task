import React from 'react';
import { Link } from 'react-router-dom';

interface UsersItemProps {
  avatar_url: string
  login: string
}

export default ({ avatar_url, login }: UsersItemProps) => {
  const base = 'User-item';

  return (
    <li className={`${base}`}>
      <Link to={`/${login}`} >
        <div className={` ${base}__container`}>
          <div className={`${base}__avatar`}>
            <img src={avatar_url} alt='Avatar' />
          </div>
        </div>
      </Link>
    </li>
  );
};
