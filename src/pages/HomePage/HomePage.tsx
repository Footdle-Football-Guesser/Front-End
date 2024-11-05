import { Box, TextField, Typography } from "@mui/material";
import { Card } from "../../components";
import { brasileiraoPlayers } from "../../util";

export const HomePage = () => {
  const randomPlayer =
    brasileiraoPlayers[Math.floor(Math.random() * brasileiraoPlayers.length)];

  //TODO: criar func para buscar na array e exibir os valores no textField ou numa box
  //TODO: após "confirmar" a busca, criar um card contendo as infos do jogador e se acertou (card verde / vermelho) ...

  return (
    <Box sx={{ width: "100%", height: "100%", paddingTop: "20px" }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Card
          content={
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                alignItems: "center",
                bgcolor: "#ffff",
              }}
            >
              <Typography variant="h4" sx={{ marginBottom: "24px" }}>
                Footdle
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Digite o nome do jogador"
                sx={{ width: "250px" }}
              />
              <span>{randomPlayer.name}</span>
            </Box>
          }
        />
      </Box>
    </Box>
  );
};
