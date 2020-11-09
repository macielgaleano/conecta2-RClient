import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
import ListItem from "@material-ui/core/ListItem";
import { useSelector } from "react-redux";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
<<<<<<< Updated upstream
import Profile from "./Profile";
import { Link } from "react-router-dom";
import useFetchDeleteToken from "../../hooks/useFetchDeleteToken";
=======
import Profile from "./ProfileNav";
>>>>>>> Stashed changes

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

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
        style={{ background: "#ff4b2b" }}
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
          <Link to="/" style={{ color: "black" }}>
            <ListItem button key={"Inicio"}>
              <ListItemIcon>
                <HomeIcon style={{ color: "#ff4b2b" }}></HomeIcon>
              </ListItemIcon>
              <ListItemText primary={"Inicio"} />
            </ListItem>
          </Link>
          <Link
            to={"/users/" + useSelector((state) => state.user.user[1].username)}
            style={{ color: "black" }}
          >
            <ListItem button key={"Mi perfil"}>
              <ListItemIcon style={{ color: "#ff4b2b" }}>
                <AccountCircleIcon></AccountCircleIcon>
              </ListItemIcon>
              <ListItemText primary={"Mi perfil"} />
            </ListItem>
          </Link>
          <Link to="/configuration" style={{ color: "black" }}>
            <ListItem button key={"configuracion"}>
              <ListItemIcon>
                <SettingsIcon style={{ color: "#ff4b2b" }}></SettingsIcon>
              </ListItemIcon>
              <ListItemText primary={"Configuracion"} />
            </ListItem>
          </Link>
          <Link
            to="/registro"
            style={{ color: "black" }}
            onClick={() => setDeleteToken(true)}
          >
            <ListItem button key={"salir"}>
              <ListItemIcon style={{ color: "#ff4b2b" }}>
                <ExitToAppIcon></ExitToAppIcon>
              </ListItemIcon>
              <ListItemText primary={"Salir"} />
            </ListItem>
          </Link>
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
