import React, { useContext } from "react";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemLink from '../../../components/ListItemLink';
import { roleBasedDisplay } from '../../config'
import { UserContext } from "../../../services/contexts/UserContextProvider";

import Maybe from 'crocks/Maybe'

const { Nothing } = Maybe

const NavContentEx = () => {
  const { customClaims, login, logout, maybeUser } = useContext(UserContext);
  const list = () => {
    debugger
    if (maybeUser.equals(Nothing())) {
      return roleBasedDisplay["anonymous"]
    } else {
      return roleBasedDisplay[customClaims.userRole]
    }
  }

  const loginButton = () => {
    if (maybeUser.equals(Nothing())) {
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
    } else {
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
    }
  }

  return (
    <List>
      {list().map(({ path, primaryText, icon }, i) => (
        <ListItemLink to={path} primary={primaryText} icon={<Icon>{icon}</Icon>} />
      ))}
      <Divider style={{ margin: "12px 0" }} />
      {loginButton()}
    </List>
  )
};

NavContentEx.propTypes = {};
NavContentEx.defaultProps = {};

export default NavContentEx;