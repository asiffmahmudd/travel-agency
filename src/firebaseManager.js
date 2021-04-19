import firebaseConfig from "./firebaseConfig";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const signIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
        var user = {
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL
        }
        return user;
    }).catch((error) => {
        alert(error.message)
    });
} 

export const signOut = () => {
    return firebase.auth().signOut().then(() => {
        return true;
    }).catch((error) => {
        alert(error.message);
    });
}