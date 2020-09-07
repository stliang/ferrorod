import React, { useContext, createContext, useState, useEffect } from 'react';
import { Async, chain, compose, Either, eitherToAsync, ifElse, Maybe, maybeToAsync } from "crocks";
import { FirebaseContext } from './FirebaseContextProvider';
import { useAuthState } from 'react-firebase-hooks/auth';

export const UserContext = createContext();

// https://github.com/evilsoft/crocks/issues/483

const { Left, Right } = Either

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

    useEffect(() => { safeRequestCustomClaims(user) }, [user]);

    const provider = new firebaseInstance.firebase_.auth["GoogleAuthProvider"]();

    const login = () => {
        firebaseInstance.auth().signInWithRedirect(provider);
    };
    const logout = () => {
        firebaseInstance.auth().signOut();
        storeCustomClaims(defaultClaims);
    };

    const maybeUserF = (_user) => _user ? Maybe.Just(_user) : Maybe.Nothing();
    const maybeUser = maybeUserF(user)

    const eitherUserF = (_user) => _user ? Right(_user) : Left('anonymous');

    // promiseIdTokenResult :: () -> Promise idTokenResult Error
    const promiseIdTokenResult = () => user.getIdTokenResult();

    const getIdTokenResult = compose(
        chain(fromPromise(promiseIdTokenResult)),
        eitherToAsync,
        eitherUserF
    )

    const safeRequestCustomClaims = (_user) => {
        getIdTokenResult(_user).fork(
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
            maybeUser
        }} {...props} />
    );
}
export default UserContextProvider;