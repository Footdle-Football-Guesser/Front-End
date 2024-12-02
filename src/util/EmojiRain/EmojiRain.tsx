import ReactDOM from "react-dom/client";
import { motion } from "framer-motion";
import { useCallback, useEffect } from "react";

interface EmojiRainProps {
  active: boolean;
}

const EmojiRain: React.FC<EmojiRainProps> = ({ active }) => {
  const throwEmojis = useCallback(() => {
    const emojiContainer = document.getElementById("emoji-container");
    const emojis = ["🔥", "🏅", "🏅", "🎉", "🎉", "🏆"]; // Emojis com mais repetições para maior presença

    for (let i = 0; i < 40; i++) {
      // Aumentar para mais emojis
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      const startX = Math.random() * window.innerWidth; // Posição inicial aleatória no eixo X
      const endY = Math.random() * (window.innerHeight / 2); // Altura final aleatória

      // Crie um elemento div temporário para o emoji
      const tempDiv = document.createElement("div");
      tempDiv.style.position = "absolute";
      emojiContainer?.appendChild(tempDiv);

      // Renderize o emoji no contêiner temporário
      const root = ReactDOM.createRoot(tempDiv);
      root.render(
        <motion.div
          initial={{
            y: window.innerHeight, // Começa fora da tela
            x: startX,
            opacity: 1,
            rotate: 0, // Posição inicial
          }}
          animate={{
            y: endY,
            opacity: 0,
            rotate: Math.random() * 360, // Gira aleatoriamente para mais intensidade
          }}
          transition={{ duration: 1, ease: "easeInOut" }} // Animação mais rápida
          style={{
            position: "absolute",
            fontSize: "3rem", // Tamanho padrão
            pointerEvents: "none",
          }}
        >
          {randomEmoji}
        </motion.div>
      );

      // Remova o contêiner temporário após 1.2 segundos (1s de animação + margem)
      setTimeout(() => {
        root.unmount(); // Desmonta o componente React
        tempDiv.remove(); // Remove o elemento do DOM
      }, 2000);
    }
  }, []);

  useEffect(() => {
    if (active) {
      throwEmojis();
    }
  }, [active, throwEmojis]);

  return (
    <div
      id="emoji-container"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
};

export default EmojiRain;
