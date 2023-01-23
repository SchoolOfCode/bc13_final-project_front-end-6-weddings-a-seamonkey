import * as React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Box, Button, Drawer, List, ListItem } from '@mui/material';
import { Dehaze } from '@mui/icons-material';
import { Auth0Provider } from '@auth0/auth0-react';
import AuthenticationButton from '../../Components/Login-Logout/AuthenticationButton.js';

import { useAuth0 } from '@auth0/auth0-react';

export default function TemporaryDrawer() {
  const { isAuthenticated } = useAuth0();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown') {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{ width: 250 }} onClick={toggleDrawer(anchor, false)}>
      <List>
        {[
          { id: 0, label: 'Search', route: '/' },
          { id: 1, label: 'About', route: '/about' },
          { id: 2, label: 'Instructions', route: '/instructions' },
          isAuthenticated
            ? { id: 3, label: 'Logout', route: '/Login' }
            : { id: 4, label: 'Login', route: '/Login' },
          isAuthenticated ? { id: 4, label: 'List', route: '/List' } : {},
        ].map((text) => (
          <ListItem key={text.id}>
            <Link className="label" to={text.route}>
              {text.label}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Box>
            <Button
              aria-label="Menu-button"
              sx={{ color: 'var(--background-color)' }}
              onClick={toggleDrawer(anchor, true)}
            >
              <Dehaze sx={{ fontSize: 'xx-large' }} />
            </Button>
          </Box>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{ sx: { backgroundColor: 'var(--background-color)' } }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
