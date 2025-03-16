import React from "react";
import { Box, Typography, IconButton, Grid, Divider } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { motion } from "framer-motion";
import logo from '../../assets/logo lazzarotto.png'; // Logo da Lazzarotto

// Importando as imagens dos selos diretamente
import googleSafeBrowsing from '../../assets/google-safe-browsing.png';
import seloGoogle2 from '../../assets/seloGoogle2.png';

const Footer: React.FC = () => {
  return (
    <Box sx={{ mt: 5, position: "relative" }}>
      {/* Efeito de transição em onda no topo */}
      <Box sx={{ position: "absolute", top: "-185px", left: 0, width: "100%" }}>
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#5B0F00"
            fillOpacity="1"
            d="M0,160L80,165.3C160,171,320,181,480,176C640,171,800,149,960,144C1120,139,1280,149,1360,154.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </Box>
      
      <Box
        sx={{
          backgroundColor: "#F5F5F5", // Fundo cinza claro
          color: "#5B0F00", // Texto em tom escuro da Lazzarotto
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          {/* Logo Section */}
          <Grid item xs={12} md={4}>
            <Box display="flex" justifyContent="center">
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                <img
                  src={logo}
                  alt="Lazzarotto Telas Logo"
                  style={{ width: "150px", filter: "none" }}
                />
              </motion.div>
            </Box>
          </Grid>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="body1" sx={{ mb: 1, color: "#5B0F00" }}>
                <MailOutlineIcon sx={{ mr: 1, verticalAlign: "middle", color: "#5B0F00" }} />
                contato@lazzarottotelas.com.br
              </Typography>
              <Typography variant="body1" sx={{ color: "#5B0F00" }}>
                <PhoneIcon sx={{ mr: 1, verticalAlign: "middle", color: "#5B0F00" }} />
                +55 51 98668-8559
              </Typography>
            </Box>
          </Grid>
          {/* Social Media Icons */}
          <Grid item xs={12} md={4}>
            <Box display="flex" justifyContent="center" gap={1}>
              <IconButton aria-label="Instagram" sx={{ color: "#5B0F00" }} href="https://www.instagram.com" component="a" target="_blank" disableRipple>
                <InstagramIcon sx={{ transition: "all 0.3s ease", "&:hover": { color: "#7A1F0A" } }} />
              </IconButton>
              <IconButton aria-label="Facebook" sx={{ color: "#5B0F00" }} href="https://www.facebook.com" component="a" target="_blank" disableRipple>
                <FacebookIcon sx={{ transition: "all 0.3s ease", "&:hover": { color: "#7A1F0A" } }} />
              </IconButton>
              <IconButton aria-label="LinkedIn" sx={{ color: "#5B0F00" }} href="https://www.linkedin.com" component="a" target="_blank" disableRipple>
                <LinkedInIcon sx={{ transition: "all 0.3s ease", "&:hover": { color: "#7A1F0A" } }} />
              </IconButton>
              <IconButton aria-label="Twitter" sx={{ color: "#5B0F00" }} href="https://www.twitter.com" component="a" target="_blank" disableRipple>
                <TwitterIcon sx={{ transition: "all 0.3s ease", "&:hover": { color: "#7A1F0A" } }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3, backgroundColor: "#5B0F00" }} />
        <Box>
          <Typography variant="body2" sx={{ color: "#5B0F00" }}>
            © {new Date().getFullYear()} Lazzarotto Telas - Todos os direitos reservados
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
