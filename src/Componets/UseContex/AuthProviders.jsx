 import React, { createContext, useEffect, useState } from 'react';
import { Children } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,signOut } from "firebase/auth";
import app from '../../../firebaseConfig';
 export const AuthContex = createContext(null)
const auth = getAuth(app);




 const AuthProviders = ({children}) => {
const [user, setUser] = useState(null);
// lodding ar jonno 
const [lodding, setLodding] = useState(true)

// regester ar jonno 
const createUser = (email, password ) => {
    return createUserWithEmailAndPassword(auth,email,password)
}
// login ar jonno 
const  signIn  = (email, password ) => {
   return  signInWithEmailAndPassword(auth,email,password)
}

// Logout ar jonno 
    const  logOut = () => {
        return signOut(auth)
    }

//  SignOut massage show
useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, createUser => {
        console.log('auth state change', createUser)
        setUser(createUser);
        // lodding ar jonno
        setLodding(false);
        
    })
},[])

 const AuthInfo = {
 user,
 logOut,
 createUser,
 signIn,
//  lodding ar jonno 
 lodding
 
 }

  
    return (
        // use contex ar jonno 
        <AuthContex.Provider  value={AuthInfo}>
        {children}

    </AuthContex.Provider>
    );
 };
 
 export default AuthProviders;