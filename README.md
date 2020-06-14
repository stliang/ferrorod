# Ferro Rod

Ferro Rod is a Firebase starter kit based on React and mui-treasury

## Related projects

This starter kit consists of three projects:

- ferrorod is the front-end
- ferrofunctions is the back-end functions
- ferroadmin is admin utilities


## Features

The aim of this project is to provide role based google authentication, CSS, React hooks, React context, React Table, and data visulization.

## TODO

1. [x] Implement react-table interactions with server side persistance layer
2. [x] Implement user base database access
3. [x] Implement data update via table edit and delete actions
4. [ ] Implement server side pagination
5. [ ] Clean up all errors
6. [ ] Implement chart to display some data

## Setup

In order to run this starter kit, you must create a project and database in Firebase.  Go to Project settings and add a web app.  Transfer your Firebase SDK snippet to your local .env.development file.

## Backend Setup
### DB access policy
This application rely on firebse's database rule to configure user authorization.  As of now, the database rule is as follow:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /user_docs/{userId}/Assets/{document=**} {
      allow read, update, delete, create: if request.auth.uid == userId;
    }
    match /user_docs/{userId}/WorkFlows/{document=**} {
      allow read, update, delete, create: if request.auth.uid == userId;
    }
    match /user_docs/{userId}/Grasses/{document=**} {
      allow read, update, delete, create: if request.auth.uid == userId;
    }
  }
}
```

## Helpful Commands for Development
yarn upgrade firebase@latest
