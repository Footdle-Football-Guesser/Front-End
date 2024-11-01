import { Box, TextField, Typography } from "@mui/material";

export const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <Typography variant="h3">Footdle</Typography>
      <TextField variant="outlined" placeholder="Digite o nome do jogador" />
    </Box>
  );
};
