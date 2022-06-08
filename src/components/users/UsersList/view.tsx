import React from 'react';

interface UsersListProps {
  children: React.ReactNode
}

export default ({ children }: UsersListProps) => {
  const base = 'Users-list';

  return (
    <ul className={base}>
      {children}
    </ul>
  );
};
