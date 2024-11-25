import { Box, CircularProgress, List, Typography } from "@mui/material";
import { Card } from "../../components";
import { useEffect, useState } from "react";
import { BrasileiraoPlayer } from "@/types/types";
import { BrasileiraoPlayerService } from "@/service";

export const ConfigurationPage = () => {
  const [brasileiraoPlayerList, setBrasileiraoPlayersList] = useState<
    BrasileiraoPlayer[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    BrasileiraoPlayerService.getAllBrasileiraoPlayers()
      .then((data) => {
        setBrasileiraoPlayersList(data);
        setLoading(false);
      })
      .catch((e) => console.error(e));
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backdropFilter: "blur(4px)",
          color: "white.500",
        }}
      >
        <CircularProgress size={150} thickness={3} color="inherit" />
      </Box>
    );
  }
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
          width={"600px"}
          children={
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                alignItems: "center",
                overflow: "auto",
                maxHeight: "600px",
                "&::-webkit-scrollbar": {
                  width: "12px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#06AA48",
                  borderRadius: "8px",
                  minHeight: "50px",
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "#f1f1f1",
                  borderRadius: "8px",
                },
              }}
            >
              <Typography variant="h4" sx={{ marginBottom: "24px" }}>
                Configuração Jogador
              </Typography>
              <List
                sx={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                }}
              >
                {/* TODO: adicionar span + label */}
                {brasileiraoPlayerList.length > 0 &&
                  brasileiraoPlayerList.map((player, index) => (
                    <li key={`player-${index}-${player.id}`}>
                      {/* <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            marginBottom: "10px",
                            borderBottom: "1px solid #000000",
                            marginRight: "10px",
                          }}
                        >
                          <span>{player.name}</span>
                          <span>{player.nationality}</span>
                          <span>{player.position}</span>
                          <span>{player.shirtNumber}</span>
                          <span>{player.team}</span>
                          <span>{player.age}</span>
                        </Box> */}
                      {/* TODO: criar um card para cada jogador */}
                      <Card width={"auto"}>
                        <Box
                          className="player-card"
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "8px",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "4px",
                              // borderRight: "1px solid #000000",
                              // paddingRight: "4px",
                            }}
                          >
                            <span>Nome:</span>
                            <span>{player.name}</span>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "4px",
                              // borderRight: "1px solid #000000",
                              // paddingRight: "4px",
                            }}
                          >
                            <span>Time:</span>
                            <span>{player.team}</span>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "4px",
                              // borderRight: "1px solid #000000",
                              // paddingRight: "4px",
                            }}
                          >
                            <span>Posição:</span>
                            <span>{player.position}</span>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "4px",
                              // borderRight: "1px solid #000000",
                              // paddingRight: "4px",
                            }}
                          >
                            <span>Camisa nº:</span>
                            <span>{player.shirtNumber}</span>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "4px",
                              // borderRight: "1px solid #000000",
                              // paddingRight: "4px",
                            }}
                          >
                            <span>Nacionalidade:</span>
                            <span>{player.nationality}</span>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "4px",
                              // borderRight: "1px solid #000000",
                              // paddingRight: "4px",
                            }}
                          >
                            <span>Idade:</span>
                            <span>{player.age}</span>
                          </Box>
                        </Box>
                      </Card>
                    </li>
                  ))}
              </List>
            </Box>
          }
        />
      </Box>
    </Box>
  );
};
