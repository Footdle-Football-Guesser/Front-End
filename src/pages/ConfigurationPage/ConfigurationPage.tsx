import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  List,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Card } from "../../components";
import { useEffect, useState } from "react";
import { BrasileiraoPlayer } from "@/types/types";
import { BrasileiraoPlayerService } from "@/service";
import SearchIconRounded from "@mui/icons-material/Search";
import CloseIconRounded from "@mui/icons-material/Close";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

export const ConfigurationPage = () => {
  const [brasileiraoPlayerList, setBrasileiraoPlayersList] = useState<
    BrasileiraoPlayer[]
  >([]);
  const [searchedPlayerName, setSearchedPlayerName] = useState<string>();
  const [playerSelected, setPlayerSelected] = useState<BrasileiraoPlayer>();
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

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

  const handleOpenModal = (flag: boolean, player?: BrasileiraoPlayer) => {
    console.log(flag);
    if (player) {
      setPlayerSelected(player);
    }
    setOpenModal(flag);
  };

  const updateBrasileiraoPlayer = (player?: BrasileiraoPlayer) => {
    if (player) {
      console.log(player);
      BrasileiraoPlayerService.updateBrasileiraoPlayer(player).then((status) =>
        alert(status)
      );
    }
  };

  const deleteBrasileiraoPlayer = (playerId: number) => {
    BrasileiraoPlayerService.deleteBrasileiraoPlayer(playerId).then((status) =>
      alert(status)
    );
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
                alignItems: "center",
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
              <Typography variant="h4" sx={{ marginBottom: "24px" }}>
                Configurar Jogador
              </Typography>
              <Box>
                <SearchIconRounded />
                <TextField variant="standard" onChange={handleSearchPlayer} />
              </Box>
              <List
                sx={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                }}
              >
                {/* TODO: adicionar span + label */}
                {searchedPlayerName &&
                  brasileiraoPlayerList
                    .filter((player) =>
                      player.name
                        .toLocaleLowerCase()
                        .includes(searchedPlayerName)
                    )
                    .map((player, index) => (
                      <li key={`player-${index}-${player.id}`}>
                        <Box
                          sx={{ cursor: "pointer", position: "relative" }}
                          onClick={() => handleOpenModal(true, player)}
                        >
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
                        </Box>
                      </li>
                    ))}
                <Modal
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  open={openModal}
                  onClose={() => handleOpenModal(false)}
                >
                  <Box
                    sx={{
                      bgcolor: "#fff",
                      borderRadius: "8px",
                      boxShadow: 24,
                      p: 4,
                      width: "500px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h6">Editando Jogador</Typography>
                      <IconButton onClick={() => handleOpenModal(false)}>
                        <CloseIconRounded />
                      </IconButton>
                    </Box>
                    {/* TODO: adidioncar react-hook-form */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        marginTop: "10px",
                      }}
                    >
                      <TextField
                        variant="outlined"
                        label={"Nome:"}
                        defaultValue={playerSelected?.name}
                        autoFocus
                        fullWidth
                      />
                      <TextField
                        variant="outlined"
                        fullWidth
                        label={"Posição:"}
                        defaultValue={playerSelected?.position}
                      />
                      <TextField
                        variant="outlined"
                        label={"Número da Camisa:"}
                        fullWidth
                        defaultValue={playerSelected?.shirtNumber.toString()}
                      />
                      <TextField
                        variant="outlined"
                        label={"Nacionalidade:"}
                        defaultValue={playerSelected?.nationality}
                        fullWidth
                      />
                      <TextField
                        variant="outlined"
                        label={"Idade:"}
                        fullWidth
                        defaultValue={playerSelected?.age.toString()}
                      />
                      <TextField
                        variant="outlined"
                        label={"Time:"}
                        fullWidth
                        defaultValue={playerSelected?.team}
                      />
                    </Box>
                    {/* TODO: estilizar botoes */}
                    <Box
                      sx={{
                        display: "flex",
                        gap: "4px",
                        flexDirection: "row-reverse",
                        marginTop: "10px",
                      }}
                    >
                      <Button
                        variant="contained"
                        onClick={() =>
                          deleteBrasileiraoPlayer(playerSelected?.id ?? 0)
                        }
                      >
                        <DeleteRoundedIcon />
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => updateBrasileiraoPlayer(playerSelected)}
                      >
                        <span>Salvar</span>
                      </Button>
                    </Box>
                  </Box>
                </Modal>
              </List>
            </Box>
          }
        />
      </Box>
    </Box>
  );
};
