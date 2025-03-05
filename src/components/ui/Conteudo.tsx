import React from 'react';
import { Box, Typography, Grid, Container, Paper, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, Clock, PenTool as Tool } from 'lucide-react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';

// Lista de serviços
const services = [
  {
    name: 'Cercas',
    description: 'Cercas de alta segurança para proteção residencial e comercial',
    image: img1,
    icon: <Shield size={20} />,
    features: ['Alta durabilidade', 'Resistente a intempéries', 'Instalação rápida']
  },
  {
    name: 'Grades',
    description: 'Grades personalizadas que combinam segurança e estética',
    image: img2,
    icon: <Shield size={20} />,
    features: ['Design personalizado', 'Proteção reforçada', 'Acabamento premium']
  },
  {
    name: 'Concertinas',
    description: 'Máxima proteção perimetral com concertinas profissionais',
    image: img3,
    icon: <Shield size={20} />,
    features: ['Alta dissuasão', 'Instalação certificada', 'Conformidade legal']
  },
  {
    name: 'Gradis',
    description: 'Gradis elegantes para delimitar espaços com segurança',
    image: img4,
    icon: <Shield size={20} />,
    features: ['Design moderno', 'Alta resistência', 'Versatilidade']
  },
  {
    name: 'Muros',
    description: 'Construção de muros com excelência em acabamento',
    image: img5,
    icon: <Shield size={20} />,
    features: ['Materiais de qualidade', 'Isolamento acústico', 'Segurança reforçada']
  },
  {
    name: 'Portões',
    description: 'Portões automáticos e manuais com design exclusivo',
    image: img6,
    icon: <Shield size={20} />,
    features: ['Automação eficiente', 'Estética diferenciada', 'Alta durabilidade']
  }
];

