import React from "react";
import { Box } from "@mui/material";
import Lottie from "lottie-react";
import whatsappAnimation from "../../assets/Animation - 1741465701563.json";

const FloatingWhatsApp: React.FC = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "80px", // Mantive a posição original
        right: "10px", // Mantive o afastamento da borda
        width: "120px", // Reduzi para 130px
        height: "115px", // Reduzi para 125px
        cursor: "pointer",
        zIndex: 1000, // Mantém acima de outros elementos
      }}
      onClick={() => window.open("https://wa.me/554991970707", "_blank")}
    >
      <Lottie animationData={whatsappAnimation} loop={true} style={{ width: '100%', height: '100%' }} />
    </Box>
  );
};

export default FloatingWhatsApp;