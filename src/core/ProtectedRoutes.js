import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { Routes } from '../constans';

function ProtectedRoute(props) {
  return props.isLoggin ? <Route {...props}/> : <Redirect to={Routes.LOGIN}/>
};

const mapStateToProps = (state) => ({
  isLoggin: state.loginReducer.isLoggin
});

export default connect(mapStateToProps)(ProtectedRoute);
