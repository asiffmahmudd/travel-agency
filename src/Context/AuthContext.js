import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import firebase from 'firebase';
import { serverUrl } from "../ServerUrl";

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
        return fetch(serverUrl+'/admins/'+user.email)
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

    const saveToken = () => {
        return firebase.auth().currentUser.getIdToken(true)
        .then(function(idToken) {
            return idToken;
        }).catch(function(error) {
            alert(error.message)
        });
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async user => {
            let currentUser;
            if(user){
                currentUser = formatUser(user)
                saveToken()
                .then(idToken => {
                    localStorage.setItem('token', idToken)
                });
                checkAdmin(currentUser)
                .then(res => {
                    currentUser = res
                    setLoggedInUser(currentUser);
                    setLoading(false);
                })
            }
            else{
                setLoggedInUser(currentUser);
                setLoading(false);
            }
        })
        return unsubscribe
    }, [])



    const value = { loggedInUser, signIn, signOut, saveToken }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}