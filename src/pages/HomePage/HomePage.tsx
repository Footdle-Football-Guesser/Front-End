import { Box, TextField, Typography } from "@mui/material";
import { Card } from "../../components";
import { BrasileiraoPlayer, brasileiraoPlayerList } from "../../util";
import { useEffect, useState } from "react";
import { PlayerCard } from "../../components/PlayerCard";

export const HomePage = () => {
  const [playerTriedList, setPlayerTriedList] = useState<BrasileiraoPlayer[]>(
    []
  );
  const [randomPlayer, setRandomPlayer] = useState<BrasileiraoPlayer>();
  const [hasFindedTodaysPlayer, setHasFindedTodaysPlayer] = useState(false);

  useEffect(() => {
    const newPlayer =
      brasileiraoPlayerList[
        Math.floor(Math.random() * brasileiraoPlayerList.length)
      ];
    console.log(newPlayer);
    setRandomPlayer(newPlayer);
  }, []);

  useEffect(() => {
    const finded = playerTriedList.some(
      (player) => randomPlayer && player.name === randomPlayer.name
    );
    setHasFindedTodaysPlayer(finded);
  }, [playerTriedList, randomPlayer]);

  //TODO: criar func para buscar na array e exibir os valores no textField ou numa box
  //TODO: após "confirmar" a busca, criar um card contendo as infos do jogador e se acertou (card verde / vermelho) ...
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const playerNameInformed = (event.target as HTMLInputElement).value;
    console.log(playerNameInformed);
    const findPlayer = brasileiraoPlayerList.find(
      (player) => player.name === playerNameInformed
    );
    if (findPlayer) {
      const newPlayerTriedList = [...playerTriedList, findPlayer];
      setPlayerTriedList(newPlayerTriedList);
    }
  };

  return (
    <Box sx={{ width: "100%", height: "100%", paddingTop: "20px" }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Card
          width={"600px"}
          content={
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                alignItems: "center",
                bgcolor: "#ffff",
              }}
            >
              <Typography variant="h4" sx={{ marginBottom: "24px" }}>
                Footdle
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Digite o nome do jogador"
                onChange={handleOnChange}
                sx={{ width: "250px" }}
              />
              {randomPlayer && hasFindedTodaysPlayer && (
                <PlayerCard brasileiraoPlayer={randomPlayer} />
                // <span
                //   style={{ display: hasFindedTodaysPlayer ? "block" : "none" }}
                // >
                //   {randomPlayer.name}
                // </span>
              )}
            </Box>
          }
        />
      </Box>
    </Box>
  );
};
