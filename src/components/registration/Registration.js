import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../core/callApi';
import { Routes } from '../../constans';
import styles from './registration.module.scss';

function Registration() {
  const history = useHistory();

  let users = api('users').then(({ data }) => users = data);

  const regUser = async (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const password = document.querySelector('#password').value;
    const incorrectText = document.querySelector('#incorrect');

    if (!/.{3,}/.test(name)) {
      incorrectText.textContent = 'The name must have at least 3 characters';
      return;
    } else if (!/^[A-Z]\w{3,}$/.test(password)) {
      incorrectText.textContent = 'The password must have at least 4 characters and start with a capital letter';
      return;
    }

    if (users.some(user => user.name === name && user.password === password)) {
      incorrectText.textContent = 'User already exist';
      return;
    }

    await api('users', 'post', { name, password });
    history.push('/home');
  }

  return (
    <section className={styles.login}>
      <h1 className={styles.header}>Movies</h1>
      <form className={styles.form}>
        <h2 className={styles.formTitle}>Registration Form</h2>
        <label>
          Input your name
          <input id='name' placeholder='Input your name' />
        </label>
        <label>
          Input your password
          <input id='password' type='password' placeholder='Input your password' />
        </label>
        <p id='incorrect' className={styles.incorrect}></p>
        <button onClick={regUser}>Register</button>
        <p className={styles.register}>Don't have an account? <Link to={Routes.LOGIN}>Go to login page</Link></p>
      </form>
    </section>
  )
}

export default Registration;
