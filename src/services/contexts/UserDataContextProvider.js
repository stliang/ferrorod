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

    const saveRow = (row, tableName) => {
        const uuid = uuidv4();
        if (user) {
            firebaseInstance
                .firestore()
                .collection('user_docs')
                .doc(user.uid + '/' + tableName + '/' + uuid)
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
        <UserDataContext.Provider value={{ getRows, saveRow }} {...props} />
    );
}
export default UserDataContextProvider;