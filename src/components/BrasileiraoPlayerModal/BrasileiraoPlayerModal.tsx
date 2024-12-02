import { BrasileiraoPlayerService } from "@/service";
import { BrasileiraoPlayer } from "@/types";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CloseIconRounded from "@mui/icons-material/Close";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";

type FormProps = {
  id: number;
  name: string;
  position: "atacante" | "meia" | "defensor" | "goleiro" | "";
  nationality: string;
  shirtNumber: number;
  age: number;
  team: string;
};

interface BrasileiraoPlayerModalProps {
  open: boolean;
  onClose: () => void;
  player?: BrasileiraoPlayer;
}

export const BrasileiraoPlayerModal: React.FC<BrasileiraoPlayerModalProps> = ({
  open,
  onClose,
  player,
}) => {
  //   const [loading, setLoading] = useState(true);
  const header = player ? "Editando Jogador" : "Novo Jogador";

  const { control, watch, reset } = useForm<FormProps>({
    defaultValues: {
      id: player?.id ?? 0,
      name: player?.name ?? "",
      position: player?.position ?? "",
      nationality: player?.nationality ?? "",
      shirtNumber: player?.shirtNumber ?? 0,
      age: player?.age ?? 0,
      team: player?.team ?? "",
    },
    mode: "all",
  });

  useEffect(() => {
    reset({
      id: player?.id ?? 0,
      name: player?.name ?? "",
      position: player?.position ?? "",
      nationality: player?.nationality ?? "",
      shirtNumber: player?.shirtNumber ?? 0,
      age: player?.age ?? 0,
      team: player?.team ?? "",
    });
  }, [player, reset]);

  const formValues = watch();

  const createBrasileiraoPlayer = () => {
    if (
      formValues.position != "" &&
      formValues.age != 0 &&
      formValues.shirtNumber != 0
    ) {
      const player = {
        name: formValues.name,
        nationality: formValues.nationality,
        position: formValues.position,
        shirtNumber: formValues.shirtNumber,
        age: formValues.age,
        team: formValues.team,
      };

      BrasileiraoPlayerService.createBrasileiraoPlayer(player)
        .then(() => {
          window.alert("Jogador criado com sucesso!");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
        .catch((e) => console.error(e));
    }
  };

  const updateBrasileiraoPlayer = () => {
    const player = {
      ...formValues,
    } as BrasileiraoPlayer;
    BrasileiraoPlayerService.updateBrasileiraoPlayer(player)
      .then(() => {
        window.alert("Jogador atualizado com sucesso!");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((e) => console.error(e));
  };

  const deleteBrasileiraoPlayer = (playerId: number) => {
    if (
      window.confirm(
        "Tem certeza que deseja realmente excluir o jogador selecionado?"
      )
    ) {
      BrasileiraoPlayerService.deleteBrasileiraoPlayer(playerId)
        .then(() => {
          window.alert("Jogador removido com sucesso!");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          onClose();
        })
        .catch((e) => console.error(e));
    }
  };

  return (
    <Modal
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={open}
      onClose={() => {
        reset({
          id: player?.id ?? 0,
          name: player?.name ?? "",
          position: player?.position ?? "",
          nationality: player?.nationality ?? "",
          shirtNumber: player?.shirtNumber ?? 0,
          age: player?.age ?? 0,
          team: player?.team ?? "",
        });
        onClose();
      }}
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
          <Typography variant="h6">{header}</Typography>
          <IconButton
            onClick={() => {
              reset({
                id: player?.id ?? 0,
                name: player?.name ?? "",
                position: player?.position ?? "",
                nationality: player?.nationality ?? "",
                shirtNumber: player?.shirtNumber ?? 0,
                age: player?.age ?? 0,
                team: player?.team ?? "",
              });
              onClose();
            }}
          >
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
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                variant="outlined"
                label={"Nome:"}
                autoFocus
                fullWidth
                {...field}
              />
            )}
          />
          <Controller
            name="position"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel id="player-position-label">Posição</InputLabel>
                <Select
                  labelId="player-position-label"
                  id="player-select-position"
                  label="Posição"
                  {...field}
                >
                  <MenuItem value={""} unselectable="on" disabled>
                    Posição:
                  </MenuItem>
                  <MenuItem value={"atacante"}>Atacante</MenuItem>
                  <MenuItem value={"meia"}>Meia</MenuItem>
                  <MenuItem value={"defensor"}>Defensor</MenuItem>
                  <MenuItem value={"goleiro"}>Goleiro</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            name="shirtNumber"
            control={control}
            render={({ field }) => (
              <TextField
                type="number"
                variant="outlined"
                label={"Nº da camisa:"}
                // defaultValue={playerSelected?.shirtNumber}
                fullWidth
                {...field}
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
            )}
          />
          <Controller
            name="nationality"
            control={control}
            render={({ field }) => (
              <TextField
                variant="outlined"
                label={"País de origem:"}
                fullWidth
                {...field}
              />
            )}
          />
          <Controller
            name="age"
            control={control}
            render={({ field }) => (
              <TextField
                type="number"
                variant="outlined"
                label={"Idade:"}
                fullWidth
                {...field}
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
            )}
          />
          <Controller
            name="team"
            control={control}
            render={({ field }) => (
              <TextField
                variant="outlined"
                label={"Time:"}
                fullWidth
                {...field}
              />
            )}
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
          {player && (
            <Button
              variant="contained"
              onClick={() => deleteBrasileiraoPlayer(formValues.id)}
              sx={{ bgcolor: "#06aa48" }}
            >
              <DeleteRoundedIcon />
            </Button>
          )}
          <Button
            variant="contained"
            onClick={() => {
              if (player) {
                updateBrasileiraoPlayer();
              } else {
                createBrasileiraoPlayer();
              }
            }}
            sx={{ bgcolor: "#06aa48" }}
          >
            <span>Salvar</span>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
