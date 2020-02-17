import React, { createContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { config } from '../firebaseConfig'

export const FirebaseContext = createContext();
const firebaseInstance = firebase.initializeApp(config);
const FirebaseContextProvider = (props) => {
    return (
        <FirebaseContext.Provider value={{firebaseInstance}}>
            { props.children }
        </FirebaseContext.Provider>
    );
}

export default FirebaseContextProvider;