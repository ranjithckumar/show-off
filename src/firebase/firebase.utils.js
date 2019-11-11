import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyANhnK390lH7cM1x1o94kkGng5FdUqyh0c",
  authDomain: "show-db-a125f.firebaseapp.com",
  databaseURL: "https://show-db-a125f.firebaseio.com",
  projectId: "show-db-a125f",
  storageBucket: "show-db-a125f.appspot.com",
  messagingSenderId: "181024180177",
  appId: "1:181024180177:web:bf681537c075aa9d68c2f0",
  measurementId: "G-TNEW3BQ4L8"
};

export const createUserProfileDocument= async(userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await  userRef.get();
  // console.log(snapShot);

  // it creates a new user data if the snapShot doesn't exists
  if(!snapShot.exists){
    const { displayName, email} = userAuth;
    const createdAt = new Date();
    try{
       await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData
       })
    }
    catch(error){
      console.log('error creating user', error.message);

    }
  }
    return userRef;
  // console.log(firestore.doc('user/12ffkfjjjkdjf'));
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle= () => auth.signInWithPopup(provider);

export default firebase;
