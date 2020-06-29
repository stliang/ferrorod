import React, { useContext, createContext, useState, useEffect } from 'react';
import { Async, chain, compose, Maybe, maybeToAsync } from "crocks";
import { FirebaseContext } from './FirebaseContextProvider';
import { useAuthState } from 'react-firebase-hooks/auth';

export const UserContext = createContext();

// https://www.freecodecamp.org/news/functional-programming-patterns-cookbook-3a0dfe2d7e0a/
// logError :: (...a) -> IO()
const logError = (...args) => console.log("Error: ", ...args)

// logResponse :: (...a) -> IO()
const logSuccess = (...args) => console.log("Success: ", ...args)

const UserContextProvider = (props) => {
    const defaultClaims = { userRole: 'anonymous' };
    const { firebaseInstance } = useContext(FirebaseContext);
    const [user, initialising, error] = useAuthState(firebaseInstance.auth());
    const [customClaims, storeCustomClaims] = useState(defaultClaims);

    const { fromPromise } = Async;

    // useEffect(() => { requestCustomClaims(user) }, [user]);
    useEffect(() => { safeRequestCustomClaims(user) }, [user]);

    const provider = new firebaseInstance.firebase_.auth["GoogleAuthProvider"]();

    const login = () => {
        firebaseInstance.auth().signInWithRedirect(provider);
    };
    const logout = () => {
        firebaseInstance.auth().signOut();
        storeCustomClaims(defaultClaims);
    };

    // const requestCustomClaims = async (user) => {
    //     if (user) {
    //         const idTokenResult = await user.getIdTokenResult();
    //         storeCustomClaims(idTokenResult.claims);
    //     }
    // };

    const mayBeUser = () => user ? Maybe.Just(user) : Maybe.Nothing();

    // promiseIdTokenResult :: () -> Promise idTokenResult Error
    const promiseIdTokenResult = () => user.getIdTokenResult();

    // getIdTokenResult :: () -> Async idTokenResult Error
    const getIdTokenResult = compose(
        chain(fromPromise(promiseIdTokenResult)),
        maybeToAsync('user is null'),
        mayBeUser
    )

    const safeRequestCustomClaims = () => {
        getIdTokenResult().fork(
            logError,
            idTokenResult => {
                storeCustomClaims(idTokenResult.claims)
            }
        )
    }

    return (
        <UserContext.Provider value={{
            customClaims,
            error,
            initialising,
            login,
            logout,
            mayBeUser,
            user
        }} {...props} />
    );
}
export default UserContextProvider;