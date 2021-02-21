import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from '../lib/firebase';

const authContext = createContext({} as any);

export function AuthProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState<any>();

  const signinWithGithub = async () => {
    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider());
    setCurrentUser(response.user);
    return response.user;
  };

  const signout = async () => {
    await firebase.auth().signOut();
    setCurrentUser(null);
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signinWithGithub,
    signout,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};
