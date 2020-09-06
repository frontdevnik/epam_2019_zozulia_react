import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { LOGIN_PAGE } from "../constants/path-constans";

export default (props) => {
  const isLoggin = useSelector((state) => state.loginReducer.isLoggin);

  return isLoggin ? <Route {...props} /> : <Redirect to={LOGIN_PAGE} />;
};
