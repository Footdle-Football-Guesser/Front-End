import { Box, Button, TextField, Typography } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

export const LoginPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        paddingTop: "20px",
        backgroundImage: `url(/src/assets/cbf-wallpaper.jpg)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "center",
            bgcolor: "#ffff",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgb(0,0,0,0.4)",
            padding: "24px",
            width: "180px",
            height: "auto",
          }}
        >
          <Typography variant="h4" sx={{ marginBottom: "24px" }}>
            Login
          </Typography>
          <TextField
            variant="outlined"
            label={"Nome de usuário"}
            placeholder="Digite seu nome de usuário"
          />
          <Button variant="outlined" endIcon={<SendRoundedIcon />}>
            Enviar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
