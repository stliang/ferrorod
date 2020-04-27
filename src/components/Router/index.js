import React, { useContext } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { UserContext } from '../../services/contexts/UserContextProvider';
import * as ROUTES from './routes';
import { LandingPage, NotifyPage, SchedulePage, SettingsPage, UsersPage } from '../../scenes/pages';

const PrivilegedRoute = ({ component: Component, privileges, ...rest }) => {
    const { customClaims } = useContext(UserContext);
    const trust = privileges.includes(customClaims.userRole);
    // debugger
    return (
        <Route {...rest} >
            {
                trust
                    ?
                    (<Component />)
                    :
                    (<Redirect to={{ pathname: ROUTES.LANDING.path }} />)
            }
        </Route>
    );
}

const Router = () => {
    return (
        <Switch>
            <PrivilegedRoute exact path={ROUTES.LANDING.path} privileges={ROUTES.LANDING.privileges} component={LandingPage} />
            <PrivilegedRoute path={ROUTES.NOTIFY.path} privileges={ROUTES.NOTIFY.privileges} component={NotifyPage} />
            <PrivilegedRoute path={ROUTES.SCHEDULE.path} privileges={ROUTES.SCHEDULE.privileges} component={SchedulePage} />
            <PrivilegedRoute path={ROUTES.SETTINGS.path} privileges={ROUTES.SETTINGS.privileges} component={SettingsPage} />
            <PrivilegedRoute path={ROUTES.USERS.path} privileges={ROUTES.USERS.privileges} component={UsersPage} />
        </Switch>
    )
}
export default Router;