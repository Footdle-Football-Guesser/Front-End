import {
  Box,
  CircularProgress,
  IconButton,
  List,
  TextField,
  Typography,
} from "@mui/material";
import { Card, PlayerCard } from "@/components/";
import { useEffect, useRef, useState } from "react";
import { BrasileiraoPlayer } from "@/types/types";
import { BrasileiraoPlayerService } from "@/service";
import SearchIconRounded from "@mui/icons-material/Search";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { BrasileiraoPlayerModal } from "@/components/BrasileiraoPlayerModal";

export const ConfigurationPage = () => {
  const [brasileiraoPlayerList, setBrasileiraoPlayersList] = useState<
    BrasileiraoPlayer[]
  >([]);
  const [searchedPlayerName, setSearchedPlayerName] = useState<string>();
  const [loading, setLoading] = useState(true);
  const [playerToModal, setPlayerToModal] = useState<BrasileiraoPlayer>();
  const [openModal, setOpenModal] = useState(false);
  const searchTextFieldRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    BrasileiraoPlayerService.getAllBrasileiraoPlayers()
      .then((data) => {
        setBrasileiraoPlayersList(data);
        setLoading(false);
      })
      .catch((e) => console.error(e));
  }, []);

  const handleSearchPlayer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedPlayerName(e.target.value.toLocaleLowerCase());
  };

  const handleOpenModal = (player?: BrasileiraoPlayer) => {
    setPlayerToModal(player);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    // NOTE: esse codigo comentado faz: ao fechar o modal, retira o texto e os jogadores exibidos (reseta tudo)
    // if (searchTextFieldRef.current) {
    //   searchTextFieldRef.current.value = "";
    // }
    // setSearchedPlayerName(undefined);
    setPlayerToModal(undefined);
    setOpenModal(false);
  };

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
                // alignItems: "center",
                overflow: "auto",
                height: "500px",
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
              {/* Header */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Typography variant="h4" sx={{ marginBottom: "24px" }}>
                  Gerenciar Jogadores
                </Typography>
                <IconButton
                  sx={{
                    position: "absolute",
                    top: "9%",
                    left: 0,
                  }}
                  onClick={() => handleOpenModal(undefined)}
                >
                  <AddCircleOutlineRoundedIcon />
                </IconButton>
              </Box>
              {/* Search */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <SearchIconRounded />
                <TextField
                  inputRef={searchTextFieldRef}
                  variant="standard"
                  sx={{ width: "200px" }}
                  onChange={handleSearchPlayer}
                  placeholder="Digite o nome do jogador"
                />
              </Box>
              {/* Lista de jogadores */}
              <List
                sx={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                  padding: "10px",
                }}
              >
                {/* TODO: adicionar span + label */}
                {searchedPlayerName &&
                  brasileiraoPlayerList
                    .filter((player) =>
                      player.name.toLowerCase().includes(searchedPlayerName)
                    )
                    .map((player) => (
                      <PlayerCard
                        key={`configurationPage-playerCard-${player.id}`}
                        player={player}
                        onClick={() => handleOpenModal(player)}
                      />
                    ))}
              </List>
            </Box>
          }
        />
      </Box>
      <BrasileiraoPlayerModal
        open={openModal}
        onClose={handleCloseModal}
        player={playerToModal}
      />
    </Box>
  );
};
