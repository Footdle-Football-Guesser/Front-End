import { AppBar, Box, Button, IconButton, List, Toolbar } from "@mui/material";

import { PersonRounded, HomeRounded } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [logoScale, setLogoScale] = useState<number>(1);
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#ffff" }}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "200px",
          padding: 0,
        }}
        disableGutters
      >
        {/* NOTE: Box para exibir os ícones dos times do brasileirao */}
        <List
          sx={{
            display: "flex",
            gap: "10px",
            bgcolor: "#ffff",
            width: "100%",
            padding: 0,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <li>
            <Button>Teste</Button>
          </li>
          <li>
            <Button>Teste</Button>
          </li>
          <li>
            <Button>Teste</Button>
          </li>
        </List>
        {/* NOTE: Box para exibir a NavBar tradicional */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row-reverse",
            maxHeight: "40px",
            width: "100%",
            bgcolor: "#06aa48",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              padding: "0 20px 0 0",
            }}
          >
            <IconButton onClick={() => navigate("/login")}>
              <PersonRounded sx={{ fontSize: "24px" }} />
            </IconButton>
            <IconButton onClick={() => navigate("/")}>
              <HomeRounded sx={{ fontSize: "24px" }} />
            </IconButton>
          </Box>
          <Box sx={{ position: "relative", padding: "0 0 0 20px" }}>
            <IconButton
              disableRipple
              onMouseEnter={() => setLogoScale(1.2)}
              onMouseLeave={() => setLogoScale(1)}
              onClick={() =>
                window.open(
                  "https://ge.globo.com/futebol/brasileirao-serie-a/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              sx={{ position: "absolute", padding: 0, top: 0, bottom: 0 }}
            >
              <img
                src="/src/assets/logo-footdle.png"
                alt="logo"
                style={{
                  width: "100px",
                  height: "70px",
                  objectFit: "contain",
                  transform: `scale(${logoScale})`,
                  transition: "transform 0.1s ease",
                }}
              />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
