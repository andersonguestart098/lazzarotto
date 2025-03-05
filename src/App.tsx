import React from "react";
import { Box, CssBaseline } from "@mui/material";
import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Banner from "./components/ui/Banner";
import Conteudo from "./components/ui/Conteudo";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp"; // ✅ Importando o botão flutuante
import PartnerHighlight from "./components/ui/PartnerHighlight";

function App() {
  return (
    <Box sx={{ width: "100vw", overflowX: "hidden", margin: 0, padding: 0 }}>
      <CssBaseline />
      <TopBar />
      <Navbar />
      <Box sx={{ width: "100%", flexGrow: 1, marginTop: "46px" }}>
        <Banner />
      </Box>
      <Conteudo />
      <PartnerHighlight />
      
      {/* ✅ Adicionamos o botão flutuante do WhatsApp */}
      <FloatingWhatsApp />
    </Box>
  );
}

export default App;
