import { Box } from "@mui/material";
import { BrasileiraoPlayer } from "../../util";

interface PlayerCardProps {
  brasileiraoPlayer: BrasileiraoPlayer;
  playerOfTheDay?: BrasileiraoPlayer;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({
  brasileiraoPlayer,
  playerOfTheDay,
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
        <Box
          sx={{
            // width: "50px",
            height: "50px",
            padding: "10px",
            borderColor: "black",
            borderWidth: "2px",
            borderStyle: "solid",
          }}
        >
          <span>{brasileiraoPlayer.name}</span>
        </Box>
        <Box
          sx={{
            // width: "50px",
            height: "50px",
            padding: "10px",
            borderColor: "black",
            borderWidth: "2px",
            borderStyle: "solid",
          }}
        >
          <span>{brasileiraoPlayer.position}</span>
        </Box>
        <Box
          sx={{
            // width: "50px",
            height: "50px",
            padding: "10px",
            borderColor: "black",
            borderWidth: "2px",
            borderStyle: "solid",
          }}
        >
          <span>{brasileiraoPlayer.nationality}</span>
        </Box>
        <Box
          sx={{
            // width: "50px",
            height: "50px",
            padding: "10px",
            borderColor: "black",
            borderWidth: "2px",
            borderStyle: "solid",
          }}
        >
          <span>{brasileiraoPlayer.shirtNumber}</span>
        </Box>
        <Box
          sx={{
            // width: "50px",
            height: "50px",
            padding: "10px",
            borderColor: "black",
            borderWidth: "2px",
            borderStyle: "solid",
          }}
        >
          <span>{brasileiraoPlayer.team}</span>
        </Box>
        <Box
          sx={{
            // width: "50px",
            height: "50px",
            padding: "10px",
            borderColor: "black",
            borderWidth: "1px",
          }}
        >
          <span>{brasileiraoPlayer.age}</span>
        </Box>
      </Box>
      {playerOfTheDay && playerOfTheDay.name === brasileiraoPlayer.name && (
        <span>
          Parabéns, você acertou o jogador do dia! {playerOfTheDay.name}
        </span>
      )}
    </Box>
  );
};
