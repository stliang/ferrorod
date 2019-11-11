import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { Navbar } from 'react-bulma-components';

const Nav = () => {
    return (
        <Navbar
            fixed='top'
            active={false}
            transparent={false}
        >
            <Navbar.Brand>
                <Navbar.Item renderAs="a" href="#">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </Navbar.Item>
                <Navbar.Burger />
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Container>
                    <Navbar.Item dropdown hoverable href="#">
                        <Navbar.Link arrowless={false}>
                            Analytics
                        </Navbar.Link>
                        <Navbar.Dropdown>
                            <Navbar.Item href="#">
                                Cash Flow
                                </Navbar.Item>
                            <Navbar.Item href="#">
                                Work Flow
                                </Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                    <Navbar.Item to={ROUTES.LANDING.path} renderAs={Link}>Landing</Navbar.Item>
                    <Navbar.Item to={ROUTES.HOME.path} renderAs={Link}>Home</Navbar.Item>
                    <Navbar.Item to={ROUTES.ACCOUNT.path} renderAs={Link}>Account</Navbar.Item>
                    <Navbar.Item to={ROUTES.ADMIN.path} renderAs={Link}>Admin</Navbar.Item>
                </Navbar.Container>
                <Navbar.Container position="end">
                    <Navbar.Item to={ROUTES.SIGN_IN.path} renderAs={Link}>Sign In</Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    );
}

export default Nav;