import React from 'react';

interface UsersListProps {
  children: React.ReactNode
}

export default ({ children }: UsersListProps) => {
  const base = 'Users-list';

  return (
    <div className={base}
    >
      <h3 className='visually-hidden'>Users list</h3>
      <div className={`${base}__sorting`}></div>
      <ul>{children}</ul>
    </div>
  );
};
