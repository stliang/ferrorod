import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Typography from '@material-ui/core/Typography';
import { Route, MemoryRouter, Redirect } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Router from '../../components/Router';
import ListItemLink from '../../components/ListItemLink';


// import { UserContext } from '../../services/contexts/UserContextProvider';
import * as ROUTES from '../../components/Router/routes';

// const PrivilegedRoute = ({ component: Component, privileges, ...rest }) => {
//   const { customClaims } = useContext(UserContext);
//   const trust = privileges.includes(customClaims.userRole);
//   return (
//       <Route {...rest} >
//           {
//               trust
//                   ?
//                   (<Component />)
//                   :
//                   (<Redirect to={{ pathname: ROUTES.SIGN_IN.path }} />)
//           }
//       </Route>
//   );
// }

// function ListItemLink(props) {
//   const { icon, primary, to } = props;

//   const renderLink = React.useMemo(
//     () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
//     [to],
//   );

//   return (
//     <li>
//       <ListItem button component={renderLink}>
//         {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
//         <ListItemText primary={primary} />
//       </ListItem>
//     </li>
//   );
// }

// ListItemLink.propTypes = {
//   icon: PropTypes.element,
//   primary: PropTypes.string.isRequired,
//   to: PropTypes.string.isRequired,
// };

const useStyles = makeStyles({
  root: {
    width: 360,
  },
});

export default function POC() {
  const classes = useStyles();

  return (
    // <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
      <div className={classes.root}>
        {/* <Router/> */}
        {/* <Route>
          {({ location }) => (
            <Typography gutterBottom>Current route: {location.pathname}</Typography>
          )}
        </Route> */}
        <Paper elevation={0}>
          <List aria-label="main mailbox folders">
            <ListItemLink to="/inbox" primary="Inbox" icon={<InboxIcon />} />
            <ListItemLink to="/drafts" primary="Drafts" icon={<DraftsIcon />} />
          </List>
          <Divider />
          <List aria-label="secondary mailbox folders">
            <ListItemLink to="/trash" primary="Trash" />
            <ListItemLink to="/spam" primary="Spam" />
            <ListItemLink to={ROUTES.LANDING.path} primary="Landing" />
            <ListItemLink to={ROUTES.HOME.path} primary="Home" />
            <ListItemLink to={ROUTES.SIGN_IN.path} primary="Sign In" />
          </List>
        </Paper>
      </div>
    // </MemoryRouter>
  );
}