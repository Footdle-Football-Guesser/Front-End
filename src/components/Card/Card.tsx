import { Box } from "@mui/material";
import { CSSProperties } from "react";

interface CardProps {
  content: React.ReactNode;
  width: CSSProperties["width"];
}

export const Card: React.FC<CardProps> = ({ content, width }) => {
  return (
    <Box
      sx={{
        bgcolor: "#ffff",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgb(0,0,0,0.4)",
        padding: "24px",
        width: width,
        height: "auto",
      }}
    >
      {content}
    </Box>
  );
};
