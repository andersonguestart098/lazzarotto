import React from 'react';
import { Box, Typography, Grid, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import loja1 from '../../assets/loja3.jpg'; // Imagem para Bento Gonçalves
import loja2 from '../../assets/loja2.jpg'; // Imagem para Garibaldi
import loja3 from '../../assets/loja1.jpg'; // Imagem para Porto Alegre

// Dados das lojas
const lojas = [
  {
    cidade: 'Bento Gonçalves',
    endereco: 'Avenida Nelson Carraro, 594 - Bairro Santo Antão - Bento Gonçalves - RS',
    telefone: '(54) 3452-1234',
    mapaLink: 'https://maps.google.com/?q=Avenida+Nelson+Carraro,+594+-+Bairro+Santo+Antão,+Bento+Gonçalves+-+RS',
    imagem: loja1,
  },
  {
    cidade: 'Garibaldi',
    endereco: 'Av independência 1244 - Cairú - Em frente à Tramontina - Garibaldi - RS',
    telefone: '(54) 3462-5678',
    mapaLink: 'https://maps.google.com/?q=Av+independência+1244+-+Cairú+-+Em+frente+à+Tramontina,+Garibaldi+-+RS',
    imagem: loja2,
  },
  {
    cidade: 'Porto Alegre',
    endereco: 'Rua Edu Chaves, 493 - São João, Porto Alegre - RS',
    telefone: '(51) 3217-9100',
    mapaLink: 'https://maps.google.com/?q=Rua+Edu+Chaves,+493+-+São+João,+Porto+Alegre+-+RS',
    imagem: loja3,
  },
];

// Variantes para animações
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  hover: { y: -10, scale: 1.02, transition: { duration: 0.4 } },
};

const Lojas: React.FC = () => {
  return (
    <Box
      sx={{
        background: '#5B0F00',
        py: 8,
        position: 'relative',
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Cabeçalho da Seção */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{ textAlign: 'center', mb: 6 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.5rem', md: '2.125rem' },
              fontWeight: 500,
              color: '#E6E3DB',
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: '0.02em',
              mb: 1.5,
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 50,
                height: 2,
                background: 'rgba(230, 227, 219, 0.5)',
                borderRadius: 2,
              },
            }}
          >
            Nossas Lojas
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: '1rem', md: '1.25rem' },
              color: '#E6E3DB',
              maxWidth: '650px',
              mx: 'auto',
              fontWeight: 400,
              lineHeight: 1.5,
              opacity: 0.8,
              fontFamily: "'Roboto', sans-serif",
              mt: 2,
            }}
          >
            Explore nossas unidades em Bento Gonçalves, Garibaldi e Porto Alegre. Segurança e qualidade ao seu alcance.
          </Typography>
        </Box>

        {/* Grid de Lojas */}
        <Grid container spacing={3} justifyContent="center">
          {lojas.map((loja, index) => (
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              lg={4}
              key={index}
              component={motion.div}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 15,
                  overflow: 'hidden',
                  background: 'linear-gradient(145deg, #ffffff, #f8f8f8)',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.25)',
                  border: '2px solid rgba(91, 15, 0, 0.15)',
                  transition: 'all 0.5s ease',
                  '&:hover': {
                    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
                    transform: 'translateY(-10px) scale(1.02)', // Card zoom effect
                  },
                  maxWidth: '100%',
                }}
              >
                {/* Imagem com overlay */}
                <Box sx={{ position: 'relative', height: 300 }}>
                  <Box
                    component="img"
                    src={loja.imagem}
                    alt={`Loja em ${loja.cidade}`}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease', // Match the card's transition duration
                      '.MuiGrid-item:hover &': {
                        transform: 'scale(0.9804)', // Inverse of 1.02 to cancel out the card's scaling
                      },
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(91, 15, 0, 0.7) 0%, transparent 60%)',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 20,
                      left: 20,
                      background: 'linear-gradient(45deg, #7A1F0A, #5B0F00)',
                      padding: '10px 20px',
                      borderRadius: 10,
                      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                        fontWeight: 600,
                        color: '#E6E3DB',
                        fontFamily: "'Montserrat', sans-serif",
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
                      }}
                    >
                      {loja.cidade}
                    </Typography>
                  </Box>
                </Box>

                {/* Conteúdo do Card */}
                <Box sx={{ p: 4, background: 'transparent' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <MapPin size={20} color="#5B0F00" style={{ marginRight: 10 }} />
                    <Typography
                      sx={{
                        color: '#4A2C2A',
                        fontSize: '0.95rem',
                        fontWeight: 400,
                        fontFamily: "'Roboto', sans-serif",
                      }}
                    >
                      {loja.endereco}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Phone size={20} color="#5B0F00" style={{ marginRight: 10 }} />
                    <Typography
                      sx={{
                        color: '#4A2C2A',
                        fontSize: '0.95rem',
                        fontWeight: 400,
                        fontFamily: "'Roboto', sans-serif",
                      }}
                    >
                      {loja.telefone}
                    </Typography>
                  </Box>

                  <Button
                    component={motion.button}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      background: 'linear-gradient(90deg, #7A1F0A, #5B0F00)',
                      color: '#E6E3DB',
                      padding: '10px 24px',
                      borderRadius: 8,
                      fontWeight: 600,
                      fontSize: '1rem',
                      fontFamily: "'Montserrat', sans-serif",
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #5B0F00, #7A1F0A)',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
                      },
                    }}
                    onClick={() => window.open(loja.mapaLink, '_blank')}
                  >
                    Ver no Mapa
                    <ArrowRight size={18} style={{ marginLeft: 10 }} />
                  </Button>
                </Box>
              </Box>
              
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Lojas;