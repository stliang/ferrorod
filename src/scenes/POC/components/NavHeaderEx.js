import React, { useContext } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { UserContext } from "../../../services/contexts/UserContextProvider";

const NavHeaderEx = ({ collapsed }) => {
  const { user, initialising, error, login, logout } = useContext(UserContext);
  const currentUser = () => {
    if (initialising) {
      return (
        <Typography color={"textSecondary"} noWrap gutterBottom>
          Initialising User...
        </Typography>
      );
    }
    if (error) {
      return (
        <Typography color={"textSecondary"} noWrap gutterBottom>
          Login Failed
        </Typography>
      );
    }
    if (user) {
      return (
        <Typography variant={"h6"} noWrap>
          {user.displayName}
        </Typography>
      )
    }
    return (
      <Typography variant={"h6"} noWrap>
        Welcome
      </Typography>
    )
  }

  return (
    <>
      <div style={{ padding: collapsed ? 8 : 16, transition: "0.3s" }}>
        <Avatar
          style={{
            width: collapsed ? 48 : 60,
            height: collapsed ? 48 : 60,
            transition: "0.3s"
          }}
          src={user ? user.photoURL : null}
        />
        <div style={{ paddingBottom: 16 }} />
        {currentUser()}
      </div>
      <Divider />
    </>
  )
};


NavHeaderEx.propTypes = {
  collapsed: PropTypes.bool
};
NavHeaderEx.defaultProps = {
  collapsed: false
};

export default NavHeaderEx;