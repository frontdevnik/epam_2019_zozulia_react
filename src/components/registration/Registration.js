import React, { createRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import withTranslation from '../../hocs/withTranslation';
import api from '../../core/callApi';
import { Routes } from '../../constans';
import styles from './registration.module.scss';

function Registration(props) {
  const history = useHistory();
  const { registration_title, registration_name, registration_password, registration_button, form_noAccount, form_title, link_to_login, registration_name_placeholder, registration_password_placeholder } = props;
  const nameInput = createRef();
  const passwordInput = createRef();
  const incorrectText = createRef();

  let users = api('users').then(({ data }) => users = data);

  const regUser = async (e) => {
    e.preventDefault();
    const name = nameInput.current.value;
    const password = passwordInput.current.value;

    if (!/.{3,}/.test(name)) {
      incorrectText.current.textContent = 'The name must have at least 3 characters';
      return;
    }

    if (!/^[A-Z]\w{3,}$/.test(password)) {
      incorrectText.current.textContent = 'The password must have at least 4 characters and start with a capital letter';
      return;
    }

    if (Array.isArray(users) && users.some(user => user.name === name && user.password === password)) {
      incorrectText.current.textContent = 'User already exist';
      return;
    }

    await api('users', 'post', { name, password });
    history.push('/home');
  }

  return (
    <section className={styles.login}>
      <h1 className={styles.header}>{form_title}</h1>
      <form className={styles.form}>
        <h2 className={styles.formTitle}>{registration_title}</h2>
        <label>
          {registration_name}
          <input ref={nameInput} placeholder={registration_name_placeholder} />
        </label>
        <label>
          {registration_password}
          <input ref={passwordInput} type='password' placeholder={registration_password_placeholder} />
        </label>
        <p ref={incorrectText} className={styles.incorrect}></p>
        <button onClick={regUser}>{registration_button}</button>
        <p className={styles.register}>
          {form_noAccount}
          <Link to={Routes.LOGIN}> {link_to_login}</Link></p>
      </form>
    </section>
  )
}

const withTranslationWorlds = withTranslation(['registration_title', 'registration_name', 'registration_password', 'registration_button', 'form_noAccount', 'form_title', 'link_to_login', 'registration_name_placeholder', 'registration_password_placeholder']);

export default withTranslationWorlds(Registration);
