import { Box, TextField, Typography } from "@mui/material";

export const HomePage = () => {
  return (
    <Box sx={{ width: "100%", height: "100%", paddingTop: "20px" }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Typography variant="h3">Footdle</Typography>
          <TextField
            variant="outlined"
            placeholder="Digite o nome do jogador"
          />
        </Box>
      </Box>
    </Box>
  );
};
