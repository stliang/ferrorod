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
4. [x] Implement server side pagination
5. [x] Convert imperative to functional code (customClaims should be in the same ADT as user)
6. [x] Implement chart to display asset data
7. [ ] Clean up all errors

Sometimes getting the follow error when adding more assets:
``` 
Warning: Encountered two children with the same key, `10`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
    in select (created by ForwardRef(NativeSelectInput))
    in ForwardRef(NativeSelectInput) (created by ForwardRef(InputBase))
    in div (created by ForwardRef(InputBase))
    in ForwardRef(InputBase) (created by WithStyles(ForwardRef(InputBase)))
    in WithStyles(ForwardRef(InputBase)) (created by ForwardRef(Select))
    in ForwardRef(Select) (created by WithStyles(ForwardRef(Select)))
    in WithStyles(ForwardRef(Select)) (created by ForwardRef(TablePagination))
    in div (created by ForwardRef(Toolbar))
    in ForwardRef(Toolbar) (created by WithStyles(ForwardRef(Toolbar)))
    in WithStyles(ForwardRef(Toolbar)) (created by ForwardRef(TablePagination))
    in td (created by ForwardRef(TableCell))
    in ForwardRef(TableCell) (created by WithStyles(ForwardRef(TableCell)))
    in WithStyles(ForwardRef(TableCell)) (created by ForwardRef(TablePagination))
    in ForwardRef(TablePagination) (created by WithStyles(ForwardRef(TablePagination)))
    in WithStyles(ForwardRef(TablePagination)) (at MuiReactTable/index.js:290)
    in tr (created by ForwardRef(TableRow))
    in ForwardRef(TableRow) (created by WithStyles(ForwardRef(TableRow)))
    in WithStyles(ForwardRef(TableRow)) (at MuiReactTable/index.js:276)
    in tfoot (created by ForwardRef(TableFooter))
    in ForwardRef(TableFooter) (created by WithStyles(ForwardRef(TableFooter)))
    in WithStyles(ForwardRef(TableFooter)) (at MuiReactTable/index.js:275)
    in table (created by ForwardRef(Table))
    in ForwardRef(Table) (created by WithStyles(ForwardRef(Table)))
    in WithStyles(ForwardRef(Table)) (at MuiReactTable/index.js:242)
    in div (created by ForwardRef(TableContainer))
    in ForwardRef(TableContainer) (created by WithStyles(ForwardRef(TableContainer)))
    in WithStyles(ForwardRef(TableContainer)) (at MuiReactTable/index.js:230)
    in MuiReactTable (at TablePage/index.js:57)
    in TablePage (at Assets/index.js:9)
    in Assets (at Router/index.js:14)
    in Route (at Router/index.js:10)
    in PrivilegedRoute (at Router/index.js:26)
    in Switch (at Router/index.js:24)
    in Router (at ContentEx/index.js:24)
    in div (at ContentEx/index.js:23)
    in ContentEx (created by WithStyles(ContentEx))
    in WithStyles(ContentEx) (at Main/index.js:85)
    in main (created by ProxyComponent)
    in ProxyComponent (created by StyledComponent)
    in StyledComponent (created by Content)
    in Content (at Main/index.js:84)
    in Layout (created by Root)
    in LayoutProvider (created by Root)
    in ThemeProvider (created by Root)
    in Root (at Main/index.js:67)
    in Main (at src/index.js:20)
    in Router (created by MemoryRouter)
    in MemoryRouter (at src/index.js:19)
    in UserDataContextProvider (at src/index.js:18)
    in UserContextProvider (at src/index.js:17)
    in FirebaseContextProvider (at src/index.js:16)
    in App (at src/index.js:28)
```
The above looks like a react-table problem. Should update the lib and see if that fixes it.

