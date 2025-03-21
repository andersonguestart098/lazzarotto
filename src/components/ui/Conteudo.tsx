import React from 'react';
import { Box, Typography, Grid, Container, Paper, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, Clock, PenTool as Tool, Check } from 'lucide-react';
import img1 from '../../assets/cerca.jpg';
import img2 from '../../assets/img5.jpg';
import img3 from '../../assets/concertinas.jpg';
import img4 from '../../assets/gradis.jpg';
import img5 from '../../assets/muros.jpg';
import img6 from '../../assets/portoes.jpg';

// Lista de serviços
const services = [
  {
    name: 'Cercas',
    description: 'Cercas de alta segurança para proteção residencial e comercial',
    image: img1,
    icon: <Shield size={24} />,
    features: ['Alta durabilidade', 'Resistente a intempéries', 'Instalação rápida'],
  },
  {
    name: 'Grades',
    description: 'Grades personalizadas que combinam segurança e estética',
    image: img2,
    icon: <Shield size={24} />,
    features: ['Design personalizado', 'Proteção reforçada', 'Acabamento premium'],
  },
  {
    name: 'Concertinas',
    description: 'Máxima proteção perimetral com concertinas profissionais',
    image: img3,
    icon: <Shield size={24} />,
    features: ['Alta dissuasão', 'Instalação certificada', 'Conformidade legal'],
  },
  {
    name: 'Gradis',
    description: 'Gradis elegantes para delimitar espaços com segurança',
    image: img4,
    icon: <Shield size={24} />,
    features: ['Design moderno', 'Alta resistência', 'Versatilidade'],
  },
  {
    name: 'Muros',
    description: 'Construção de muros com excelência em acabamento',
    image: img5,
    icon: <Shield size={24} />,
    features: ['Materiais de qualidade', 'Isolamento acústico', 'Segurança reforçada'],
  },
  {
    name: 'Portões',
    description: 'Portões automáticos e manuais com design exclusivo',
    image: img6,
    icon: <Shield size={24} />,
    features: ['Automação eficiente', 'Estética diferenciada', 'Alta durabilidade'],
  },
];

const Conteudo: React.FC = () => {
  return (
    <Box
      sx={{
        background: '#5B0F00',
        py: 10,
        position: 'relative',
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        minHeight: '400px',
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
            component={motion.h3}
            sx={{
              fontWeight: 500,
              color: '#E6E3DB',
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
            Nossos Serviços
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
            }}
          >
            Soluções completas em segurança e cercamento com qualidade superior e acabamento impecável
          </Typography>
        </Box>

        {/* Grid de Serviços */}
        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => (
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
                  borderRadius: 15,
                  overflow: 'hidden',
                  height: '100%',
                  background: 'linear-gradient(145deg, #ffffff, #f8f8f8)',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.25)',
                  border: '2px solid rgba(91, 15, 0, 0.15)',
                  transition: 'all 0.5s ease',
                  '&:hover': {
                    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
                    transform: 'translateY(-10px) scale(1.02)', // Card zoom effect
                  },
                }}
              >
                <Box sx={{ position: 'relative', height: 200 }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      transition: 'transform 0.5s ease',
                      '.MuiPaper-root:hover &': {
                        transform: 'scale(0.9804)', // Inverse of 1.02 to counteract card scaling
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={service.image}
                      alt={service.name}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
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
                      {service.name}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ p: 3, background: 'transparent' }}>
                  <Typography
                    sx={{
                      color: '#4A2C2A',
                      mb: 2,
                      lineHeight: 1.7,
                      fontSize: '1rem',
                      fontWeight: 400,
                      fontFamily: "'Roboto', sans-serif",
                    }}
                  >
                    {service.description}
                  </Typography>

                  {service.features && (
                    <Box component="ul" sx={{ pl: 0, mb: 3, listStyle: 'none' }}>
                      {service.features.map((feature, idx) => (
                        <Box
                          component="li"
                          key={idx}
                          sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', mr: 1.5 }}>
                            <Check size={14} color="#5B0F00" />
                          </Box>
                          <Typography
                            sx={{
                              color: '#4A2C2A',
                              fontSize: '0.95rem',
                              fontWeight: 400,
                              fontFamily: "'Roboto', sans-serif",
                            }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}

                  <Divider sx={{ mb: 2, borderColor: 'rgba(91, 15, 0, 0.2)' }} />

                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.1 }}
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      background: 'linear-gradient(90deg, #7A1F0A, #5B0F00)',
                      color: '#E6E3DB',
                      padding: '10px 24px',
                      borderRadius: 8,
                      fontWeight: 600,
                      fontSize: '1rem',
                      cursor: 'pointer',
                      fontFamily: "'Montserrat', sans-serif",
                      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #5B0F00, #7A1F0A)',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
                      },
                    }}
                  >
                    <Typography sx={{ mr: 1 }}>Saiba mais</Typography>
                    <ArrowRight size={18} />
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Seção de Destaque */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          sx={{
            mt: 10,
            p: 4,
            borderRadius: 12,
            background: 'rgba(230, 227, 219, 0.1)',
            border: '1px solid rgba(230, 227, 219, 0.2)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: '#E6E3DB',
              mb: 2,
              fontWeight: 600,
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Qualidade e segurança em cada projeto
          </Typography>

          <Typography
            sx={{
              color: '#E6E3DB',
              opacity: 0.9,
              mb: 4,
              maxWidth: '800px',
              mx: 'auto',
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            Nossa equipe de profissionais está pronta para atender suas necessidades com soluções personalizadas e materiais de primeira linha.
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: 'rgba(230, 227, 219, 0.15)',
                    mb: 2,
                    color: '#E6E3DB',
                  }}
                >
                  <Award size={28} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#E6E3DB',
                    mb: 1,
                    fontWeight: 600,
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Garantia de qualidade
                </Typography>
                <Typography
                  sx={{
                    color: '#E6E3DB',
                    opacity: 0.8,
                    fontSize: '0.95rem',
                    fontFamily: "'Roboto', sans-serif",
                  }}
                >
                  Materiais selecionados e acabamento impecável
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: 'rgba(230, 227, 219, 0.15)',
                    mb: 2,
                    color: '#E6E3DB',
                  }}
                >
                  <Clock size={28} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#E6E3DB',
                    mb: 1,
                    fontWeight: 600,
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Entrega no prazo
                </Typography>
                <Typography
                  sx={{
                    color: '#E6E3DB',
                    opacity: 0.8,
                    fontSize: '0.95rem',
                    fontFamily: "'Roboto', sans-serif",
                  }}
                >
                  Compromisso com prazos e cronogramas
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: 'rgba(230, 227, 219, 0.15)',
                    mb: 2,
                    color: '#E6E3DB',
                  }}
                >
                  <Tool size={28} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#E6E3DB',
                    mb: 1,
                    fontWeight: 600,
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Suporte técnico
                </Typography>
                <Typography
                  sx={{
                    color: '#E6E3DB',
                    opacity: 0.8,
                    fontSize: '0.95rem',
                    fontFamily: "'Roboto', sans-serif",
                  }}
                >
                  Assistência completa antes e após a instalação
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Smooth Wave no limite inferior do componente (invertida para "descer") */}
      <Box
        component="svg"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: { xs: '60px', md: '82px' },
          zIndex: 1,
          transform: 'scaleY(-1)',
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

export default Conteudo;