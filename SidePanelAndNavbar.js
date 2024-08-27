import React from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  styled,
  Grid,
  Select,
  MenuItem
} from '@mui/material';

import MessageIcon from '@mui/icons-material/Message';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import profileImage from './profile.png';

const drawerWidth = 200; // Width of the drawer

const Lists = styled(ListItem)({
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#3D3D4E',
    color: 'white',
  },
});

export default function SidePanelAndNavbar() {
  return (
    <div style={{ display: 'flex' }}>
      {/* CSS baseline to apply default MUI styling */}
      <CssBaseline />

      {/* AppBar for top navigation */}
      <AppBar position="fixed" style={{ zIndex: 1201 }} sx={{ backgroundColor: '#3D3D4E' }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            ZedSync
          </Typography>
          <Stack direction="row" spacing={6}>
            <Badge badgeContent={9} color="primary" sx={{ cursor: 'pointer' }}>
              <MessageIcon />
            </Badge>

            <Badge variant="dot" color="success" sx={{ cursor: 'pointer' }}>
              <NotificationsNoneIcon />
            </Badge>
            <Avatar src={profileImage} />
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Drawer component with permanent variant */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box', // Ensure correct sizing of the drawer
            height: '100vh', // Keep the drawer full height
            top: 64, // Adjust this value based on the height of your AppBar
          },
        }}
        variant="permanent" // Set the drawer to always be open
        anchor="left"
      >
        {/* List of items in the drawer */}
        <List>
          <ListItem>
            <ListItemText primary="MAIN MENU" />
          </ListItem>

          <Divider />

          <Lists>
            <DashboardIcon sx={{ paddingRight: '5px' }} />
            <ListItemText primary="DASHBOARD" />
          </Lists>
          <Lists>
            <PersonIcon sx={{ paddingRight: '5px' }} />
            <ListItemText primary="STUDENTS" />
          </Lists>

          <Lists>
            <LibraryBooksIcon sx={{ paddingRight: '5px' }} />
            <ListItemText primary="PROGRAMS" />
          </Lists>

          <Lists>
            <LibraryBooksIcon sx={{ paddingRight: '5px' }} />
            <ListItemText primary="COURSES" />
          </Lists>
        </List>

        {/* Bottom side of side panel */}
        <List sx={{ marginTop: '250px' }}>
          <Lists>
            <LogoutIcon sx={{ paddingRight: '5px' }} />
            <ListItemText primary="Log out" />
          </Lists>

          <Lists>
            <SettingsIcon sx={{ paddingRight: '5px' }} />
            <ListItemText primary="Setting" />
          </Lists>

          <Lists>
            <HelpIcon sx={{ paddingRight: '5px' }} />
            <ListItemText primary="Help" />
          </Lists>
        </List>
      </Drawer>

     
    </div>
  );
}