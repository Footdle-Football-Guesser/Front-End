import { Box, Button, TextField } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

export const LoginPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <h1>Login</h1>
      <TextField
        variant="outlined"
        label={"Nome de usuário"}
        placeholder="Digite seu nome de usuário"
      />
      <Button variant="outlined" endIcon={<SendRoundedIcon />}>
        Enviar
      </Button>
    </Box>
  );
};
