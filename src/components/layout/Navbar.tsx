import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery, useScrollTrigger, Slide } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import logo from '../../assets/logo lazzarotto.png';

function HideOnScroll(props: { children: React.ReactElement }) {
  const trigger = useScrollTrigger({ threshold: 50 });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  );
}

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [topbarVisible, setTopbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setTopbarVisible(window.scrollY <= 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: theme.palette.background.default,
          color: theme.palette.text.primary,
          top: topbarVisible ? '36px' : 0,
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'top 0.2s ease-in-out',
          borderBottom: '1px solid #5B0F00',
          zIndex: 1200,
          margin: 0,
          padding: 0,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', width: '100%', maxWidth: '1200px' }}>
          <Box
            component="img"
            src={logo}
            alt="Lazzarotto Telas"
            sx={{ height: '60px', width: 'auto', objectFit: 'contain' }}
          />

          {isMobile ? (
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <Menu />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Button color="inherit" sx={{ fontWeight: 500 }}>Home</Button>
              <Button color="inherit" sx={{ fontWeight: 500 }}>Serviços</Button>
              <Button color="inherit" sx={{ fontWeight: 500 }}>Sobre</Button>
              <Button color="inherit" sx={{ fontWeight: 500 }}>Contato</Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer (Menu lateral) */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250, padding: 2 }}>
          {['Home', 'Serviços', 'Sobre', 'Contato'].map((text) => (
            <ListItem key={text} disablePadding sx={{ marginBottom: 1 }}>
              <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box sx={{ height: '90px' }} />
    </>
  );
};

export default Navbar;
