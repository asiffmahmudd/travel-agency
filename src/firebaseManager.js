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
        fetch('https://travel-agencyy.herokuapp.com/admins/'+user.email)
            .then(res => res.json())
            .then(result => {
                if(result.length > 0){
                    user.isAdmin = true;
                }
                else{
                    user.isAdmin = false;
                }
            })
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