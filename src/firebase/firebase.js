import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDxWA7sQEAzZAmZp-lPFEYy8AfWr7PQTVQ",
    authDomain: "react-completeapp.firebaseapp.com",
    databaseURL: "https://react-completeapp-default-rtdb.firebaseio.com",
    projectId: "react-completeapp",
    storageBucket: "react-completeapp.appspot.com",
    messagingSenderId: "357742059439",
    appId: "1:357742059439:web:244451d2b63f4fef15595a",
    measurementId: "G-3CZSLQVGD8"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase, googleAuthProvider, database as default};
  
//   database.ref().set({
//     name: 'Christian Bawman',
//     age: 28,
//     isSingle: false,
//     location:{
//         city:'Obregon',
//         country: 'Mexico'
//     }

//   }).then(() => {
//     console.log('data has been saved');
//   }).catch((e) => {
//     console.log('an error has ocurred', e);
//   });

