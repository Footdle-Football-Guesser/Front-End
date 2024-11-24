import { Box } from "@mui/material";
import { CSSProperties, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  width: CSSProperties["width"];
}

export const Card: React.FC<CardProps> = ({ children, width }) => {
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
      {children}
    </Box>
  );
};
