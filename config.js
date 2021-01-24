import firebase from 'firebase';
require('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAhwzEPMw7JZXMU0PgX4FuQrgHNBub8XeQ",
    authDomain: "book-santa-229bd.firebaseapp.com",
    databaseURL: "https://book-santa-229bd.firebaseio.com",
    projectId: "book-santa-229bd",
    storageBucket: "book-santa-229bd.appspot.com",
    messagingSenderId: "212772446897",
    appId: "1:212772446897:web:42d993c017ad13c23bb890"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();