import React, { useState, useEffect } from 'react';

import Section from 'components/Section';
import UsersItem from 'components/users/UsersItem';
import UsersList from 'components/users/UsersList';
import { useAppSelector } from 'hooks';
import { UserInstance } from 'models';
import * as usersActions from 'redux/slices/usersSlice';
import { AppDispatch } from 'redux/store';
import api from 'services/api';

interface DoctorsPageProps {
  dispatch: AppDispatch
  label: string
}

export default ({ dispatch, label }: DoctorsPageProps) => {
  const [ url ] = useState('/users');
  const [ isLoading, setIsLoading ] = useState(true);
  const users = useAppSelector((users) => users);

  useEffect(() => {
    api.users.getUsersList(url, {
      per_page: 10
    }, (r) => {
      dispatch(usersActions.getUsersList(r.data));
      setIsLoading(false);
    });
  }, []);

  return (
    <Section {...{label, isLoading}}>
      <UsersList>
        {users.content?.map((user: UserInstance) => {
          return (<UsersItem {...user} key={user.id} />);
        })}
      </UsersList>
    </Section>
  );
};

