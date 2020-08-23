import React, { useContext } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { UserContext } from "../../../services/contexts/UserContextProvider";

// import Maybe from 'crocks/Maybe'
// const { Nothing } = Maybe

const NavHeaderEx = ({ collapsed }) => {
  const { maybeUser, initialising, error } = useContext(UserContext);
  const user = maybeUser.option(null)

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