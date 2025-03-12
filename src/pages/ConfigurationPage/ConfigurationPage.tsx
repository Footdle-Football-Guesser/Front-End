import { Box, IconButton, List, TextField, Typography } from "@mui/material";
import { Card, PlayerCard } from "@/components/";
import { useRef, useState } from "react";
import { DBrasileiraoPlayer } from "@/types/types";
import SearchIconRounded from "@mui/icons-material/Search";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { BrasileiraoPlayerModal } from "@/components/BrasileiraoPlayerModal";
import { useAppSelector } from "@/store/hooks";
import { selectBrasileiraoPlayerList } from "@/store/brasileiraoPlayer/brasileiraoPlayerSlice";

export const ConfigurationPage = () => {
  const brasileiraoPlayerList = useAppSelector(selectBrasileiraoPlayerList);
  const [searchedPlayerName, setSearchedPlayerName] = useState<string>();
  const [playerToModal, setPlayerToModal] = useState<DBrasileiraoPlayer>();
  const [openModal, setOpenModal] = useState(false);
  const searchTextFieldRef = useRef<HTMLInputElement | null>(null);

  const handleSearchPlayer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedPlayerName(e.target.value.toLocaleLowerCase());
  };

  const handleOpenModal = (player?: DBrasileiraoPlayer) => {
    setPlayerToModal(player);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setPlayerToModal(undefined);
    setOpenModal(false);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          width={"600px"}
          children={
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
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