Some time see the follow errors, but not sure what caused it:
```
Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
    in AssetChart (at Assets/index.js:15)
    in Assets (at Router/index.js:14)
    in Route (at Router/index.js:10)
    in PrivilegedRoute (at Router/index.js:26)
```
```
index.js:1 Warning: Received NaN for the `value` attribute. If this is expected, cast the value to a string.
    in input (created by ForwardRef(InputBase))
    in div (created by ForwardRef(InputBase))
    in ForwardRef(InputBase) (created by WithStyles(ForwardRef(InputBase)))
    in WithStyles(ForwardRef(InputBase)) (created by ForwardRef(Input))
    in ForwardRef(Input) (created by WithStyles(ForwardRef(Input)))
    in WithStyles(ForwardRef(Input)) (created by ForwardRef(TextField))
    in div (created by ForwardRef(FormControl))
    in ForwardRef(FormControl) (created by WithStyles(ForwardRef(FormControl)))
    in WithStyles(ForwardRef(FormControl)) (created by ForwardRef(TextField))
    in ForwardRef(TextField) (created by WithStyles(ForwardRef(TextField)))
    in WithStyles(ForwardRef(TextField)) (at AddRowDialog/index.js:73)
    in div (created by ForwardRef(DialogContent))
    in ForwardRef(DialogContent) (created by WithStyles(ForwardRef(DialogContent)))
    in WithStyles(ForwardRef(DialogContent)) (at AddRowDialog/index.js:66)
    in div (created by ForwardRef(Paper))
    in ForwardRef(Paper) (created by WithStyles(ForwardRef(Paper)))
    in WithStyles(ForwardRef(Paper)) (created by ForwardRef(Dialog))
    in div (created by Transition)
    in Transition (created by ForwardRef(Fade))
    in ForwardRef(Fade) (created by Unstable_TrapFocus)
    in Unstable_TrapFocus (created by ForwardRef(Modal))
    in div (created by ForwardRef(Modal))
    in ForwardRef(Portal) (created by ForwardRef(Modal))
    in ForwardRef(Modal) (created by ForwardRef(Dialog))
    in ForwardRef(Dialog) (created by WithStyles(ForwardRef(Dialog)))
    in WithStyles(ForwardRef(Dialog)) (at AddRowDialog/index.js:64)
    in div (at AddRowDialog/index.js:58)
    in AddRowDialog (at TableToolbar.js:54)
    in div (created by ForwardRef(Toolbar))
    in ForwardRef(Toolbar) (created by WithStyles(ForwardRef(Toolbar)))
    in WithStyles(ForwardRef(Toolbar)) (at TableToolbar.js:49)
    in TableToolbar (at MuiReactTable/index.js:231)
    in div (created by ForwardRef(TableContainer))
    in ForwardRef(TableContainer) (created by WithStyles(ForwardRef(TableContainer)))
    in WithStyles(ForwardRef(TableContainer)) (at MuiReactTable/index.js:230)
    in MuiReactTable (at TablePage/index.js:57)
    in TablePage (at Assets/index.js:9)
    in Assets (at Router/index.js:14)
    in Route (at Router/index.js:10)
    in PrivilegedRoute (at Router/index.js:26)
    in Switch (at Router/index.js:24)
    in Router (at ContentEx/index.js:24)
    in div (at ContentEx/index.js:23)
    in ContentEx (created by WithStyles(ContentEx))
    in WithStyles(ContentEx) (at Main/index.js:85)
    in main (created by ProxyComponent)
    in ProxyComponent (created by StyledComponent)
    in StyledComponent (created by Content)
    in Content (at Main/index.js:84)
    in Layout (created by Root)
    in LayoutProvider (created by Root)
    in ThemeProvider (created by Root)
    in Root (at Main/index.js:67)
    in Main (at src/index.js:20)
    in Router (created by MemoryRouter)
    in MemoryRouter (at src/index.js:19)
    in UserDataContextProvider (at src/index.js:18)
    in UserContextProvider (at src/index.js:17)
    in FirebaseContextProvider (at src/index.js:16)
    in App (at src/index.js:28)
```

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

## Design Choices
This project uses the crocks js library. I found crocks conceptually close to Haskell. Folktable and Elm are also good. Folkable is more concerned with smooth integration with JS which forgos currying. For large team, Folktable might make more sense.  As for Elm, more overhead might be required when integrating with the Firebase client library.

## Security Test Cases
1. Backend should block privilege escalation without exposing PII in exception message
2. Backend connextion exception should not expose PII in exception message