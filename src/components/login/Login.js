import React from "react";
import { Link } from "react-router-dom";
import { Form, Field, reduxForm } from "redux-form";
import withTranslation from "../../hocs/withTranslation";

import { REGISTRATION_PAGE } from "../../constants/path-constans";

import styles from "./login.module.scss";

const Login = ({
  login_title,
  login_name,
  login_password,
  login_button,
  form_noAccount,
  form_title,
  link_to_registration,
  login_name_placeholder,
  login_password_placeholder,
  handleSubmit,
  onSubmit,
  errorText,
}) => (
  <section className={styles.login}>
    <h1 className={styles.header}>{form_title}</h1>
    <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.formTitle}>{login_title}</h2>
      <label>
        {login_name}
        <Field
          name="name"
          component="input"
          placeholder={login_name_placeholder}
        />
      </label>
      <label>
        {login_password}
        <Field
          name="password"
          component="input"
          type="password"
          placeholder={login_password_placeholder}
        />
      </label>
      <p id="incorrect" className={styles.incorrect}>
        {errorText}
      </p>
      <button>{login_button}</button>
      <p className={styles.register}>
        {form_noAccount}
        <Link to={REGISTRATION_PAGE}> {link_to_registration}</Link>
      </p>
    </Form>
  </section>
);

const withForm = reduxForm({ form: "Login" });
const withTranslationWorlds = withTranslation([
  "login_title",
  "login_name",
  "login_password",
  "login_button",
  "form_noAccount",
  "form_title",
  "link_to_registration",
  "login_name_placeholder",
  "login_password_placeholder",
]);

export default withTranslationWorlds(withForm(Login));
