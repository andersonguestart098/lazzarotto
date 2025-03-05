import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, useScrollTrigger, Slide } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import logo from '../../assets/logo lazzarotto.png';

// Função que detecta o scroll para esconder o Topbar
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
  const [topbarVisible, setTopbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setTopbarVisible(window.scrollY <= 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar fixo e ajustando a posição ao sumir o Topbar */}
      <AppBar
        position="fixed"
        sx={{
          bgcolor: theme.palette.background.default,
          color: theme.palette.text.primary,
          top: topbarVisible ? '36px' : 0, // Se Topbar sumir, Navbar sobe
          height: '100px', // Mantém sempre a altura maior
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'top 0.2s ease-in-out',
          borderBottom: '1px solid #5B0F00',
          zIndex: 1200,
          margin: 0, // Remove qualquer margem extra
          padding: 0, // Remove qualquer padding extra
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', width: '100%', maxWidth: '1200px' }}>
          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="Lazzarotto Telas"
            sx={{ height: '60px', width: 'auto', objectFit: 'contain' }}
          />

          {/* Menu de navegação */}
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Button color="inherit" sx={{ fontWeight: 500 }}>
              Home
            </Button>
            <Button color="inherit" sx={{ fontWeight: 500 }}>
              Serviços
            </Button>
            <Button color="inherit" sx={{ fontWeight: 500 }}>
              Sobre
            </Button>
            <Button color="inherit" sx={{ fontWeight: 500 }}>
              Contato
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Ajuste de espaço para evitar sobreposição no conteúdo */}
      <Box sx={{ height: '90px' }} />
    </>
  );
};

export default Navbar;
