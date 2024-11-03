import { AppBar, Box, IconButton, List, Toolbar } from "@mui/material";

import { PersonRounded, HomeRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { brasileiraoTeamsList } from "../../util";
import { LogoButton } from "../LogoButton";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#ffff", minHeight: "auto" }}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "89px",
          padding: 0,
        }}
        disableGutters
      >
        {/* NOTE: Box para exibir os ícones dos times do brasileirao */}
        <List
          sx={{
            display: "flex",
            gap: "4px",
            bgcolor: "#ffff",
            width: "100%",
            padding: "4px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {brasileiraoTeamsList.map((team, index) => (
            <li
              key={`${team.name}-${index}`}
              style={{
                padding: "8px",
              }}
            >
              <LogoButton
                width={"24px"}
                height={"24px"}
                src={team.logo}
                buttonStylesProps={{ padding: 0 }}
              />
            </li>
          ))}
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
          <Box sx={{ padding: "0 0 0 20px" }}>
            <LogoButton
              width={"100px"}
              height={"70px"}
              url={"https://ge.globo.com/futebol/brasileirao-serie-a/"}
              src={"/src/assets/logo-footdle.png"}
              buttonStylesProps={{
                position: "absolute",
                padding: 0,
                bottom: 0,
                top: "35px",
              }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
