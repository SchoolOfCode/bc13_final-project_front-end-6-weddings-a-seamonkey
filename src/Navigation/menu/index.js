import * as React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Drawer, List, ListItem, Divider, ListItemIcon } from '@mui/material';
import { Dehaze } from '@mui/icons-material';
import { Auth0Provider } from '@auth0/auth0-react';
import AuthenticationButton from '../../Components/Login-Logout/AuthenticationButton.js';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Appicons } from './appicons.js';
import { Login, Logout, FoodBank } from '@mui/icons-material';



export default function TemporaryDrawer() {
  const { isAuthenticated } = useAuth0();
  const [state, setState] = React.useState(false,);

  const navigate = useNavigate();

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown') {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250}}
      onClick={toggleDrawer(anchor, false)}
      
    >
    <Divider sx={{backgroundColor: "var(--menu-bar)"}}/>
      <List >

        {Appicons.map((element) => (
          <ListItem key={element.id}>
            <Button onClick={() => navigate(element.route)} sx={{color: "var(--font-color)", fontWeight: "Bold"}} startIcon={<ListItemIcon sx={{color: "var(--font-color)", fontSize: "large"}}>{element.icon}</ListItemIcon>}>{element.label}</Button>
          </ListItem>
        ))}

      </List>
      <Divider sx={{backgroundColor: "var(--menu-bar)"}}/>
      <List >

        {[isAuthenticated ?{id:3, label:'Logout', icon: <Logout/>, route:"/Login"}:{id:4, label:'Login', icon: <Login/>, route:"/Login"} , isAuthenticated ?{id:4, icon: <FoodBank/>, label:'List',route:"/List"} : {}].map((text) => (

          <ListItem key={text.id}>
            <Button className="label" onClick={() => navigate(text.route)} sx={{color: "var(--font-color)", fontWeight: "Bold"}} startIcon={<ListItemIcon sx={{color: "var(--font-color)"}}>{text.icon}</ListItemIcon>} >{text.label}</Button>
          </ListItem>
        ))}
      </List>
      <Divider sx={{backgroundColor: "var(--menu-bar)"}}/>
    </Box>
  );

  return (
    <div >
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
        <Box>
          <Button sx={{color: "var(--background-color)"}}  onClick={toggleDrawer(anchor, true)}><Dehaze sx={{fontSize:"xx-large"}}/></Button>
        </Box>  
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{sx:{backgroundColor: "var(--background-color)"}}}
          >
            {list(anchor)}
          </Drawer>
    
        </React.Fragment>
      ))}
    </div>
  );
}
