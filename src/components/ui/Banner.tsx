import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import bannerImage1 from '../../assets/banner1.png'; // Importando banner1.png
import bannerImage2 from '../../assets/loja2.jpg';  // Importando loja2.jpg (principal)
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Banner: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Array de imagens
  const images = [bannerImage2, bannerImage1];

  // Array de textos correspondentes a cada imagem
  const texts = [
    {
      title: (
        <>
          Soluções<br />Completas em<br />Segurança
        </>
      ),
      subtitle: (
        <>
          Qualidade superior e<br />acabamento impecável para<br />sua segurança
        </>
      ),
    },
    {
      title: (
        <>
          Proteção<br />Moderna e<br />Confiável
        </>
      ),
      subtitle: (
        <>
          Tecnologia avançada para<br />sua tranquilidade e<br />bem-estar
        </>
      ),
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      {/* Banner Image with Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'relative', width: '100%' }}
        >
          <Box
            component="img"
            src={images[currentImage]}
            alt={`Banner ${currentImage + 1}`}
            sx={{
              width: '100%',
              height: { xs: '350px', sm: '450px', md: '550px' }, // Mantive a altura ajustada
              objectFit: 'cover', // Preenche o espaço sem distorcer
              objectPosition: currentImage === 0 ? 'center 20%' : 'center 50%', // Desci a loja2.jpg para mostrar mais a base da fachada
              display: 'block',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          left: { xs: '10px', sm: '30px' },
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'white',
          bgcolor: 'rgba(0,0,0,0.5)',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
          zIndex: 2,
          p: '15px',
          borderRadius: '50%',
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: { xs: '10px', sm: '30px' },
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'white',
          bgcolor: 'rgba(0,0,0,0.5)',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
          zIndex: 2,
          p: '15px',
          borderRadius: '50%',
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

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
          padding: { xs: '1rem 0 1rem 2rem', sm: '2rem 0 2rem 3rem' },
        }}
      >
        <Box
          sx={{
            maxWidth: '1200px',
            width: '100%',
            marginLeft: { xs: '0.3rem', md: '0.8rem' },
            paddingBottom: '0.5rem',
            paddingLeft: 0,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`title-${currentImage}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  textShadow:
                    '2px 2px 0 rgba(0,0,0,0.5), -1px -1px 0 rgba(255,255,255,0.1), 3px 3px 6px rgba(0,0,0,0.4)',
                  textAlign: 'left',
                  mb: 2,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.8rem' },
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                  position: 'relative',
                  pl: 0,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: '-15px',
                    width: '100%',
                    height: '3px',
                    background: 'linear-gradient(to right, #fff, rgba(255,255,255,0))',
                    borderRadius: '2px',
                  },
                }}
              >
                {texts[currentImage].title}
              </Typography>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`subtitle-${currentImage}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
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
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem' },
                  lineHeight: 1.6,
                  letterSpacing: '0.01em',
                  mt: { xs: 2, md: 3 },
                  position: 'relative',
                  pl: 0,
                }}
              >
                {texts[currentImage].subtitle}
              </Typography>
            </motion.div>
          </AnimatePresence>
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
          height: { xs: '60px', md: '82px' },
        }}
      >
        <path
          fill="#5B0F00"
          d="M0,256 C120,224 240,192 360,200 C480,208 600,256 720,272 C840,288 960,256 1080,240 C1200,224 1320,240 1440,256 V321 H0 Z"
          style={{ filter: 'blur(2px)' }}
        />
      </Box>

      {/* Dots Indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: '2rem', md: '4rem' },
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.75rem',
          zIndex: 2,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentImage(index)}
            sx={{
              width: '0.75rem',
              height: '0.75rem',
              borderRadius: '50%',
              backgroundColor: index === currentImage ? 'white' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: index === currentImage ? 'scale(1.25)' : 'scale(1)',
              '&:hover': {
                backgroundColor: index === currentImage ? 'white' : 'rgba(255,255,255,0.7)',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Banner;