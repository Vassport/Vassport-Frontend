import React, { Component, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import NavbarBottom from './components/common-components/navbar';
import HomePage from './pages/homePage/homepage.component';
import vaccineListPage from './pages/vaccineListPage/vaccineListPage.component';
import SignInPage from './pages/signInPage/signInPage.component';
import SignUpPage from './pages/signUpPage/signUpPage.component';
import AddProfilePage from './pages/addProfilePage/addProfilePage.component';
import DetailPage from './pages/detailPage/detailPage.component';
import AccessLogListPage from './pages/accessLogListPage/accessLogListPage.component';
import ProfilesPage from './pages/profilesPage/profilesPage.component';

import { checkLogin } from './common/user.reducer';
import { auth } from './firebase/firebase.utils';

const App = () => {
  const history = useHistory();
  const { user, isProfile } = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLogin());
  }, [dispatch]);

  // auth.signOut();
  console.log('user:', user, isProfile);

  return (
    <Switch>
      <Route exact path="/signin" render={() => (user ? <Redirect to="/" /> : <SignInPage />)} />
      <Route
        exact
        path="/signup"
        render={() => (user ? <Redirect to="/addprofile" /> : <SignUpPage />)}
      />
      <Route exact path="/vaccineList" component={vaccineListPage} />
      <Route path="/detail/:index" component={DetailPage} />
      <Route exact path="/accessLog" component={AccessLogListPage} />
      <Route exact path="/addprofile" component={AddProfilePage} />
      <Route exact path="/profiles" component={ProfilesPage} />
      <Route exact path="/" render={() => (user ? <Redirect to="/profiles" /> : <SignUpPage />)} />
    </Switch>
  );
};

export default App;
