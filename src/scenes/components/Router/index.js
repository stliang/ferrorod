import React, { useContext } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { UserContext } from '../../../services/contexts/UserContextProvider';
import { navItems } from '../../config';

const PrivilegedRoute = ({ component: Component, privileges, ...rest }) => {
    const { customClaims } = useContext(UserContext);
    const trust = privileges.includes(customClaims.userRole);
    return (
        <Route {...rest} >
            {
                trust
                    ?
                    (<Component />)
                    :
                    (<Redirect to={{ pathname: '/' }} />)
            }
        </Route>
    );
}

const Router = () => {
    return (
        <Switch>
            {navItems.map(iteam =>
                <PrivilegedRoute key={iteam.id} path={iteam.path} privileges={iteam.privileges} component={iteam.page} />
            )}
        </Switch>
    )
}
export default Router;