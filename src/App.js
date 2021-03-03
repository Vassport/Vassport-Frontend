import React, { Component, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import NavbarBottom from './components/common-components/navbar';
import HomePage from './pages/homePage/homepage.component';
import vaccineListPage from './pages/vaccineListPage/vaccineListPage.component';
import SignInPage from './pages/signInPage/signInPage.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const App = () => {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //     console.log('auth:', userAuth);
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);

  //       userRef.onSnapshot(snapShot => {
  //         console.log({
  //           user: {
  //             id: snapShot.id,
  //             ...snapShot.data(),
  //           },
  //         });
  //       });
  //     }
  //   });
  //   return () => unsubscribeFromAuth();
  // }, []);

  const publicRouter = () => (
    <>
      <Route exact path="/signin" component={SignInPage} />
      {/* added tempolarily */}
      <Route exact path="/vaccineList" component={vaccineListPage} />
      {/* <Redirect from="*" to="/signin" /> */}
    </>
  );

  const privateRouter = () => {
    <>
      <Route exact path="/" component={HomePage} />
      <Route path="/vaccineList" component={vaccineListPage} />
    </>;
  };

  return <Switch>{user ? privateRouter() : publicRouter()}</Switch>;
};

export default App;
