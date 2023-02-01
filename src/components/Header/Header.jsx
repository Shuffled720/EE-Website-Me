import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';


import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';




const navItems = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["People", "/people"],
  ["Research", "/research"],
  ["Academics", "/academics"],
];




const Header = () => {


  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });





  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };





  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>

        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <Link
                to={item[1]}
                key={item}
                style={{
                  color: "#000",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  padding: "18px",
                  textDecoration: "none",
                  verticalAlign: "bottom",
                }}
              >
                {item[0]}
              </Link>
            </ListItemButton>
          </ListItem>

        ))}
      </List>

    </Box>
  );

  return (

    <>
      <Box className='logo-div' sx={{ display: 'flex', alignContent: 'center', px: 7, py: 1 }}>
        <img className='logo-img' src='logo.png' alt='logo_image' />
        <Box sx={{ my: 'auto' }}>
          <Typography>
            DEPARTMENT OF ELECTRICAL ENGINEERING
          </Typography>
          <Typography>
            INDIAN INSTITUTE OF TECHNOLOGY INDORE
          </Typography>

        </Box>
      </Box>
      <AppBar position="static" color="primary" >
        <Container maxWidth="xl">
          <Toolbar disableGutters>


            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>


              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer('left', true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
              >
                {list('left')}
              </Drawer>

            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {navItems.map((item) => (
                <Link
                  to={item[1]}
                  key={item}
                  style={{
                    color: "#fff",

                    paddingLeft: 50,
                    py: 4,
                    textDecoration: "none",
                    verticalAlign: "bottom",
                  }}
                >
                  {item[0]}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Header;








