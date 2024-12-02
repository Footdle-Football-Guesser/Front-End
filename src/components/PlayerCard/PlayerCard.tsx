import { Box, MenuItem } from "@mui/material";
import { BrasileiraoPlayer } from "@/types";

interface PlayerCardProps {
  player: BrasileiraoPlayer;
  playerToMatch?: BrasileiraoPlayer;
  onClick?: () => void;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({
  player,
  playerToMatch,
  onClick,
}) => {
  return (
    <MenuItem
      key={`playerCard-${player.id}`}
      sx={{
        cursor: onClick ? "pointer" : "default",
        position: "relative",
        bgcolor: "#ede6e6",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgb(0,0,0,0.4)",
        width: "100%",
      }}
      onClick={onClick}
      disableTouchRipple={!onClick}
      disableRipple={!onClick}
      unselectable={onClick ? "on" : "off"}
    >
      <Box
        className="player-card"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          className="playerCard-box-properties"
          sx={{
            bgcolor: playerToMatch
              ? player.name === playerToMatch.name
                ? "#06AA48"
                : "#f24b4b"
              : "none",
          }}
        >
          <span>Nome:</span>
          <span>{player.name}</span>
        </Box>
        <Box
          className="playerCard-box-properties"
          sx={{
            bgcolor: playerToMatch
              ? player.team === playerToMatch.team
                ? "#06AA48"
                : "#f24b4b"
              : "none",
          }}
        >
          <span>Time:</span>
          <span>{player.team}</span>
        </Box>
        <Box
          className="playerCard-box-properties"
          sx={{
            bgcolor: playerToMatch
              ? player.position === playerToMatch.position
                ? "#06AA48"
                : "#f24b4b"
              : "none",
          }}
        >
          <span>Posição:</span>
          <span>{player.position}</span>
        </Box>
        <Box
          className="playerCard-box-properties"
          sx={{
            bgcolor: playerToMatch
              ? player.shirtNumber === playerToMatch.shirtNumber
                ? "#06AA48"
                : "#f24b4b"
              : "none",
          }}
        >
          <span>Camisa nº:</span>
          <span>
            {playerToMatch
              ? playerToMatch.shirtNumber > player.shirtNumber
                ? ">"
                : playerToMatch.shirtNumber < player.shirtNumber
                ? "<"
                : ""
              : ""}
            {player.shirtNumber}
          </span>
        </Box>
        <Box
          className="playerCard-box-properties"
          sx={{
            bgcolor: playerToMatch
              ? player.nationality === playerToMatch.nationality
                ? "#06AA48"
                : "#f24b4b"
              : "none",
          }}
        >
          <span>Nacionalidade:</span>
          <span>{player.nationality}</span>
        </Box>
        <Box
          className="playerCard-box-properties"
          sx={{
            bgcolor: playerToMatch
              ? player.age === playerToMatch.age
                ? "#06AA48"
                : "#f24b4b"
              : "none",
          }}
        >
          <span>Idade:</span>
          <span>
            {playerToMatch
              ? playerToMatch.age > player.age
                ? ">"
                : playerToMatch.age < player.age
                ? "<"
                : ""
              : ""}
            {player.age}
          </span>
        </Box>
      </Box>
    </MenuItem>
  );
};
