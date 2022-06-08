import React, { useState, useEffect } from 'react';

import Section from 'components/Section';
import UsersItem from 'components/users/UsersItem';
import UsersList from 'components/users/UsersList';
import { useAppSelector } from 'hooks';
import { UserInstance } from 'models';
import * as usersActions from 'redux/slices/usersSlice';
import { AppDispatch } from 'redux/store';
import api from 'services/api';

interface UsersPageProps {
  dispatch: AppDispatch
  label: string
}

export default ({ dispatch, label }: UsersPageProps) => {
  const [ url ] = useState('/users');
  const [ isLoading, setIsLoading ] = useState(true);
  const users = useAppSelector(({users}) => users);

  useEffect(() => {
    api.users.getUsersList({
      url,
      params: {
        per_page: 10
      },
    callback: (r) => {
      dispatch(usersActions.getUsersList(r.data));
      setIsLoading(false);
    }
  });
  }, []);

  return (
    <Section {...{label, isLoading}}>
      <UsersList>
        {users.map((user: UserInstance) => {
          return (<UsersItem {...user} key={user.id} />);
        })}
      </UsersList>
    </Section>
  );
};

