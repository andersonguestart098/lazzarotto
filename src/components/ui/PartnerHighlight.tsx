import React from 'react';
import { motion } from 'framer-motion';
import { Box, Card, CardContent, Typography } from '@mui/material';

const partnersTop = ['Microsoft', 'Accenture', 'HashiCorp', 'Confluent', 'Databricks', 'AWS', 'Google'];
const partnersBottom = ['LangChain', 'Capgemini', 'Fireworks AI', 'TCS', 'Tech Mahindra', 'Datadog'];

interface MarqueeRowProps {
  partners: string[];
  direction: 'left' | 'right';
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ partners, direction }) => {
  const marqueeVariants = {
    animate: {
      x: direction === 'left' ? ['0%', '-100%'] : ['-100%', '0%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 25, // Velocidade da animação ajustada
          ease: 'linear',
        },
      },
    },
  };

  return (
    <Box sx={{ overflow: 'hidden', width: '100vw', py: 2 }}>
      <motion.div
        style={{ display: 'flex', whiteSpace: 'nowrap' }}
        variants={marqueeVariants}
        animate="animate"
      >
        {[...partners, ...partners].map((partner, index) => (
          <Card
            key={`${partner}-${index}`}
            sx={{
              width: 200,
              height: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 3,
              borderRadius: 3,
              flexShrink: 0,
              mx: 1, // Espaçamento entre os cards
            }}
          >
            <CardContent>
              <Typography variant="h6" align="center">
                {partner}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </Box>
  );
};

const PartnerHighlight: React.FC = () => {
  return (
    <Box sx={{ py: 6, textAlign: 'center', bgcolor: '#f8f9fa' }}>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Works seamlessly with your tech stack
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>
        MongoDB integrates with 100+ of your favorite technologies
      </Typography>

      <Box sx={{ overflow: 'hidden', bgcolor: 'white', p: 3, boxShadow: 3 }}>
        {/* Primeira linha - Movendo para a esquerda */}
        <MarqueeRow partners={partnersTop} direction="left" />

        {/* Segunda linha - Movendo para a direita */}
        <MarqueeRow partners={partnersBottom} direction="right" />
      </Box>
    </Box>
  );
};

export default PartnerHighlight;
