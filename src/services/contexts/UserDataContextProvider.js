import React, { createContext, useContext } from 'react'
import { compose, constant, curry, either, identity, tryCatch } from "crocks"
import { FirebaseContext } from './FirebaseContextProvider'
import { UserContext } from './UserContextProvider'
import Result from 'crocks/Result'
export const UserDataContext = createContext()
const { Err, Ok } = Result

const UserDataContextProvider = (props) => {
    const { firebaseInstance } = useContext(FirebaseContext);
    const { maybeUser } = useContext(UserContext);

    /**
     * getRows uses onSnapshot callback for real time data
     * If you prefer functonal programing, use get instead of onSnapshot might be easier
     * @param {*} setData 
     * @param {*} tableName 
     */
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
                    // debugger
                    // console.log(allDocs)
                })
        )
    }

    // const getRows = (setData, tableName) => {
    //     maybeUser.map(user =>
    //         firebaseInstance
    //             .firestore()
    //             .collection('user_docs')
    //             .doc(user.uid)
    //             .collection(tableName).onSnapshot(snapshot => {
    //                 const allDocs = snapshot.docs.map(doc => ({
    //                     id: doc.id,
    //                     ...doc.data()
    //                 }));
    //                 setData(allDocs);
    //             })
    //     )
    // }

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
                    // debugger
                    // console.log(allDocs)
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

    /**
     * TODO: convert promises to crock async
     * @param {*} row 
     * @param {*} tableName 
     */
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
        // debugger
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


/** References:
 * https://firebase.google.com/docs/firestore/query-data/query-cursors#web_2
 * https://medium.com/technest/how-to-connect-firebase-cloud-firestore-to-your-react-app-1118fd182c60
 * https://www.freecodecamp.org/news/the-firestore-tutorial-for-2020-learn-by-example/
 * https://github.com/evilsoft/crocks/blob/master/docs/src/pages/docs/crocks/Async.md
 */ 