import {
  Box,
  CircularProgress,
  List,
  TextField,
  Typography,
} from "@mui/material";
import { Card, PlayerCard } from "@/components";
import { useEffect, useRef, useState } from "react";
import { BrasileiraoPlayer } from "../../types/types";
import { BrasileiraoPlayerService } from "@/service";

export const HomePage = () => {
  const [playerTriedList, setPlayerTriedList] = useState<BrasileiraoPlayer[]>(
    []
  );
  const [searchedPlayerName, setSearchedPlayerName] = useState<string>();
  const [randomPlayer, setRandomPlayer] = useState<BrasileiraoPlayer>();
  const [brasileiraoPlayerList, setBrasileiraoPlayersList] = useState<
    BrasileiraoPlayer[]
  >([]);
  const [loading, setLoading] = useState(true);
  const searchTextFieldRef = useRef<HTMLInputElement | null>(null);

  // NOTE: pega todos os jogadores salvos no banco
  useEffect(() => {
    BrasileiraoPlayerService.getAllBrasileiraoPlayers()
      .then((data) => {
        // Pega a resposta da requisição e define como uma lista, de jogadores, aqui no Front
        setBrasileiraoPlayersList(data);

        // A partir da lista, pega randomicamente, um jogador e o define para ser o cara da vez
        const newPlayer = data[Math.floor(Math.random() * data.length)];
        console.log(newPlayer);
        setRandomPlayer(newPlayer);

        // Tira o loading
        setLoading(false);
      })
      .catch((e) => console.error(e));
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedPlayerName(e.target.value.toLocaleLowerCase());
  };

  // NOTE: func para validar o jogador pesquisado e selecionado pelo usuario
  const validatePlayerSelected = (player: BrasileiraoPlayer) => {
    // adiciona o jogador tentado na lista de jogadores já tentados
    setPlayerTriedList([...playerTriedList, player]);

    // remove esse jogador da lista principal, para nao seleciona-lo novamente
    setBrasileiraoPlayersList([
      ...brasileiraoPlayerList.filter((p) => p.id != player.id),
    ]);

    if (searchTextFieldRef.current) {
      searchTextFieldRef.current.value = "";
    }
    setSearchedPlayerName(undefined);

    if (player === randomPlayer) {
      window.alert("ACERTOU");
    }
  };

  //TODO: add loading do material
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
    <Box sx={{ width: "100%", height: "100%", paddingTop: "20px" }}>
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
                alignItems: "center",
                bgcolor: "#ffff",
              }}
            >
              <Typography variant="h4" sx={{ marginBottom: "24px" }}>
                Footdle ⚽
              </Typography>
              <TextField
                inputRef={searchTextFieldRef}
                variant="outlined"
                placeholder="Digite o nome do jogador"
                onChange={handleOnChange}
                sx={{ width: "570px" }}
              />
              {/* Lista para escolher o jogador */}
              {searchedPlayerName &&
                brasileiraoPlayerList.some((p) =>
                  p.name.toLowerCase().includes(searchedPlayerName)
                ) && (
                  <List
                    sx={{
                      width: "550px",
                      display: "flex",
                      gap: "10px",
                      flexDirection: "column",
                      padding: "10px",
                      bgcolor: "#fffff",
                      borderRadius: "8px",
                      boxShadow: "0 2px 4px rgb(0,0,0,0.4)",
                      margin: "10px 0 0 0",
                      overflow: "auto",
                      height: "auto",
                      maxHeight: "300px",
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
                    {brasileiraoPlayerList
                      .filter((player) =>
                        player.name.toLowerCase().includes(searchedPlayerName)
                      )
                      .map((player) => (
                        <PlayerCard
                          key={`homepage-playerCard-${player.id}`}
                          player={player}
                          onClick={() => validatePlayerSelected(player)}
                        />
                      ))}
                  </List>
                )}
              {/* Lista para exibir os jogadores já tentados */}
              <List
                sx={{
                  width: "550px",
                  display: "flex",
                  opacity: playerTriedList.length > 0 ? 1 : 0,
                  transition: "opacity 1s ease-out",
                  gap: "10px",
                  flexDirection: "column",
                  padding: "10px",
                  margin: "10px 0 0 0",
                  overflow: "auto",
                  height: "auto",
                  maxHeight: "300px",
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
                {playerTriedList.map((player) => (
                  <PlayerCard
                    key={`homepage-triedPlayers-playerCard-${player.id}`}
                    player={player}
                    playerToMatch={randomPlayer}
                    shouldShowMatches
                    onClick={() => validatePlayerSelected(player)}
                  />
                ))}
              </List>
            </Box>
          }
        />
      </Box>
    </Box>
  );
};
