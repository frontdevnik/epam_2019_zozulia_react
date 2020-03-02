import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Routes } from '../../constans';
import { connect } from 'react-redux';
import styles from './header.module.scss';

function Header(props) {
  let homeLink = <div></div>;
  let loginLink;

  if (props.isLoggin) {
    homeLink = (
      <div>
        <NavLink className={styles.link} to={Routes.HOMEPAGE}>Home</NavLink>
      </div>
    );
    loginLink = (
      <p onClick={() => window.location.reload(true)} className={styles.link}>Log out</p>
    );
  } else {
    loginLink = (
      <div>
        <NavLink className={styles.link} activeClassName={styles.active} to={Routes.REGISTRATION}>Registration</NavLink>
        <NavLink className={styles.link} activeClassName={styles.active} to={Routes.LOGIN}>Login</NavLink>
      </div>
    );
  }
  return (
    <>
      <header className={styles.header}>
        {homeLink}
        {loginLink}
      </header>
      {props.isLoggin ? <h1 className={styles.title} >Movies</h1> : null}
    </>
  )
}

Header.propTypes = {
  isLoggin: PropTypes.bool,
};

const mapStateToProps = state => ({
  isLoggin: state.loginReducer.isLoggin,
});

export default connect(mapStateToProps)(Header);
