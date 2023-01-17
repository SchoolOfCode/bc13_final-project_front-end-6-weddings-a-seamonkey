import * as React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import { Box, Button, Drawer, List, ListItem } from '@mui/material';
import { Dehaze } from '@mui/icons-material';


export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false,);

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
      <List >
        {[{id:0, label:'Search', route:"/"}, {id:1, label:'About', route:"/about"}, {id:2, label:'Instructions', route:"/instructions"}].map((text) => (
          <ListItem key={text.id}>
            <Link className="label" to={text.route}>{text.label}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div >
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
        <Box>
          <Button sx={{color: "var(--background-color)", paddingRight: "10%"}}  onClick={toggleDrawer(anchor, true)}><Dehaze sx={{fontSize:"xx-large", marginRight:"20%"}}/></Button>
        </Box>  
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{sx: {backgroundColor: "var(--background-color)"}}}
          >
            {list(anchor)}
          </Drawer>
    
        </React.Fragment>
      ))}
    </div>
  );
}
