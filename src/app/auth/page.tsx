'use client';

import firebase from "firebase/compat/app";
import firebaseui from "firebaseui";

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

ui.start('#firebaseui-auth-container', uiConfig);

export default function Page() {
  return (
    <div className="auth">
      <div id="firebaseui-auth-container"></div>
    </div>
  )
}