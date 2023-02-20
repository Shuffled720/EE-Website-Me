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



import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';




const navItems = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["People", "/people"],
  ["Research*", "/research"],
  ["Labs*", "/labs"],
];




const Header = () => {
  const theme = useTheme();


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
      <AppBar position='static' >

        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', px: 1, py: 1}}>
          <Box>
            <img src='logo.png' alt='logo_image' width='50' />
          </Box>
          <Box sx={{px:1}} >
            <Typography fontSize='0.7rem' color='white' >
              Department Of Electical Engineering<br/>
              Indian Institute Of Technology
            </Typography>
          </Box>
          <IconButton
            onClick={toggleDrawer('left', true)}
            sx={{ ml: 'auto' }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </AppBar>
      <AppBar position="static" color="secondary" sx={{ display: { xs: 'none', md: 'flex' } }}>

        <Container maxWidth="xl" disableGutters={useMediaQuery(theme.breakpoints.only('xs'))}>


        <Toolbar disableGutters>
          <Box className='logo-div' sx={{ display: { xs: 'none', md: 'flex' }, alignContent: 'center', px: 7, py: 1 }}>
            <img src='logo.png' alt='logo_image' width='80' />
            <Box sx={{ my: 'auto', px: 2 }}>
              <Typography fontSize='1.2rem' fontWeight='bold'>
                DEPARTMENT OF ELECTRICAL ENGINEERING<br />

                INDIAN INSTITUTE OF TECHNOLOGY INDORE
              </Typography>

            </Box>

          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', backgroundColor: '#9d0455', width: '100%' } }}>





            <Drawer
              anchor={'left'}
              open={state['left']}
              onClose={toggleDrawer('left', false)}
            >
              {list('left')}
            </Drawer>

          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
            {navItems.map((item) => (
              <Link className='nav-links'
                to={item[1]}
                key={item}
                style={{
                  color: "#000",
                  marginTop: 30,
                  // paddingLeft: 50,
                  marginLeft: 50,
                  // paddingTop:20,

                  textDecoration: "none",
                  verticalAlign: "bottom",

                }}
              >
                <Typography>
                  {item[0]}
                </Typography>
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








