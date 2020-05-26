import React, { createContext, useContext } from 'react';
import { FirebaseContext } from './FirebaseContextProvider';
import { UserContext } from './UserContextProvider';
import { v4 as uuidv4 } from 'uuid';

export const UserDataContext = createContext();

const UserDataContextProvider = (props) => {
    const { firebaseInstance } = useContext(FirebaseContext);
    const { user } = useContext(UserContext);

    const getRows = (setData, tableName) => {
        if (user) {
            firebaseInstance
                .firestore()
                .collection('user_docs')
                .doc(user.uid)
                .collection(tableName)
                .get()
                .then((querySnapshot) => {
                    const data = querySnapshot.docs.map(doc => doc.data());
                    setData(data);
                })
                .catch((error) => {
                    console.error("Error getting document: ", error);
                });
        }
    }

    const insertRow = (row, tableName) => {
        const uuid = uuidv4();
        row.key = (new Date().getTime()) + '-' + uuid;
        if (user) {
            firebaseInstance
                .firestore()
                .collection('user_docs')
                .doc(user.uid)
                .collection(tableName)
                .doc(row.key)
                .set(row)
                .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
        }
    }
    return (
        <UserDataContext.Provider value={{ getRows, insertRow }} {...props} />
    );
}
export default UserDataContextProvider;