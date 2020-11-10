import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useSelector } from "react-redux";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Profile from "./ProfileNav";
import useFetchDeleteToken from "../../hooks/useFetchDeleteToken";
import NavbarItem from "./NavbarItem";
import { makeStylesConfig } from "../../utils/makeStyles";

const drawerWidth = 240;

const useStyles = makeStylesConfig;

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [deleteToken, setDeleteToken] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  useFetchDeleteToken(deleteToken);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ background: "#000" }}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Conecta2
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <Profile></Profile>
        <List>
          <NavbarItem component={HomeIcon} route={"/"} text={"Inicio"}></NavbarItem>
          <NavbarItem
            component={AccountCircleIcon}
            route={"/users/" + useSelector((state) => state.user.user[1].username)}
            text={"Mi perfil"}
          ></NavbarItem>
          <NavbarItem
            component={SettingsIcon}
            route={"/configuration"}
            text={"Configuracion"}
          ></NavbarItem>
          <NavbarItem
            component={ExitToAppIcon}
            route={"/registro"}
            text={"Salir"}
            onClick={() => setDeleteToken(true)}
          ></NavbarItem>
        </List>
        <Divider />
        <List></List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      ></main>
    </div>
  );
}
