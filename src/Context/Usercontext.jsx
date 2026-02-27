import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);

export const AuthContext = createContext();
const UserContext = ({children}) => {
    const creatUser = (email,password)=>{
        return createUserWithEmailAndPassword(email,password)
    }
    const userInfo = {name : 'PARTHO'}
    return (
        <AuthContext.Provider value={userInfo}>
       {children}
            
        </AuthContext.Provider>
    );
};

export default UserContext;