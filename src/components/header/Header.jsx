import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import withTranslation from '../../hocs/withTranslation';

import {
  HOME_PAGE,
  LOGIN_PAGE,
  REGISTRATION_PAGE,
} from '../../constants/path-constans';

import styles from './header.module.scss';

const Header = ({
  header_home_link,
  header_logout_link,
  header_login_link,
  header_registration_link,
  header_title,
}) => {
  const isLoggin = useSelector((state) => state.loginReducer.isLoggin);

  const logOut = () => {
    localStorage.setItem('isLoggin', 0);
    window.location.reload(true);
  };

  const changeLang = (lang) => () => {
    localStorage.setItem('selectedLanguage', lang);
    window.location.reload(true);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.langContainer}>
          <span onClick={changeLang('ukr')} className={styles.lang}>ukr </span>
          /
          <span onClick={changeLang('eng')} className={styles.lang}> eng</span>
        </div>
        {isLoggin ? <NavLink className={styles.link} to={HOME_PAGE}>{header_home_link}</NavLink> : <div />}
        {isLoggin
          ? <p onClick={logOut} className={styles.link}>{header_logout_link}</p>
          : (
            <div>
              <NavLink
                className={styles.link}
                activeClassName={styles.active}
                to={REGISTRATION_PAGE}
              >
                {header_registration_link}
              </NavLink>
              <NavLink
                className={styles.link}
                activeClassName={styles.active}
                to={LOGIN_PAGE}
              >
                {header_login_link}
              </NavLink>
            </div>
          )}
      </header>
      {isLoggin ? <h1 className={styles.title}>{header_title}</h1> : null}
    </>
  );
};

const withTranslationWords = withTranslation(['header_home_link', 'header_logout_link', 'header_login_link', 'header_registration_link', 'header_title']);

export default withTranslationWords(Header);