const Conteudo: React.FC = () => {
  return (
    <Box
      sx={{
        background: '#5B0F00', // Fundo da seção (mantido conforme identidade visual)
        py: 10,
        position: 'relative',
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }}
    >
      {/* Elementos decorativos */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 10% 20%, rgba(0,0,0,0.15) 0%, transparent 20%)',
          pointerEvents: 'none',
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
         {/* Cabeçalho da Seção */}
  <Box 
    component={motion.div}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    sx={{ textAlign: 'center', mb: 5 }} // 🔹 Margem inferior menor para menos destaque
  >
    <Typography 
      variant="h4"  // 🔹 Menor do que "h3" para menor destaque
      component={motion.h3}
      sx={{ 
        fontWeight: 500, // 🔹 Menos impacto visual
        color: '#E6E3DB',
        position: 'relative',
        display: 'inline-block',
        mb: 1.5, // 🔹 Redução da margem inferior
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: -8, // 🔹 Um pouco mais perto do texto
          left: '50%',
          transform: 'translateX(-50%)',
          width: 50, // 🔹 Linha decorativa menor
          height: 2, // 🔹 Um pouco mais fina
          background: 'rgba(230, 227, 219, 0.5)', // 🔹 Reduzida opacidade
          borderRadius: 2
        }
      }}
    >
      Nossos Serviços
    </Typography>

    <Typography
      variant="h6"
      sx={{
        color: '#E6E3DB',
        maxWidth: '650px', // 🔹 Menos largura para melhor encaixe
        mx: 'auto',
        fontWeight: 400,
        lineHeight: 1.5,
        opacity: 0.8,
        mt: 2 // 🔹 Pequeno espaçamento extra entre o título e o subtítulo
      }}
    >
      Soluções completas em segurança e cercamento com qualidade superior e acabamento impecável
    </Typography>
        </Box>

        {/* Grid de Serviços */}
        <Grid container spacing={4}>
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
                  borderRadius: 3,
                  overflow: 'hidden',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  background: 'transparent',
                  backdropFilter: 'blur(5px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.25)',
                  },
                }}
              >
                <Box sx={{ position: 'relative', height: 240 }}>
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.name}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.7s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      }
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)',
                    }}
                  />
                  <Box 
                    sx={{ 
                      position: 'absolute', 
                      bottom: 0, 
                      left: 0, 
                      p: 3,
                      width: '100%',
                    }}
                  >
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        mb: 1
                      }}
                    >
                      <Box 
                        sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 36,
                          height: 36,
                          borderRadius: '50%',
                          background: 'rgba(230, 227, 219, 0.2)',
                          backdropFilter: 'blur(5px)',
                          mr: 2,
                          color: '#E6E3DB'
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          color: '#E6E3DB', 
                          fontWeight: 'bold',
                          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                        }}
                      >
                        {service.name}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                
                <Box 
                  sx={{ 
                    p: 3, 
                    bgcolor: 'rgba(255,255,255,0.95)',
                    borderTop: '3px solid #E6E3DB'
                  }}
                >
                  <Typography 
                    sx={{ 
                      color: '#5B0F00', 
                      mb: 2.5, 
                      lineHeight: 1.6, 
                      fontSize: '1rem',
                      fontWeight: 500
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
                          sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            mb: 1.5 
                          }}
                        >
                          <Box
                            sx={{
                              minWidth: 8,
                              height: 8,
                              borderRadius: '50%',
                              background: '#5B0F00',
                              mr: 1.5
                            }}
                          />
                          <Typography 
                            sx={{ 
                              color: '#5B0F00', 
                              fontSize: '0.95rem',
                              fontWeight: 500
                            }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}
                  
                  <Divider sx={{ mb: 2, opacity: 0.3 }} />
                  
                  <Box 
                    component={motion.div} 
                    whileHover={{ x: 5 }} 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      color: '#5B0F00', 
                      fontWeight: 600, 
                      cursor: 'pointer',
                      mt: 2
                    }}
                  >
                    <Typography sx={{ mr: 1 }}>Saiba mais</Typography>
                    <ArrowRight size={16} />
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
        
        {/* Seção de destaque */}
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          sx={{ 
            mt: 10, 
            p: 4, 
            borderRadius: 3, 
            background: 'rgba(230, 227, 219, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(230, 227, 219, 0.2)',
            textAlign: 'center'
          }}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#E6E3DB', 
              mb: 2,
              fontWeight: 600
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
              mx: 'auto'
            }}
          >
            Nossa equipe de profissionais está pronta para atender suas necessidades com soluções personalizadas e materiais de primeira linha.
          </Typography>
          
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center' 
                }}
              >
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
                    color: '#E6E3DB'
                  }}
                >
                  <Award size={28} />
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#E6E3DB', 
                    mb: 1,
                    fontWeight: 600
                  }}
                >
                  Garantia de qualidade
                </Typography>
                <Typography 
                  sx={{ 
                    color: '#E6E3DB', 
                    opacity: 0.8,
                    fontSize: '0.95rem'
                  }}
                >
                  Materiais selecionados e acabamento impecável
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={4}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center' 
                }}
              >
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
                    color: '#E6E3DB'
                  }}
                >
                  <Clock size={28} />
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#E6E3DB', 
                    mb: 1,
                    fontWeight: 600
                  }}
                >
                  Entrega no prazo
                </Typography>
                <Typography 
                  sx={{ 
                    color: '#E6E3DB', 
                    opacity: 0.8,
                    fontSize: '0.95rem'
                  }}
                >
                  Compromisso com prazos e cronogramas
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={4}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center' 
                }}
              >
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
                    color: '#E6E3DB'
                  }}
                >
                  <Tool size={28} />
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#E6E3DB', 
                    mb: 1,
                    fontWeight: 600
                  }}
                >
                  Suporte técnico
                </Typography>
                <Typography 
                  sx={{ 
                    color: '#E6E3DB', 
                    opacity: 0.8,
                    fontSize: '0.95rem'
                  }}
                >
                  Assistência completa antes e após a instalação
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Conteudo;