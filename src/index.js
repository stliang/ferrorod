import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import FirebaseContextProvider from './contexts/FirebaseContextProvider';
import UserContextProvider from './contexts/UserContextProvider';
import { BrowserRouter } from "react-router-dom";
import Layout from './components/Layout';
import 'react-bulma-components/dist/react-bulma-components.min.css';

const App = props => (

    <FirebaseContextProvider>
        <UserContextProvider>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </UserContextProvider>
    </FirebaseContextProvider>

);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
