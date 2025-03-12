import { AppBar, Box, IconButton, List, Toolbar } from "@mui/material";

import { SettingsRounded, HomeRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { brasileiraoTeamsList } from "@/util";
import { LogoButton } from "../LogoButton";
import { useCallback, useEffect, useRef } from "react";
import { useAppDispatch } from "@/store/hooks";
import { updateTopBarHeight } from "@/store/app/appSlice";

export const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const measureTopBarHeight = useCallback(() => {
    if (ref.current) {
      const newTopBarHeight = ref.current.offsetHeight;
      dispatch(updateTopBarHeight(newTopBarHeight));
    }
  }, [dispatch]);

  useEffect(() => {
    measureTopBarHeight();

    const resizer = new ResizeObserver(measureTopBarHeight);
    if (ref.current) {
      resizer.observe(ref.current);
    }

    return () => {
      resizer.disconnect();
    };
  }, [measureTopBarHeight]);

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#ffff", minHeight: "auto" }}>
      <Toolbar
        ref={ref}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 0,
        }}
        disableGutters
      >
        {/* NOTE: Lista para exibir os ícones dos times do brasileirao */}
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
            <IconButton onClick={() => navigate("/")}>
              <HomeRounded sx={{ fontSize: "24px" }} />
            </IconButton>
            <IconButton onClick={() => navigate("/config")}>
              <SettingsRounded sx={{ fontSize: "24px" }} />
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
