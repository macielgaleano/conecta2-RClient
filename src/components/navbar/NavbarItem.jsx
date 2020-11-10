import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export default function NavbarItem({ component: Component, route, text }) {
  return (
    <div>
      <Link to={route} style={{ color: "black" }}>
        <ListItem button key={text}>
          <ListItemIcon>
            <Component style={{ color: "#ff4b2b" }} />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      </Link>
    </div>
  );
}
