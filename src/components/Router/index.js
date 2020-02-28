import React, { useContext } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { UserContext } from '../../services/contexts/UserContextProvider';
import * as ROUTES from './routes';
// import { AccountPage, AdminPage, AssetsPage, HomePage, LandingPage, SignInPage } from '../../scenes/pages';
import { AssetsPage, HomePage, LandingPage, SignInPage } from '../../scenes/pages';

const PrivilegedRoute = ({ component: Component, privileges, ...rest }) => {
    const { customClaims } = useContext(UserContext);
    const trust = privileges.includes(customClaims.userRole);
    debugger
    return (
        <Route {...rest} >
            {
                trust
                    ?
                    (<Component />)
                    :
                    (<Redirect to={{ pathname: ROUTES.SIGN_IN.path }} />)
            }
        </Route>
    );
}

const Router = () => {
    return (
        <Switch>
            <PrivilegedRoute exact path={ROUTES.LANDING.path} privileges={ROUTES.LANDING.privileges} component={LandingPage} />
            <PrivilegedRoute path={ROUTES.HOME.path} privileges={ROUTES.HOME.privileges} component={HomePage} />
            <PrivilegedRoute path={ROUTES.ASSETS.path} privileges={ROUTES.ASSETS.privileges} component={AssetsPage} />
            {/* <PrivilegedRoute path={ROUTES.ACCOUNT.path} privileges={ROUTES.ACCOUNT.privileges} component={AccountPage} /> */}
            <PrivilegedRoute path={ROUTES.SIGN_IN.path} privileges={ROUTES.SIGN_IN.privileges} component={SignInPage} />
            {/* <PrivilegedRoute path={ROUTES.ADMIN.path} privileges={ROUTES.ADMIN.privileges} component={AdminPage} /> */}
        </Switch>
    )
}

export default Router;