import React from 'react';

interface UsersItemProps {
  avatar_url: string
  name: string
  email: string
}

export default ({ avatar_url, name, email }: UsersItemProps) => {
  const base = 'User-item';

  return (
    <li className={`${base}`}>
      <div className={` ${base}__container`}>
        <div className={`${base}__avatar`}>
          <img src={avatar_url} alt='Avatar' />
        </div>
        <div className={`${base}__desc`}>
          <p className={`${base}__name`}>{name}</p>
          <p className={`${base}__email`}>{email}</p>
        </div>
      </div>
    </li>
  );
};
