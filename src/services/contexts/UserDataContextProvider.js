import React, { createContext, useContext } from 'react'
import { compose, constant, curry, either, identity, tryCatch } from "crocks"
import { FirebaseContext } from './FirebaseContextProvider'
import { UserContext } from './UserContextProvider'

export const UserDataContext = createContext()

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

    // https://www.freecodecamp.org/news/functional-programming-patterns-cookbook-3a0dfe2d7e0a/
    // const wrap =
    //     (user) => UserDisplay2(user.photoURL, user.displayName)

    // const empty =
    //     () => UserDisplay2(null, 'Welcome')

    // const userGreeting =
    //     either(empty, wrap)

    // const _getRows = curry(
    //     (_maybeUser, tableName) => {
    //         compose(
    //             either(constant("Error: getting data from table"), identity),
    //             tryCatch(
    //                 _maybeUser.map(user =>
    //                     firebaseInstance
    //                         .firestore()
    //                         .collection('user_docs')
    //                         .doc(user.uid)
    //                         .collection(tableName).onSnapshot(snapshot => {
    //                             const allDocs = snapshot.docs.map(doc => ({
    //                                 id: doc.id,
    //                                 ...doc.data()
    //                             }))
    //                             return allDocs
    //                         })
    //                 )
    //                 // either(()=>[], identity)(_maybeUser)
    //             )
    //         )
    //     }
    // )

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