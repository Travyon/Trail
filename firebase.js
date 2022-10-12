
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCx3NKn5DcNuYEQrNWemMCdkGJqFB0q33w",
  authDomain: "trail-584d0.firebaseapp.com",
  projectId: "trail-584d0",
  storageBucket: "trail-584d0.appspot.com",
  messagingSenderId: "536372068212",
  appId: "1:536372068212:web:e7575052307810a1eab621"
};


let app;
if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else{
    app = firebase.app();
}

const auth = firebase.auth()

export { auth };

