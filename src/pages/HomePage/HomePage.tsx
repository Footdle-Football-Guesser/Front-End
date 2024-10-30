import { Box, TextField } from "@mui/material";

export const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: "url(/src/assets/brasileirao-wallpaper.jpg)",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1>Footdle</h1>
      <TextField variant="outlined" placeholder="Digite o nome do jogador" />
    </Box>
  );
};
