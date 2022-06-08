import React, { useEffect, useState } from 'react';

import { ReactComponent as CloseIcon } from 'assets/icons/close-icon.svg';
import Section from 'components/Section';
import { useAppSelector } from 'hooks';
import { Match } from 'models';
import * as userActions from 'redux/slices/userSlice';
import { AppDispatch } from 'redux/store';
import api from 'services/api';
import history from 'services/history';

interface UserProps {
  label: string
  dispatch: AppDispatch
  match: Match
}

export default ({ label, dispatch, match }: UserProps) => {
  const { name, avatar_url, email } = useAppSelector(({ user }) => user);
  const [ url ] = useState(`/users/${match.params.userName}`);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    api.users.getUser({
      url,
      callback: (r) => {
      dispatch(userActions.getUser(r.data));
      setIsLoading(false);
    }});
  }, []);

  return (
    <>
      <Section {...{label, isLoading}}>
      <span
        className={`${label}__close`}
        onClick={() => history.goBack()}
      ><CloseIcon/></span>
        <div className={`${label}__block`}>
          <img
            className={`${label}__avatar`}
            src={avatar_url} alt='Avatar' />
          <div className={`${label}__info`}>
            <h3>{name}</h3>
            <p className={`${label}__email`}>{ `email: ${email || 'missed'}`}</p>
          </div>
        </div>
      </Section>
    </>
  );
};
