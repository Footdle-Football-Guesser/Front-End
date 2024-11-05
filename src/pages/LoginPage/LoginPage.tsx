import { Box, Button, TextField, Typography } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Card } from "../../components";

export const LoginPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        paddingTop: "20px",
      }}
    >
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
              }}
            >
              <Typography variant="h4" sx={{ marginBottom: "24px" }}>
                Login
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Digite seu nome de usuário"
                sx={{ width: "250px" }}
              />
              <Button variant="outlined" endIcon={<SendRoundedIcon />}>
                Enviar
              </Button>
            </Box>
          }
        />
      </Box>
    </Box>
  );
};
