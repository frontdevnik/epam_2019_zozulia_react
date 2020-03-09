import React, { createRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Routes } from '../../constans';
import styles from './registration.module.scss';

function Registration() {
  const history = useHistory();
  const nameInput = createRef();
  const passwordInput = createRef();
  const incorrectText = createRef();

  const loginUser = (e) => {
    e.preventDefault();
    const name = nameInput.current.value;
    const password = passwordInput.current.value;

    if (localStorage.getItem(name) === password) {
      incorrectText.current.textContent = 'User already exist';
      return;
    } else if (!/.{3,}/.test(name)) {
      incorrectText.current.textContent = 'The name must have at least 3 characters';
      return;
    } else if (!/^[A-Z]\w{3,}$/.test(password)) {
      incorrectText.current.textContent = 'The password must have at least 4 characters and start with a capital letter';
      return;
    }

    localStorage.setItem(name, password);
    history.push('/home');
  }


  return (
    <section className={styles.login}>
      <h1 className={styles.header}>Movies</h1>
      <form className={styles.form}>
        <h2 className={styles.formTitle}>Registration Form</h2>
        <label>
          Input your name
          <input ref={nameInput} placeholder='Input your name' />
        </label>
        <label>
          Input your password
          <input ref={passwordInput} type='password' placeholder='Input your password' />
        </label>
        <p ref={incorrectText} className={styles.incorrect}></p>
        <button onClick={loginUser}>Register</button>
        <p className={styles.register}>Don't have an account? <Link to={Routes.LOGIN}>Go to login page</Link></p>
      </form>
    </section>
  )
}

export default Registration;
