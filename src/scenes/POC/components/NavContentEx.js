import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";

import ListItemLink from '../../../components/ListItemLink';
import * as ROUTES from '../../../components/Router/routes';

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
    route: ROUTES.HOME.path,
    primaryText: "Starred",
    icon: "star"
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
const NavContentEx = () => (
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
);

NavContentEx.propTypes = {};
NavContentEx.defaultProps = {};

export default NavContentEx;