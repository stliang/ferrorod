import React, { createContext, useContext } from 'react';
import { FirebaseContext } from './FirebaseContextProvider';
import { UserContext } from './UserContextProvider';
import { v4 as uuidv4 } from 'uuid';

export const UserDataContext = createContext();

// New implementation is based on the following URL
// https://medium.com/technest/how-to-connect-firebase-cloud-firestore-to-your-react-app-1118fd182c60
const UserDataContextProvider = (props) => {
    const { firebaseInstance } = useContext(FirebaseContext);
    const { user } = useContext(UserContext);

    const getRows = (setData, tableName) => {
        if (user) {
            firebaseInstance
                .firestore()
                .collection('user_docs')
                .doc(user.uid)
                .collection(tableName).onSnapshot(snapshot => {
                    const allDocs = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                    setData(allDocs);
                });
        }
    }

    const insertRow = (row, tableName) => {
        if (user) {
            firebaseInstance
                .firestore()
                .collection('user_docs')
                .doc(user.uid)
                .collection(tableName)
                .add(row);
        }
    }

    const deleteDoc = (id, tableName) => {
        firebaseInstance
            .firestore()
            .collection('user_docs')
            .doc(user.uid)
            .collection(tableName)
            .doc(id)
            .delete();
    };

    return (
        <UserDataContext.Provider value={{ deleteDoc, getRows, insertRow }} {...props} />
    );
}
export default UserDataContextProvider;