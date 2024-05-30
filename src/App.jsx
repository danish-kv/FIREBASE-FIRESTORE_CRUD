import React from 'react'
import { Firebase } from './firebase/config'

const App = () => {
  return (
    <div className='App'>
            <button onClick={()=>{
              // For Create
              // Firebase.firestore().collection('products').add({ name:'MI', price:1200 })

            // For Read
              /* Firebase.firestore().collection('products').get().then(snapshot=> snapshot.forEach(( obj )=>{ 
                 console.log(obj.data()) 
               })) */

            // For Update
              // Firebase.firestore().collection('products').doc('lkoiya789683lijs').set({ name:'updated 2 times' })

            // For Delete
              //Firebase.firestore().collection('products').doc('lkoiya789683lijs').delete().then( ()=>{ console.log('DONE') } )



              Firebase.auth().createUserWithEmailAndPassword('muhammeddanishkv05@gmail.com', '1234567890')
              .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                console.log(user)
                // ...
                Firebase.firestore().collection('products').get().then(snapshot=> snapshot.forEach(( obj )=>{ 
                  console.log(obj.data()) 
                }))
              })
              .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
              });
            }} >
              click me
            </button>

    </div>
  )
}

export default App



/* 
Create user

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

*/




/* 

Sign in

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });

*/



/*
Logout 

  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });

*/