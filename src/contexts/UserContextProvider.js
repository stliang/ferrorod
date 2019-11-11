import React, {useContext, createContext, useState, useEffect } from 'react';
import { FirebaseContext } from './FirebaseContextProvider'
import { useAuthState } from 'react-firebase-hooks/auth';

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const defaultClaims = { userRole: 'anonymous' };
    const { firebaseInstance } = useContext(FirebaseContext);
    const [user, initialising, error] = useAuthState(firebaseInstance.auth());
    const [customClaims, storeCustomClaims] = useState(defaultClaims);

    useEffect(() => { requestCustomClaims(user) }, [user]);

    const provider = new firebaseInstance.firebase_.auth["GoogleAuthProvider"]();

    const login = () => {
        firebaseInstance.auth().signInWithRedirect(provider);
    };
    const logout = () => {
        firebaseInstance.auth().signOut();
        storeCustomClaims(defaultClaims);
    };

    const requestCustomClaims = async (user) => {
        if (user) {
            const idTokenResult = await user.getIdTokenResult();
            storeCustomClaims(idTokenResult.claims);
        }
    }; 

    return (
        <UserContext.Provider value={{user, customClaims, initialising, error, login, logout}} {...props}/>
    );
}
export default UserContextProvider;