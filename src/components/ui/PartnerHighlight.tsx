// PartnerHighlight.jsx
import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, useTheme } from '@mui/material';
import { motion } from 'framer-motion'; // For animations

// Import individual partner images from assets (adjust paths as needed for your project)
import parceiro from '../../assets/parceiro.jpg';
import parceiro2 from '../../assets/parceiro2.png';
import parceiro3 from '../../assets/parceiro3.jpg';
import parceiro4 from '../../assets/parceiro4.png';
import parceiro5 from '../../assets/parceiro5.png';
import parceiro6 from '../../assets/parceiro6.png';
import parceiro7 from '../../assets/parceiro7.png';

const PartnerHighlight = () => {
  const theme = useTheme();

  // Dummy data for partners (parceiro2 to parceiro7, using specific images)
  const partners = [
    { id: 1, name: 'Parceiro ', logo: parceiro, website: 'https://parceiro2.com' },
    { id: 2, name: 'Parceiro 2', logo: parceiro2, website: 'https://parceiro2.com' },
    { id: 3, name: 'Parceiro 3', logo: parceiro3, website: 'https://parceiro3.com' },
    { id: 4, name: 'Parceiro 4', logo: parceiro4, website: 'https://parceiro4.com' },
    { id: 5, name: 'Parceiro 5', logo: parceiro5, website: 'https://parceiro5.com' },
    { id: 6, name: 'Parceiro 6', logo: parceiro6, website: 'https://parceiro6.com' },
    { id: 7, name: 'Parceiro 7', logo: parceiro7, website: 'https://parceiro7.com' },
  ];

  return (
    <Box
      sx={{
        padding: { xs: '2rem', md: '4rem' },
        background: 'linear-gradient(135deg, #ffffff, #f8f9fa)', // Elegant gradient background
        borderRadius: '16px', // Rounded corners for a modern look
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
        margin: '4rem 0',
        overflow: 'hidden',
      }}
    >
      {/* Partners Header */}
      <Typography
        variant="h3" // Larger, more impactful header
        component="h2"
        gutterBottom
        sx={{
          textAlign: 'center',
          color: '#1a2b3c', // Deep, elegant blue-gray
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '3rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)', // Subtle text shadow for elegance
        }}
      >
        Nossos Parceiros
      </Typography>

      {/* Partners Grid with Animation */}
      <Grid
        container
        spacing={6} // Increased spacing for a more airy design
        justifyContent="center"
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {partners.map((partner) => (
          <Grid item xs={12} sm={6} md={3} key={partner.id}>
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)' }} // Hover animation for elegance
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: partner.id * 0.1 }} // Staggered animation for each card
            >
              <Card
                sx={{
                  maxWidth: 300,
                  margin: 'auto',
                  borderRadius: '12px', // More rounded corners
                  background: 'linear-gradient(135deg, #ffffff, #f0f2f5)', // Subtle gradient for cards
                  boxShadow: '0 6px 18px rgba(0, 0, 0, 0.08)', // Softer shadow
                  overflow: 'hidden',
                  transition: 'all 0.3s ease', // Smooth transitions
                  '&:hover': {
                    background: 'linear-gradient(135deg, #f0f2f5, #e9ecef)', // Lighter hover effect
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={partner.logo}
                  alt={`${partner.name} Logo`}
                  sx={{
                    objectFit: 'contain',
                    padding: '1.5rem',
                    background: '#fff', // White background for logo contrast
                    borderBottom: '1px solid rgba(0, 0, 0, 0.05)', // Subtle divider
                  }}
                />
                <CardContent sx={{ padding: '1.5rem', textAlign: 'center' }}>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      color: '#1a2b3c',
                      fontWeight: 600,
                      marginBottom: '0.5rem',
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                    }}
                  >
                    {partner.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: '0.9rem', md: '1rem' },
                    }}
                  >
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 500 }}
                    >
                      Visite o site
                    </a>
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PartnerHighlight;