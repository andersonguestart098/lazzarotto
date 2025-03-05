import React from "react";
import { Box } from "@mui/material";
import Lottie from "lottie-react";
import whatsappAnimation from "../../assets/Animation - 1741118200058.json";

const FloatingWhatsApp: React.FC = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "80px", // 🔹 Subimos mais para melhor visibilidade
        right: "10px", // 🔹 Pequeno ajuste para afastar da borda
        width: "95px", // 🔹 Tamanho mais equilibrado
        height: "90px",
        cursor: "pointer",
        zIndex: 1000, // 🔹 Mantém acima de outros elementos
      }}
      onClick={() => window.open("https://wa.me/554991970707", "_blank")}
    >
      <Lottie animationData={whatsappAnimation} loop={true} />
    </Box>
  );
};

export default FloatingWhatsApp;
