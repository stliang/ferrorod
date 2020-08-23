import React, { createContext, useContext } from 'react';
import { FirebaseContext } from './FirebaseContextProvider';
import { UserContext } from './UserContextProvider';

export const UserDataContext = createContext();

// EXAMPLE: https://firebase.google.com/docs/firestore/query-data/query-cursors#web_2
// New implementation is based on the following URL
// https://medium.com/technest/how-to-connect-firebase-cloud-firestore-to-your-react-app-1118fd182c60
const UserDataContextProvider = (props) => {
    const { firebaseInstance } = useContext(FirebaseContext);
    const { maybeUser } = useContext(UserContext);

    const getRows = (setData, tableName) => {
        maybeUser.map(user =>
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
                })
        )
    }

    const getPage = (pageSize, orderBy, setData, tableName) => {
        maybeUser.map(user =>
            firebaseInstance
                .firestore()
                .collection('user_docs')
                .doc(user.uid)
                .collection(tableName)
                .orderBy(orderBy)
                .limit(pageSize)
                .onSnapshot(snapshot => {
                    const allDocs = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                    setData(allDocs);
                })
        )
    }

    const nextPage = (lastDoc, pageSize, orderBy, setData, tableName) => {
        maybeUser.map(user =>
            firebaseInstance
                .firestore()
                .collection('user_docs')
                .doc(user.uid)
                .collection(tableName)
                .orderBy(orderBy)
                .startAfter(lastDoc[orderBy])  // Use timestamp 
                .limit(pageSize)
                .onSnapshot(snapshot => {
                    if (snapshot.docs.length > 0) {
                        const allDocs = snapshot.docs.map(doc => ({
                            id: doc.id,
                            ...doc.data()
                        }));
                        setData(allDocs);
                    }
                })
        )
    }

    const prevPage = (firstDoc, pageSize, orderBy, setData, tableName) => {
        maybeUser.map(user =>
            firebaseInstance
                .firestore()
                .collection('user_docs')
                .doc(user.uid)
                .collection(tableName)
                .orderBy(orderBy)
                .endBefore(firstDoc[orderBy])
                .limitToLast(pageSize)
                .onSnapshot(snapshot => {
                    if (snapshot.docs.length > 0) {
                        const allDocs = snapshot.docs.map(doc => ({
                            id: doc.id,
                            ...doc.data()
                        }));
                        setData(allDocs);
                    }
                })
        )
    }

    const insertRow = (row, tableName) => {
        maybeUser.map(user => {
            row['timestamp'] = Date.now();
            firebaseInstance
                .firestore()
                .collection('user_docs')
                .doc(user.uid)
                .collection(tableName)
                .add(row);
        }
        )
    }

    const deleteRow = (id, tableName) => {
        maybeUser.map(user =>
            firebaseInstance
                .firestore()
                .collection('user_docs')
                .doc(user.uid)
                .collection(tableName)
                .doc(id)
                .delete()
        )
    }

    const updateRow = (id, fields, tableName) => {
        maybeUser.map(user =>
            firebaseInstance
                .firestore()
                .collection('user_docs')
                .doc(user.uid)
                .collection(tableName)
                .doc(id)
                .update(fields)
        )
    }

    return (
        <UserDataContext.Provider value={{ deleteRow, getPage, getRows, insertRow, nextPage, prevPage, updateRow }} {...props} />
    );
}
export default UserDataContextProvider;