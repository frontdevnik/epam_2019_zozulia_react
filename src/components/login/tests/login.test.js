import React from "react";
import { TestLogin } from "../Login";
import styles from "../login.module.scss";

describe("<Login />", () => {
  let wrapper;

  const props = {
    login_title: "Login Form",
    login_name: "Input your name",
    login_password: "Input your password",
    login_button: "Login",
    form_noAccount: "Don't have an account?",
    form_title: "Movies",
    link_to_registration: "Go to register page",
    login_name_placeholder: "Input your name",
    login_password_placeholder: "Input your password",
    handleSubmit: jest.fn(),
    onSubmit: jest.fn(),
    errorText: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<TestLogin {...props} />);
  });

  it("should render title from props", () => {
    expect(wrapper.find("h1").text()).toEqual(props.form_title);
    expect(wrapper.find("h1").hasClass(styles.header)).toBeTruthy();
  });

  it("should render form title from props", () => {
    expect(wrapper.find("h2").text()).toEqual(props.login_title);
    expect(wrapper.find("h2").hasClass(styles.formTitle)).toBeTruthy();
  });

  it("should render label name from props", () => {
    expect(wrapper.find("label").at(0).text()).toEqual(props.login_name);
  });

  it("should render label password from props", () => {
    expect(wrapper.find("label").at(1).text()).toEqual(props.login_password);
  });

  it("should render empty incorrect paragraph", () => {
    expect(wrapper.find("#incorrect").text()).toEqual("");
  });

  it("should invoke loginUser after button click", () => {
    const button = wrapper.find("button");
    button.simulate("click");
    expect(props.handleSubmit).toBeCalledTimes(1);
  });
});
