import React from 'react';
import { Box, Typography, Grid, Container, Paper, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import loja1 from '../../assets/loja3.jpg'; // Imagem para Bento Gonçalves
import loja2 from '../../assets/loja2.jpg'; // Imagem para Garibaldi
import loja3 from '../../assets/loja1.jpg'; // Imagem para Porto Alegre

// Dados das lojas com endereços reais
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

const Lojas: React.FC = () => {
  return (
    <Box
      sx={{
        background: '#5B0F00',
        py: 10,
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
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          sx={{ textAlign: 'center', mb: 5 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 500,
              color: '#E6E3DB',
              fontFamily: "'Montserrat', sans-serif",
              position: 'relative',
              display: 'inline-block',
              mb: 1.5,
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
              color: '#E6E3DB',
              maxWidth: '650px',
              mx: 'auto',
              fontWeight: 400,
              lineHeight: 1.5,
              opacity: 0.8,
              mt: 2,
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            Visite uma de nossas lojas em Bento Gonçalves, Garibaldi ou Porto Alegre e conheça nossas soluções em segurança e cercamento.
          </Typography>
        </Box>

        {/* Grid de Lojas */}
        <Grid container spacing={4}>
          {lojas.map((loja, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={index}
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 12,
                  overflow: 'hidden',
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.95)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <Box sx={{ position: 'relative', height: 240 }}>
                  <Box
                    component="img"
                    src={loja.imagem}
                    alt={`Loja em ${loja.cidade}`}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.95)',
                      transition: 'transform 0.6s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(91, 15, 0, 0.4) 0%, transparent 70%)',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      left: 16,
                      background: 'rgba(91, 15, 0, 0.7)',
                      padding: '8px 16px',
                      borderRadius: 8,
                      color: '#E6E3DB',
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        fontFamily: "'Montserrat', sans-serif",
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      {loja.cidade}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <MapPin size={18} color="#5B0F00" style={{ marginRight: 8 }} />
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
                    <Phone size={18} color="#5B0F00" style={{ marginRight: 8 }} />
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

                  <Divider sx={{ mb: 2, borderColor: 'rgba(91, 15, 0, 0.2)' }} />

                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.05 }}
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      background: '#7A1F0A',
                      color: '#E6E3DB',
                      padding: '8px 16px',
                      borderRadius: 6,
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontFamily: "'Montserrat', sans-serif",
                      transition: 'background 0.3s ease',
                      '&:hover': {
                        background: '#5B0F00',
                      },
                    }}
                    onClick={() => window.open(loja.mapaLink, '_blank')}
                  >
                    <Typography sx={{ mr: 1 }}>Ver no Mapa</Typography>
                    <ArrowRight size={16} />
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Lojas;