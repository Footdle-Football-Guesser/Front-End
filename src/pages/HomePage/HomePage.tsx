import { Box, TextField } from "@mui/material";

export const HomePage = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Footdle</h1>
      <TextField variant="outlined" placeholder="Digite o nome do jogador" />
    </Box>
  );
};
