import React, { createContext, useContext } from 'react';
import { FirebaseContext } from './FirebaseContextProvider';
import { UserContext } from './UserContextProvider';

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

    const getPage = (pageSize, orderBy, setData, tableName) => {
        if (user) {
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
                });
        }
    }

    // EXAMPLE: https://firebase.google.com/docs/firestore/query-data/query-cursors#web_2

    // var citiesRef = db.collection("cities");

    // return citiesRef.doc("SF").get().then(function (doc) {
    //     // Get all cities with a population bigger than San Francisco
    //     var biggerThanSf = citiesRef
    //         .orderBy("population")
    //         .startAt(doc);

    //     // ...
    // });

    // var first = db.collection("cities")
    //     .orderBy("population")
    //     .limit(25);

    // return first.get().then(function (documentSnapshots) {
    //     // Get the last visible document
    //     var lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
    //     console.log("last", lastVisible);

    //     // Construct a new query starting at this document,
    //     // get the next 25 cities.
    //     var next = db.collection("cities")
    //         .orderBy("population")
    //         .startAfter(lastVisible)
    //         .limit(25);
    // });

    const nextPage = (lastDoc, pageSize, orderBy, setData, tableName) => {
        if (user) {
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
                });
        }
    }

    const prevPage = (firstDoc, pageSize, orderBy, setData, tableName) => {
        if (user) {
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
                });
        }
    }

    // const field = 'timestamp';
    // const pageSize = 3;

    // const query = ref.orderBy(field).limit(pageSize);

    // const nextPage = (last) => {
    //     return ref.orderBy(field)
    //         .startAfter(last[field])
    //         .limit(pageSize);
    // }

    // const prevPage = (first) => {
    //     return ref.orderBy(field)
    //         .endBefore(first[field])
    //         .limitToLast(pageSize);
    // }

    const insertRow = (row, tableName) => {
        if (user) {
            row['timestamp'] = Date.now();
            firebaseInstance
                .firestore()
                .collection('user_docs')
                .doc(user.uid)
                .collection(tableName)
                .add(row);
        }
    }

    const deleteRow = (id, tableName) => {
        firebaseInstance
            .firestore()
            .collection('user_docs')
            .doc(user.uid)
            .collection(tableName)
            .doc(id)
            .delete();
    };

    const updateRow = (id, fields, tableName) => {
        debugger
        firebaseInstance
            .firestore()
            .collection('user_docs')
            .doc(user.uid)
            .collection(tableName)
            .doc(id)
            .update(fields);
    };

    return (
        <UserDataContext.Provider value={{ deleteRow, getPage, getRows, insertRow, nextPage, prevPage, updateRow }} {...props} />
    );
}
export default UserDataContextProvider;