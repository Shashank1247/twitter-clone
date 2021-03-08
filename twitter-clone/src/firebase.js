import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCb4AJm4HlAz_2SHsCnWbpIVT31gmlKVQk",
    authDomain: "twitter-clone-e22d1.firebaseapp.com",
    projectId: "twitter-clone-e22d1",
    storageBucket: "twitter-clone-e22d1.appspot.com",
    messagingSenderId: "75306493178",
    appId: "1:75306493178:web:ea6247ca9e25ccba019543",
    measurementId: "G-DDT7TVZBZD"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  export default db;
  