import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/home";
import LoginPage from "../pages/login";
import RegistrationPage from "../pages/registration";
import Movie from "../pages/movie";
import EditMovie from "../pages/editMovie";
import ActorPage from "../pages/actor";
import NotFoundPage from "../pages/notFoundPage";

import ProtectedRoutes from "./ProtectedRoutes";

import {
  HOME_PAGE,
  ACTOR_PAGE,
  LOGIN_PAGE,
  MOVIE_PAGE,
  REGISTRATION_PAGE,
  START_PAGE,
} from "../constants/path-constans";

export default () => (
  <Switch>
    <ProtectedRoutes path={HOME_PAGE} component={Home} />
    <ProtectedRoutes exact path={`${MOVIE_PAGE}/:id`} component={Movie} />
    <ProtectedRoutes path={`${MOVIE_PAGE}/:id/edit`} component={EditMovie} />
    <ProtectedRoutes path={`${ACTOR_PAGE}/:id`} component={ActorPage} />
    <Route exact path={LOGIN_PAGE} component={LoginPage} />
    <Route exact path={REGISTRATION_PAGE} component={RegistrationPage} />
    <Route exact path={START_PAGE} component={LoginPage} />
    <Route component={NotFoundPage} />
  </Switch>
);
