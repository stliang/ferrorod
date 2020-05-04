import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import FirebaseContextProvider from './services/contexts/FirebaseContextProvider';
import UserContextProvider from './services/contexts/UserContextProvider';
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Layout from './scenes/components/Layout';
import Main from './scenes/Main';
import Logo from './components/Logo';

const App = props => (
    <FirebaseContextProvider>
        <UserContextProvider>
            <MemoryRouter>
                {/* <Logo /> */}
                <Main />
                {/* <Layout /> */}
            </MemoryRouter>
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
