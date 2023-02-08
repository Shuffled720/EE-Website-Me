import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Typography, Grid } from "@mui/material";

const drawerWidth = "50%";
const navItems = [
  ["Home", "/home"],
  ["About Us", "/about"],
  ["People", "/people"],
  ["Research", "/research"],
  ["Academics", "/academics"],
];
function DrawerAppBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "rgb(4,47,82)",
        color: "white",
        width: 1,
        height: 1,
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <a
                href={item[1]}
                style={{ textDecoration: "none", color: "white" }}
              >
                <ListItemText primary={item[0]} />
              </a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

//   React.useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 200) {
//         document.querySelector(".header").classList.remove("bg-transparent");
//         document.querySelector(".header").classList.add("bg-dark");
//         // document.querySelector(".logo").style.display = "flex";
//       } else {
//         document.querySelector(".header").classList.add("bg-transparent");
//         document.querySelector(".header").classList.remove("bg-dark");
//         // document.querySelector(".logo").style.display = "none";
//       }
//     });
//   }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          boxShadow: "none",
          height: "15vh",
          backgroundColor: "rgb(4,47,82)",
          justifyContent: "center",
        }}
        className="header"

      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>

            <Box sx={{ display: { md: "none", marginTop: "10px" } }}>
              <a href="/" style={{ textDecoration: "none" }}>
                <img
                  src={'logo.png'}
                  alt="logo"
                  style={{
                    width: "150px",
                  }}
                />
              </a>
            </Box>
            <Box >
              <Typography
                align="left"
                sx={{
                  fontSize: "1.5rem",
                  fontFamily: "Calibri",
                  fontWeight: "600",
                  marginLeft: 3,
                  display: { sm: "block", md: "none" }


                }}
              >
                DEPARTMENT OF ELECTRICAL ENGINEERING
              </Typography>
              <Typography
                align="left"
                sx={{
                  fontSize: "1.1rem",
                  fontFamily: "Calibri",
                  fontWeight: "600",
                  marginLeft: 3,
                  display: { sm: "block", md: "none" }

                }}
              >
                INDIAN INSTITUTE OF TECHNOLOGY
              </Typography>
            </Box>
          </Box>


          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" }, float: "right" }}
          >
            <MenuIcon sx={{ color: "#fff", textAlign: "right" }} />
          </IconButton>
          <Grid
            container
            justifyContent="left"
            direction="row"
            alignItems="center"

          >
            <Grid item >
              <Box
                sx={{ marginTop: "10px", display: { xs: "none", md: "block" } }}>
                <a href="/l">
                  <img
                    src={'logo.png'}
                    alt=""
                    style={{
                      width: "5vw",
                    }}
                  />
                </a>
              </Box>
            </Grid>
            <Grid item  >
              <Typography
                align="left"
                sx={{
                  fontSize: "1.5rem",
                  fontFamily: "Calibri",
                  fontWeight: "600",
                  marginLeft: 3
                  , display: { xs: "none", md: "block" }
                }}
              >
                DEPARTMENT OF ELECTRICAL ENGINEERING
              </Typography>
              <Typography
                align="left"
                sx={{
                  fontSize: "1.1rem",
                  fontFamily: "Calibri",
                  fontWeight: "600",
                  marginLeft: 3
                  , display: { xs: "none", md: "block" }
                }}
              >
                INDIAN INSTITUTE OF TECHNOLOGY
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            justifyContent="right"
            direction="row"
            height="100%"
            alignItems="flex-end"
          >
            <Grid item>
              <Box sx={{ margin: 1, display: { xs: "none", md: "block" } }}>
                {navItems.map((item) => (
                  <a
                    href={item[1]}
                    key={item}
                    style={{
                      color: "#fff",
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      padding: "18px",
                      textDecoration: "none",
                      verticalAlign: "bottom",
                    }}
                  >
                    {item[0]}
                  </a>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          //   container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
