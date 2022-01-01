import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBbeBKIdkxTo_dF-zcF53yQ3a_7eEqvrJU",
    authDomain: "signal-6dae6.firebaseapp.com",
    projectId: "signal-6dae6",
    storageBucket: "signal-6dae6.appspot.com",
    messagingSenderId: "348126845363",
    appId: "1:348126845363:web:aac2aef3422ca38f9bd3c6"
  };

  let app;
  
  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
  } else {
    app = firebase.app();
  }

