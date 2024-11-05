import { Box } from "@mui/material";

interface CardProps {
  content: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ content }) => {
  return (
    <Box
      sx={{
        bgcolor: "#ffff",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgb(0,0,0,0.4)",
        padding: "24px",
        width: "250px",
        height: "auto",
      }}
    >
      {content}
    </Box>
  );
};
