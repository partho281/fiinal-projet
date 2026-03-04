import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateCurrentUser, updateProfile, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { onAuthStateChanged } from 'firebase/auth/cordova';


const auth = getAuth(app);

export const AuthContext = createContext();
const UserContext = ({children}) => {
    const[user,setUser] = useState({});
    const[userLoading,setUserLoading]=useState(true)
// const auth = getAuth(app)
   
     const createUser = (email,password)=>{
        setUserLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    };
      const signInUser = (email,password)=>{
          setUserLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    };  
    //update user
    const updataUser = (userInfo)=>{
          setUserLoading(true)
        return updateProfile(auth.currentUser,userInfo);};
          
    const logOut=()=>{
          setUserLoading(true)
        return signOut(auth);
    };
    
   //tracking
   useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setUserLoading(false) 
    });
    return()=>unSubscribe();
   },[])

   
    const userInfo = {
        createUser,
        signInUser,
        updataUser,
        user,
        logOut,
        userLoading
    };
    return (
        <AuthContext.Provider value={userInfo}>
       {children}
            
        </AuthContext.Provider>
    );
};


export default UserContext;