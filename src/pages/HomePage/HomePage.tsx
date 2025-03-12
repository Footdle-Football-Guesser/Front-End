import { Box, List, TextField, Typography } from "@mui/material";
import { Card, PlayerCard } from "@/components";
import { useEffect, useRef, useState } from "react";
import { DBrasileiraoPlayer } from "@/types";
import { EmojiRain } from "@/util";
import { useAppSelector } from "@/store/hooks";
import { selectBrasileiraoPlayerList } from "@/store/brasileiraoPlayer/brasileiraoPlayerSlice";

export const HomePage = () => {
  // Lista de jogadores no Database
  const brasileiraoPlayerListBD = useAppSelector(selectBrasileiraoPlayerList);

  // Lista de jogadores ainda não 'tentados'/'escolhidos' pelo usuário durante o jogo
  const [playerNotTriedList, setPlayerNotTriedList] = useState<
    DBrasileiraoPlayer[]
  >(brasileiraoPlayerListBD);

  // Lista de jogadores já 'tentados'/'escolhidos' pelo usuário durante o jogo
  const [playerTriedList, setPlayerTriedList] = useState<DBrasileiraoPlayer[]>(
    []
  );

  // Nome do jogador procurado pelo usuário
  const [searchedPlayerName, setSearchedPlayerName] = useState<string>();
  const [randomPlayer, setRandomPlayer] = useState<DBrasileiraoPlayer>();

  const searchTextFieldRef = useRef<HTMLInputElement | null>(null);
  const [activeEmojiRain, setActiveEmojiRain] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (brasileiraoPlayerListBD && brasileiraoPlayerListBD.length > 0) {
      // A partir da lista, pega randomicamente, um jogador e o define para ser o cara da vez
      const newPlayer =
        brasileiraoPlayerListBD[
          Math.floor(Math.random() * brasileiraoPlayerListBD.length)
        ];
      console.log(newPlayer);
      setRandomPlayer(newPlayer);
    }
  }, [brasileiraoPlayerListBD]);

  const validatePlayerName = (playerName: string) => {
    return playerName
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedPlayerName(validatePlayerName(e.target.value));
  };

  // NOTE: func para validar o jogador pesquisado e selecionado pelo usuario
  const validatePlayerSelected = (player: DBrasileiraoPlayer) => {
    // adiciona o jogador tentado na lista de jogadores já tentados
    setPlayerTriedList([...playerTriedList, player]);

    // remove esse jogador da lista principal, para nao seleciona-lo novamente
    setPlayerNotTriedList([
      ...playerNotTriedList.filter((p) => p.id != player.id),
    ]);

    if (searchTextFieldRef.current) {
      searchTextFieldRef.current.value = "";
    }
    setSearchedPlayerName(undefined);

    if (player === randomPlayer) {
      setActiveEmojiRain(true);
      setDisabled(true);
    }
  };

  return (
    <Box>
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
                disabled={disabled}
                onChange={handleOnChange}
                sx={{ width: "570px" }}
              />
              {/* Lista para escolher o jogador */}
              {searchedPlayerName &&
                playerNotTriedList.some((p) =>
                  validatePlayerName(p.name).includes(searchedPlayerName)
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
                    {playerNotTriedList
                      .filter((player) =>
                        validatePlayerName(player.name).includes(
                          searchedPlayerName
                        )
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
                {playerTriedList
                  .flatMap((p, index) => {
                    return { ...p, order: index };
                  })
                  .sort((a, b) => b.order - a.order)
                  .map((player) => (
                    <PlayerCard
                      key={`homepage-triedPlayers-playerCard-${player.id}`}
                      player={player}
                      playerToMatch={randomPlayer}
                    />
                  ))}
              </List>
            </Box>
          }
        />
      </Box>
      <EmojiRain active={activeEmojiRain} />
    </Box>
  );
};
