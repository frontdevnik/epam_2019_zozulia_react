import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Login from '../../components/login/Login';
import Header from '../../components/header';

import { allowLogin } from '../../features/login/actions';
import { fetchLoginUser } from '../../helpers/fetch-login-api';

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [validationError, setValidationError] = useState('');

  if (+localStorage.getItem('isLoggin')) {
    dispatch(allowLogin());
    history.push('/home');
  }

  const onSubmit = async ({ name, password }) => {
    const user = await fetchLoginUser(name, password);

    if (user.length) {
      dispatch(allowLogin());
      localStorage.setItem('isLoggin', 1);
      history.push('/home');
    } else {
      setValidationError('Username or password is invalid');
    }
  };

  return (
    <>
      <Header />
      <Login onSubmit={onSubmit} errorText={validationError} />
    </>
  );
};
