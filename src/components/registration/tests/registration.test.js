import React from "react";
import { shallow } from "enzyme";
import {TestRegistration} from "../Registration";
import styles from "../registration.module.scss";

describe("<Registration />", () => {
  let wrapper;

  const props = {
    regUser: jest.fn(),
    registration_title: "Registration Form",
    registration_name: "Input your name",
    registration_password: "Input your password",
    registration_button: "Register",
    form_noAccount: "Don't have an account?",
    form_title: "Movies",
    link_to_login: "Go to login page",
    registration_name_placeholder: "Input your name",
    registration_password_placeholder: "Input your password",
    handleSubmit: jest.fn(),
    onSubmit: jest.fn(),
    errorText: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<TestRegistration {...props} />);
  });

  it("should render title from props", () => {
    expect(wrapper.find("h1").text()).toEqual(props.form_title);
    expect(wrapper.find("h1").hasClass(styles.header)).toBeTruthy();
  });

  it("should render form title from props", () => {
    expect(wrapper.find("h2").text()).toEqual(props.registration_title);
    expect(wrapper.find("h2").hasClass(styles.formTitle)).toBeTruthy();
  });

  it("should render label name from props", () => {
    expect(wrapper.find("label").at(0).text()).toEqual(props.registration_name);
  });

  it("should render label password from props", () => {
    expect(wrapper.find("label").at(1).text()).toEqual(
      props.registration_password
    );
  });

  it("should render empty incorrect paragraph", () => {
    expect(wrapper.find("p").at(0).text()).toEqual("");
  });

  it("should invoke regUser after button click", () => {
    const button = wrapper.find("button");
    button.simulate("click");
    expect(props.handleSubmit).toBeCalled();
  });
});
