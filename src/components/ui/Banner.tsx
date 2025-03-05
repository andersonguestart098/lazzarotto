import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import bannerImage from '../../assets/banner1.png';

const Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      {/* Banner Image */}
      <Box
        sx={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '450px',
          width: '100%',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      />
  
      {/* Animated Text Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.3)',
          padding: '2rem 0 2rem 0.3rem', // Kept the current left padding
        }}
      >
        <Box sx={{ 
          maxWidth: '1200px', 
          width: '100%', 
          marginLeft: { xs: '0.3rem', md: '0.8rem' }, // Kept the current margin
          paddingBottom: '0.5rem', // Kept the paddingBottom
          paddingLeft: 0 // No additional left padding in this Box
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ 
              opacity: isVisible ? 1 : 0, 
              x: isVisible ? 0 : -50 
            }}
            transition={{ 
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut"
            }}
          >
            <Typography 
              variant="h2" 
              component="h1"
              sx={{ 
                color: 'white',
                fontWeight: 700,
                textShadow: '2px 2px 0 rgba(0,0,0,0.5), -1px -1px 0 rgba(255,255,255,0.1), 3px 3px 6px rgba(0,0,0,0.4)',
                textAlign: 'left',
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.8rem' },
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                textTransform: 'uppercase',
                position: 'relative',
                pl: 0, // Kept padding-left at 0
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: '-15px', // Kept the gap between text and underline
                  width: '100%', // Spans the full width of the text
                  height: '3px',
                  background: 'linear-gradient(to right, #fff, rgba(255,255,255,0))', // Changed to fade from white to transparent from left to right
                  borderRadius: '2px',
                }
              }}
            >
              Soluções<br />
              Completas em<br />
              Segurança
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ 
              opacity: isVisible ? 1 : 0, 
              x: isVisible ? 0 : -50 
            }}
            transition={{ 
              duration: 0.8,
              delay: 0.6,
              ease: "easeOut"
            }}
          >
            <Typography 
              variant="h5" 
              component="h2"
              sx={{ 
                color: 'rgba(255,255,255,0.95)',
                fontWeight: 300,
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                textAlign: 'left',
                maxWidth: '500px',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.6,
                letterSpacing: '0.01em',
                mt: 3,
                position: 'relative',
                pl: 0, // Kept padding-left at 0
                // Removed '&::before' to eliminate the vertical line effect
              }}
            >
              Qualidade superior e<br />
              acabamento impecável para<br />
              sua segurança
            </Typography>
          </motion.div>
        </Box>
      </Box>
  
      {/* Smooth Wave */}
      <Box
        component="svg"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        sx={{
          position: 'absolute',
          bottom: -1,
          left: 0,
          width: '100%',
          height: '82px',
        }}
      >
        <path
          fill="#5B0F00"
          d="M0,256 C120,224 240,192 360,200 C480,208 600,256 720,272 C840,288 960,256 1080,240 C1200,224 1320,240 1440,256 V321 H0 Z"
          style={{ filter: 'blur(2px)' }}
        />
      </Box>
    </Box>
  );
};

export default Banner;