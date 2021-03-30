import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC-j2RwaXeLebi9_S5-OpvrBF7FGIIHYLI",
  authDomain: "e-commerce-react-84d1e.firebaseapp.com",
  projectId: "e-commerce-react-84d1e",
  storageBucket: "e-commerce-react-84d1e.appspot.com",
  messagingSenderId: "913991540793",
  appId: "1:913991540793:web:6a13b89d52a81826f3ede8",
  measurementId: "G-39TBTME73J"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


  