import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAfreKBmW3aerL4P8hGH77NIFMHPFBbC8Y",
    authDomain: "crown-db-fb9da.firebaseapp.com",
    projectId: "crown-db-fb9da",
    storageBucket: "crown-db-fb9da.appspot.com",
    messagingSenderId: "525614778925",
    appId: "1:525614778925:web:8cb6380a7dc222c9aac6a4",
    measurementId: "G-Y1RXQWSEQ1"
};
 
firebase.initializeApp(firebaseConfig)
 
export const auth = firebase.auth()
export const firestore = firebase.firestore()
 
 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithRedirect(provider)
 
export default firebase;