import React from "react";
import { Box, CssBaseline } from "@mui/material";
import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Banner from "./components/ui/Banner";
import Conteudo from "./components/ui/Conteudo";
import FloatingChat from "./components/ui/FloatingChat"; // ✅ Substituindo o WhatsApp pelo chatbot
import PartnerHighlight from "./components/ui/PartnerHighlight";
import Lojas from "./components/ui/Lojas";
import Footer from "./components/layout/Footer";

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
      <Lojas/>
      <Footer/>
      {/* ✅ Substituímos o botão do WhatsApp pelo chatbot */}
      <FloatingChat />
    </Box>
  );
}

export default App;
