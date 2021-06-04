import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import firebase from 'firebase';

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export function AuthProvider({children}){

    const [loggedInUser, setLoggedInUser] = useState()
    const [loading, setLoading] = useState(true)

    const formatUser = (user) => ({
        email: user.email,
        name: user.displayName,
        provider: user.providerData[0].providerId,
        photo: user.photoURL,
        uid: user.uid,
    });

    const checkAdmin = (user) => {
        return fetch('https://travel-agencyy.herokuapp.com/admins/'+user.email)
        .then(res => res.json())
        .then(result => {
            if(result.length > 0){
                user.isAdmin = true;
            }
            else{
                user.isAdmin = false;
            }
            return user;
        })
        .catch(e => {
            alert(e.message)
        })
    }

    const signIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
    
        return auth
        .signInWithPopup(provider)
        .then((result) => {
            let user = formatUser(result.user)
            checkAdmin(user)
            .then(res => user = res)

            setLoggedInUser(user);
            setLoading(false);
        }).catch((error) => {
            setLoading(false)
            alert(error.message)
        });
    } 

    const signOut = () => {
        return auth.signOut().then(() => {
            return true;
        }).catch((error) => {
            alert(error.message);
        });
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async user => {
            let currentUser;
            if(user){
                currentUser = formatUser(user)
                checkAdmin(currentUser)
                .then(res => currentUser = res)
            }
            setLoggedInUser(currentUser);
            setLoading(false);
        })
        return unsubscribe
    }, [])

    const value = { loggedInUser, signIn, signOut }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}