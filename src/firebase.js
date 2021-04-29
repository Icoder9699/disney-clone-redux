// firebase 
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD34EfRJZwhZbVemNHMLxVc8l7hAiwp304",
    authDomain: "disneyplus-clone-redux.firebaseapp.com",
    databaseURL: "https://disneyplus-clone-redux-default-rtdb.firebaseio.com",
    projectId: "disneyplus-clone-redux",
    storageBucket: "disneyplus-clone-redux.appspot.com",
    messagingSenderId: "715140947481",
    appId: "1:715140947481:web:3c69ae012e6cc780811488",
    measurementId: "G-V67WK9HDQ3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { auth, provider, storage };

export default db;
