import React, { useContext } from "react";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemLink from '../../../components/ListItemLink';
import * as NAVITEMS from '../../components/navItems';
import { UserContext } from "../../../services/contexts/UserContextProvider";

const NavContentEx = () => {
  const { customClaims } = useContext(UserContext);
  const { user, initialising, error, login, logout } = useContext(UserContext);
  const list = () => {
    if (user) {
      return NAVITEMS.ROLE[customClaims.userRole]
    } else {
      return NAVITEMS.ROLE["anonymous"]
    }
  }

  const loginButton = () => {
    if (user) {
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