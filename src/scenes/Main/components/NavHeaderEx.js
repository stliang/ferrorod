import React, { useContext } from "react"
import PropTypes from "prop-types"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import { UserContext } from "../../../services/contexts/UserContextProvider"
import { either } from "crocks"

const NavHeaderEx = ({ collapsed }) => {
  const { maybeUser, initialising, error } = useContext(UserContext)
  const UserDisplay = (photoURL, displayName) =>
    <>
      <div style={{ padding: collapsed ? 8 : 16, transition: "0.3s" }}>
        <Avatar
          style={{
            width: collapsed ? 48 : 60,
            height: collapsed ? 48 : 60,
            transition: "0.3s"
          }}
          src={photoURL}
        />
        <div style={{ paddingBottom: 16 }} />
        <Typography variant={"h6"} noWrap>
          {displayName}
        </Typography>
      </div>
      <Divider />
    </>

  const wrap =
    (user) => UserDisplay(user.photoURL, user.displayName)

  const empty =
    () => UserDisplay(null, 'Welcome')

  const userGreeting =
    either(empty, wrap)

  if (initialising) {
    return (
      UserDisplay(null, 'Initialising User...')
    );
  }
  if (error) {
    return (
      UserDisplay(null, 'Login Failed')
    );
  }
  return userGreeting(maybeUser)
};

NavHeaderEx.propTypes = {
  collapsed: PropTypes.bool
};
NavHeaderEx.defaultProps = {
  collapsed: false
};

export default NavHeaderEx;