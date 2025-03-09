import React from 'react';
import { motion } from 'framer-motion';
import { Box, Card, CardContent } from '@mui/material';

// Importando as imagens da pasta assets
import cyrela from '../../assets/parceiro.jpg';
import tramontina from '../../assets/parceiro2.png';
import todeschini from '../../assets/parceiro3.jpg';
import maquinaPack from '../../assets/parceiro4.png';
import construbelMais from '../../assets/parceiro5.png';
import diamaju from '../../assets/parceiro6.png';
import metalgava from '../../assets/parceiro7.png';
import brv from '../../assets/parceiro8.png';

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { id: 1, name: 'Cyrela', logo: cyrela },
  { id: 2, name: 'Tramontina', logo: tramontina },
  { id: 3, name: 'Todeschini', logo: todeschini },
  { id: 4, name: 'Máquina Pack', logo: maquinaPack },
  { id: 5, name: 'Construbel Mais', logo: construbelMais },
  { id: 6, name: 'Diamaju', logo: diamaju },
  { id: 7, name: 'Metalgava', logo: metalgava },
  { id: 8, name: 'BRV', logo: brv },
];

interface MarqueeRowProps {
  partners: Partner[];
  direction: 'left' | 'right';
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ partners, direction }) => {
  const marqueeVariants = {
    animate: {
      x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'mirror', // Agora o movimento é mais natural e sem pausa
          duration: 20, // Ajuste fino para manter a ilusão de continuidade
          ease: 'linear',
        },
      },
    },
  };

  return (
    <Box sx={{ overflow: 'hidden', width: '100vw', py: 2, display: 'flex' }}>
      <motion.div
        style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          gap: '16px', // Espaço uniforme entre os cards
        }}
        variants={marqueeVariants}
        animate="animate"
      >
        {/* Repetindo os parceiros várias vezes para não criar lacunas */}
        {[...partners, ...partners, ...partners].map((partner, index) => (
          <Card
            key={`${partner.id}-${index}`}
            sx={{
              width: 220, // Tamanho aumentado para preencher melhor a tela
              height: 110,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 3,
              borderRadius: 3,
              flexShrink: 0,
              mx: 0.5, // Pequeno espaçamento entre os cards
            }}
          >
            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={partner.logo}
                alt={partner.name}
                style={{ maxWidth: '80%', maxHeight: '60px', objectFit: 'contain' }}
              />
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </Box>
  );
};

const PartnerHighlight: React.FC = () => {
  return (
    <Box sx={{ py: 10, textAlign: 'center', bgcolor: '#f8f9fa' }}>
      <h2
        style={{
          fontSize: '36px', // Tamanho maior para destaque
          fontWeight: 'bold',
          marginBottom: '16px', // Espaço maior abaixo do título
          fontFamily: 'Poppins, sans-serif',
          color: '#5B0F00',
        }}
      >
        Nossos Parceiros
      </h2>
      <p
        style={{
          fontSize: '18px', // Texto maior para melhor leitura
          color: '#5B0F00',
          fontFamily: 'Poppins, sans-serif',
          marginBottom: '40px', // Mais espaço entre o texto e os cards
          maxWidth: '750px', // Mantém o texto centralizado e bem distribuído
          margin: '0 auto', // Centraliza corretamente
          lineHeight: '1.6', // Aumenta o espaçamento entre linhas para facilitar a leitura
        }}
      >
        Trabalhamos lado a lado com marcas de renome que compartilham nosso compromisso com 
        a excelência e a inovação. Juntos, criamos soluções de alto impacto para nossos clientes.
      </p>

      <Box sx={{ overflow: 'hidden', bgcolor: 'white', p: 3, boxShadow: 3 }}>
        {/* Primeira linha - Movendo para a esquerda */}
        <MarqueeRow partners={partners} direction="left" />

        {/* Segunda linha - Movendo para a direita */}
        <MarqueeRow partners={partners} direction="right" />
      </Box>
    </Box>
  );
};

export default PartnerHighlight;
