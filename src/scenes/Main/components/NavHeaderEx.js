import React, { useContext } from "react"
import Avatar from "@material-ui/core/Avatar"
import curry from 'crocks/helpers/curry'
import Divider from "@material-ui/core/Divider"
import { either } from "crocks"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import { UserContext } from "../../../services/contexts/UserContextProvider"

const UserDisplay = curry(
  (collapsed, photoURL, displayName) =>
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
)

const NavHeaderEx = ({ collapsed }) => {
  const { maybeUser, initialising, error } = useContext(UserContext)
  const UserDisplay2 = UserDisplay(collapsed)

  const wrap =
    (user) => UserDisplay2(user.photoURL, user.displayName)

  const empty =
    () => UserDisplay2(null, 'Welcome')

  const userGreeting =
    either(empty, wrap)

  if (initialising) {
    return (
      UserDisplay2(null, 'Initialising User...')
    );
  }
  if (error) {
    return (
      UserDisplay2(null, 'Login Failed')
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