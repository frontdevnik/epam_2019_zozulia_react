import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import api from '../../core/callApi';
import { Routes } from '../../constans';
import { allowLogin } from './actions';
import styles from './login.module.scss';

function Login(props) {
  const history = useHistory();

  if (+localStorage.getItem('isLoggin')) {
    props.allowLogin();
    history.push('/home');
  }

  const loginUser = async (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const password = document.querySelector('#password').value;

    const { data: user } = await api(`users?name=${name}&password=${password}`)
    
    if (user.length) {
      props.allowLogin();
      localStorage.setItem('isLoggin', 1);
      history.push('/home');
    } else {
      const incorrectText = document.querySelector('#incorrect');
      incorrectText.textContent = 'Username or password is invalid';
    }
  }

  return (
    <section className={styles.login}>
      <h1 className={styles.header}>Movies</h1>
      <form className={styles.form}>
        <h2 className={styles.formTitle}>Login Form</h2>
        <label>
          Input your name
          <input id='name' placeholder='Input your name' />
        </label>
        <label>
          Input your password
          <input id='password' type='password' placeholder='Input your password' />
        </label>
        <p id='incorrect' className={styles.incorrect}></p>
        <button onClick={loginUser}>Login</button>
        <p className={styles.register}>Don't have an account? <Link to={Routes.REGISTRATION}>Go to register page</Link></p>
      </form>
    </section>
  )
}

const mapDispatchToProps = ({
  allowLogin,
});

export default connect(null, mapDispatchToProps)(Login);
