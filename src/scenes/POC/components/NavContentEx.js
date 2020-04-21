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
    route: ROUTES.HOME.path,
    primaryText: "Home",
    icon: "home"
  },
  {
    route: ROUTES.LANDING.path,
    primaryText: "Landing",
    icon: "landscape"
  },
  {
    route: ROUTES.ASSETS.path,
    primaryText: "Schedule",
    icon: "schedule"
  },
]

const basicList = [
  {
    route: ROUTES.HOME.path,
    primaryText: "Offline",
    icon: "offline_pin"
  },
  {
    route: ROUTES.HOME.path,
    primaryText: "Uploads",
    icon: "publish"
  },
  {
    route: ROUTES.HOME.path,
    primaryText: "Shipping",
    icon: "local_shipping"
  },
  {
    route: ROUTES.HOME.path,
    primaryText: "Trash",
    icon: "delete"
  }
];

const NavContentEx = () => {
  const { user, initialising, error, login, logout } = useContext(UserContext);
  const list = () => {
    if (user) {
      return anonymousList.concat(basicList)
    } else {
      return anonymousList
    }
  }

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
      <ListItemLink to={ROUTES.ACCOUNT.path} primary={"Settings & account"} icon={<Icon>settings</Icon>} />
    </List>
  )
};

NavContentEx.propTypes = {};
NavContentEx.defaultProps = {};

export default NavContentEx;