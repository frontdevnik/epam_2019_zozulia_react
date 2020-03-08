import React, { createRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import withTranslation from '../../hocs/withTranslation';
import api from '../../core/callApi';
import { Routes } from '../../constans';
import { allowLogin } from './actions';
import styles from './login.module.scss';

function Login(props) {
  const history = useHistory();
  const { allowLogin, login_title, login_name, login_password, login_button, form_noAccount, form_title, link_to_registration, login_name_placeholder, login_password_placeholder } = props;
  const inputName = createRef();
  const inputPassword = createRef();

  if (+localStorage.getItem('isLoggin')) {
    allowLogin();
    history.push('/home');
  }

  const loginUser = async (e) => {
    e.preventDefault();
    const name = inputName.current.value;
    const password = inputPassword.current.value;

    const { data: user } = await api(`users?name=${name}&password=${password}`);

    if (user.length) {
      allowLogin();
      localStorage.setItem('isLoggin', 1);
      history.push('/home');
    } else {
      const incorrectText = document.querySelector('#incorrect');
      incorrectText.textContent = 'Username or password is invalid';
    }
  };

  return (
    <section className={styles.login}>
      <h1 className={styles.header}>{form_title}</h1>
      <form className={styles.form}>
        <h2 className={styles.formTitle}>{login_title}</h2>
        <label>
          {login_name}
          <input ref={inputName} placeholder={login_name_placeholder} />
        </label>
        <label>
          {login_password}
          <input ref={inputPassword} type='password' placeholder={login_password_placeholder} />
        </label>
        <p id='incorrect' className={styles.incorrect}></p>
        <button onClick={loginUser}>{login_button}</button>
        <p className={styles.register}>
          {form_noAccount}
          <Link to={Routes.REGISTRATION}> {link_to_registration}</Link>
        </p>
      </form>
    </section>
  );
}

Login.propTypes = {
  allowLogin: PropTypes.func,
};

const mapDispatchToProps = ({
  allowLogin,
});

const withConnect = connect(null, mapDispatchToProps);
const withTranslationWorlds = withTranslation(['login_title', 'login_name', 'login_password', 'login_button', 'form_noAccount', 'form_title', 'link_to_registration', 'login_name_placeholder', 'login_password_placeholder']);

export default withTranslationWorlds(withConnect(Login));
