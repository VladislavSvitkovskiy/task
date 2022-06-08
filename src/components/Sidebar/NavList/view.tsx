import React from 'react';

interface UsersListProps {
  children: React.ReactNode
}

export default ({ children }: UsersListProps) => {
  return (
    <ul className='Nav-list'>
      {children}
    </ul>
  );
};
