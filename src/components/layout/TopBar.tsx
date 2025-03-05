import React, { useState, useEffect } from 'react';
import { Box, Typography, Slide } from '@mui/material';

const TopBar: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY === 0;
      setVisible(isAtTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Slide appear={false} direction="down" in={visible}>
      <Box
        sx={{
          bgcolor: '#F5F5F5',
          color: '#5B0F00',
          py: 1,
          textAlign: 'center',
          fontSize: '14px',
          fontWeight: 'bold',
          position: 'fixed',
          width: '100%',
          top: 0,
          zIndex: 1300,
          height: '34px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
          transition: 'top 0.3s ease-in-out',
        }}
      >
        <Typography variant="body2" sx={{ fontSize: 13 }}>
          +55 (49) 9918-7070 | contato@lazzarotto.com.br
        </Typography>
      </Box>
    </Slide>
  );
};

export default TopBar;
