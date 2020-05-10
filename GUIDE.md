## Backend Development
# DB acceds policy
This application rely on firebse's database rule to configure user authorization.  As of now, the database rule is as follow:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth.uid != null;
    }
  }
}
```
The above stanza tells firebase to only allow authenticated user to interact with the database.  This makes anyone or any bot can gain access to our database to any document.  We can further restrain by adding the document name:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /assets/{asset} {
      allow read, write: if request.auth.uid != null;
    }
  }
}
```
Here are a number of drawbacks from firebase out of the box:
1. no user based access constrain 
2. no rate limiting on an user account
3. no user account creation approval process

# DB Client Code
You can insert arbitary fields to a Firebase database but the value in a key value pair can not be undefine.  For a react-table library, the subRows field needs to be removed before passing row content to the saveRow function: 
```
    const saveRow = (row, tableName) => {
        const uuid = uuidv4();
        firebaseInstance
            .firestore()
            .collection(tableName)
            .doc(uuid)
            .set(row)
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    }
```
The saveRow function uses Promise.then() approch.  We can also use the async/await approach and the end result is the same:
```
    const saveRow = async (row, tableName) => {
        const uuid = uuidv4();
        try {
            await firebaseInstance
                .firestore()
                .collection(tableName)
                .doc(uuid)
                .set(row);
            console.log("Document successfully written!");
        } catch (e) {
            console.error("Error writing document: ", e);
        }
    }
```

# To Secure DB query
https://firebase.google.com/docs/firestore/security/rules-query


