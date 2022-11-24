import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, deleteUser, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()
    //Sign in Google
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //createNewUser
    const CreateNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //logIn User
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sign out 
    const logOut = () => {
        localStorage.removeItem('token')
        return signOut(auth)
    }

    //delete User 
    const removeUser = () => {
        return deleteUser(auth.currentUser)
    }


    //Observe Current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])


    const authInfo = {
        user,
        setUser,
        googleSignIn,
        CreateNewUser,
        logInUser,
        logOut,
        removeUser,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;