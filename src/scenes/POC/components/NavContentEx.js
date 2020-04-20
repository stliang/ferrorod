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

const list = [
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
    route: ROUTES.SIGN_IN.path,
    primaryText: "Face",
    icon: "face"
  },
  {
    route: ROUTES.HOME.path,
    primaryText: "Recent",
    icon: "schedule"
  },
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
    primaryText: "Backups",
    icon: "backup"
  },
  {
    route: ROUTES.HOME.path,
    primaryText: "Trash",
    icon: "delete"
  }
];
const NavContentEx = () => {
  const { user, initialising, error, login, logout } = useContext(UserContext);

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
            <Icon>lock</Icon>
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
      {list.map(({ route, primaryText, icon }, i) => (
        <ListItemLink to={route} primary={primaryText} icon={<Icon>{icon}</Icon>} />
        // <ListItem key={primaryText} selected={i === 0} button>
        //   <ListItemIcon>
        //     <Icon>{icon}</Icon>
        //   </ListItemIcon>
        //   <ListItemText
        //     primary={primaryText}
        //     primaryTypographyProps={{ noWrap: true }}
        //   />
        // </ListItem>
      ))}
      <Divider style={{ margin: "12px 0" }} />
      {loginButton()}
      <ListItem button>
        <ListItemIcon>
          <Icon>settings</Icon>
        </ListItemIcon>
        <ListItemText
          primary={"Settings & account"}
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItem>
    </List>
  )
};

NavContentEx.propTypes = {};
NavContentEx.defaultProps = {};

export default NavContentEx;