import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import FirebaseContextProvider from './services/contexts/FirebaseContextProvider';
import UserContextProvider from './services/contexts/UserContextProvider';
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Layout from './components/Layout';
import POC from './scenes/POC';

const App = props => (
    <FirebaseContextProvider>
        <UserContextProvider>
            <MemoryRouter>
                <Layout />
            </MemoryRouter>
        </UserContextProvider>
    </FirebaseContextProvider>
);

ReactDOM.render(
    <POC />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
