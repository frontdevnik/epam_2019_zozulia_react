import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field, Form } from "redux-form";
import withTranslation from "../../hocs/withTranslation";

import { LOGIN_PAGE } from "../../constants/path-constans";

import styles from "./registration.module.scss";

const Registration = ({
  registration_title,
  registration_name,
  registration_password,
  registration_button,
  form_noAccount,
  form_title,
  link_to_login,
  registration_name_placeholder,
  registration_password_placeholder,
  handleSubmit,
  onSubmit,
  errorText,
}) => (
  <section className={styles.login}>
    <h1 className={styles.header}>{form_title}</h1>
    <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.formTitle}>{registration_title}</h2>
      <label>
        {registration_name}
        <Field
          name="name"
          component="input"
          placeholder={registration_name_placeholder}
        />
      </label>
      <label>
        {registration_password}
        <Field
          name="password"
          component="input"
          type="password"
          placeholder={registration_password_placeholder}
        />
      </label>
      <p className={styles.incorrect}>{errorText}</p>
      <button>{registration_button}</button>
      <p className={styles.register}>
        {form_noAccount}
        <Link to={LOGIN_PAGE}> {link_to_login}</Link>
      </p>
    </Form>
  </section>
);

const withForm = reduxForm({ form: "Registration" });
const withTranslationWorlds = withTranslation([
  "registration_title",
  "registration_name",
  "registration_password",
  "registration_button",
  "form_noAccount",
  "form_title",
  "link_to_login",
  "registration_name_placeholder",
  "registration_password_placeholder",
]);

export default withTranslationWorlds(withForm(Registration));
