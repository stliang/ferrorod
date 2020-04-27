import React, { useContext } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";

import ListItemLink from '../../../components/ListItemLink';
import * as ROUTES from '../../../components/Router/routes';
import { UserContext } from "../../../services/contexts/UserContextProvider";

const anonymousList = [
  {
    route: ROUTES.LANDING.path,
    primaryText: "Landing",
    icon: "home"
  }
]

const basicList = [
  {
    route: ROUTES.NOTIFY.path,
    primaryText: "Notify",
    icon: "notifications_none"
  },
  {
    route: ROUTES.SCHEDULE.path,
    primaryText: "Schedule",
    icon: "schedule"
  }
];

const paidList = [
  {
    route: ROUTES.SETTINGS.path,
    primaryText: "Settings",
    icon: "settings"
  }
];

const adminList = [
  {
    route: ROUTES.USERS.path,
    primaryText: "Users",
    icon: "people"
  }
];

const NavContentEx = () => {
  const { customClaims } = useContext(UserContext);
  const { user, initialising, error, login, logout } = useContext(UserContext);
  const list = () => {
    if (user) {
      if (customClaims.userRole == "admin") {
        return anonymousList.concat(basicList).concat(paidList).concat(adminList)
      } else {
        return anonymousList.concat(basicList).concat(paidList)
      }
    } else {
      return anonymousList
    }
  }
  debugger

  // export const LANDING = { privileges: LEVEL.ANONYMOUS, path: '/' };       // Products and services
  // export const NOTIFY = { privileges: LEVEL.BASIC, path: '/notify' };      // Notification preference
  // export const SCHEDULE = { privileges: LEVEL.BASIC, path: '/schedule' };  // Inventory
  // export const SETTINGS = { privileges: LEVEL.PAID, path: '/settings' };   // Marketing Campaign Settings
  // export const USERS = { privileges: LEVEL.ADMIN, path: '/users' };        // User administration

  const loginButton = () => {
    if (user) {
      // return <Button onClick={logout}>Log out</Button>
      return (
        <ListItem button onClick={logout}>
          <ListItemIcon>
            <Icon>lock</Icon>
          </ListItemIcon>
          <ListItemText
            primary={"Logout"}
            primaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
      )
    } else {
      // return <Button onClick={login}>Log in</Button>
      return (
        <ListItem button onClick={login}>
          <ListItemIcon>
            <Icon>lock_open</Icon>
          </ListItemIcon>
          <ListItemText
            primary={"Login"}
            primaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
      )
    }
  }

  return (
    <List>
      {list().map(({ route, primaryText, icon }, i) => (
        <ListItemLink to={route} primary={primaryText} icon={<Icon>{icon}</Icon>} />
      ))}
      <Divider style={{ margin: "12px 0" }} />
      {loginButton()}
    </List>
  )
};

NavContentEx.propTypes = {};
NavContentEx.defaultProps = {};

export default NavContentEx;