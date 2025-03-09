import React, { useState, useRef, useEffect } from "react";
import { Box, IconButton, Paper, Typography, Button, Slide, Fade } from "@mui/material";
import { Close, Send, SmartToy } from "@mui/icons-material";
import Lottie from "lottie-react";
import typingAnimation from "../../assets/Animation - 1741494129792.json";
import chatIconAnimation from "../../assets/Animation - 1741495484916.json"; // 🔥 Animação do ícone de chat

const chatOptions = [
  {
    id: 1,
    question: "Quais são os serviços oferecidos?",
    answer: "Oferecemos soluções em:\n• Desenvolvimento Web\n• Apps Móveis\n• Design UI/UX\n• Consultoria em Inovação",
  },
  {
    id: 2,
    question: "Como posso entrar em contato?",
    answer: "Você pode falar conosco pelos canais:\n• Email: contato@empresa.com\n• WhatsApp: (XX) XXXX-XXXX\n• LinkedIn: /company/empresa",
  },
  {
    id: 3,
    question: "Onde estamos localizados?",
    answer: "Nossa sede é em São Paulo, mas atendemos clientes de todo o Brasil. Também temos hubs de inovação em:\n• Rio de Janeiro\n• Belo Horizonte\n• Curitiba",
  },
];

const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<Array<{ type: "user" | "bot"; message: string }>>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleOptionClick = (option: typeof chatOptions[0]) => {
    setChatHistory((prev) => [...prev, { type: "user", message: option.question }]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setChatHistory((prev) => [...prev, { type: "bot", message: option.answer }]);
    }, 1500);
  };

  return (
    <Box sx={{ position: "fixed", bottom: 80, right: 20, zIndex: 9999 }}> {/* 🔥 Movido mais para cima */}
  {!isOpen && (
    <Fade in={!isOpen}>
      <IconButton
        onClick={() => setIsOpen(true)}
        sx={{
          width: 76,
          height: 76,
          bgcolor: "#8B1A0E",
          color: "white",
          borderRadius: "50%",
          boxShadow: 3,
          transition: "all 0.3s ease",
          "&:hover": { bgcolor: "#A63D2D", transform: "scale(1.1)" },
          paddingBottom: "10px", // 🔥 Evita que encoste na borda inferior
        }}
      >
        <Lottie animationData={chatIconAnimation} style={{ width: 66, height: 66 }} />
      </IconButton>
    </Fade>
  )}

      <Slide direction="up" in={isOpen} mountOnEnter unmountOnExit>
        <Paper
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 450,
            height: 600,
            display: "flex",
            flexDirection: "column",
            boxShadow: 5,
            borderRadius: 3,
            overflow: "hidden",
            bgcolor: "white",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", bgcolor: "#8B1A0E", color: "white", p: 2 }}>
            <SmartToy sx={{ mr: 1 }} />
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
              Assistente Virtual
            </Typography>
            <IconButton onClick={() => setIsOpen(false)} sx={{ color: "white" }}>
              <Close />
            </IconButton>
          </Box>

          <Box 
            ref={chatRef} 
            sx={{ 
                flex: 1, 
                p: 2, 
                overflowY: "auto", 
                bgcolor: "white", 
                "&::-webkit-scrollbar": { width: "6px" },
                "&::-webkit-scrollbar-thumb": { backgroundColor: "#D1A7A7", borderRadius: "6px" }
            }}
            >
            {chatHistory.length === 0 ? (
                <Typography 
                variant="body2" 
                color="text.secondary" 
                sx={{ textAlign: "center", mt: 2, fontStyle: "italic" }}
                >
                Olá! Escolha uma opção abaixo para começar. 👇
                </Typography>
            ) : (
                chatHistory.map((msg, index) => (
                <Box 
                    key={index} 
                    sx={{ 
                    display: "flex", 
                    justifyContent: msg.type === "user" ? "flex-end" : "flex-start", 
                    mb: 1 
                    }}
                >
                    <Box
                    sx={{
                        maxWidth: "75%",
                        p: 1.5,
                        borderRadius: msg.type === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                        bgcolor: msg.type === "user" ? "#8B1A0E" : "#F8E1E1", // 🔥 Tons mais suaves
                        color: msg.type === "user" ? "white" : "#5B0F00",
                        boxShadow: msg.type === "user" ? "0px 2px 4px rgba(0,0,0,0.15)" : "0px 2px 6px rgba(0,0,0,0.1)"
                    }}
                    >
                    <Typography 
                        variant="body2" 
                        sx={{ fontWeight: "500", lineHeight: "1.4" }}
                    >
                        {msg.message}
                    </Typography>
                    </Box>
                </Box>
                ))
            )}

            {/* 🔥 Animação "digitando..." ajustada */}
            {isTyping && (
                <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 1 }}>
                <Lottie animationData={typingAnimation} style={{ width: 80, height: 40 }} />
                </Box>
            )}
            </Box>


          <Box sx={{ p: 2, borderTop: "1px solid #E5E7EB", bgcolor: "white" }}>
            {chatOptions.map((option) => (
              <Button
                key={option.id}
                fullWidth
                onClick={() => handleOptionClick(option)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 1,
                  p: 1.5,
                  borderRadius: 2,
                  border: "1px solid #D1A7A7",
                  color: "#5B0F00",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#E5C4C4" },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography variant="body2">{option.question}</Typography>
                </Box>
                <Send sx={{ fontSize: 16, color: "#5B0F00" }} />
              </Button>
            ))}
          </Box>
        </Paper>
      </Slide>

      {/* 🔥 Adicionando keyframes para vibração */}
      <style>
        {`
          @keyframes vibrate {
            0% { transform: translate(0, 0); }
            20% { transform: translate(-1px, 1px); }
            40% { transform: translate(1px, -1px); }
            60% { transform: translate(-1px, 1px); }
            80% { transform: translate(1px, -1px); }
            100% { transform: translate(0, 0); }
          }
        `}
      </style>
    </Box>
  );
};

export default FloatingChat;
