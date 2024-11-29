import { Box } from "@mui/material";
import { CSSProperties, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  padding?: CSSProperties["padding"];
}

export const Card: React.FC<CardProps> = ({
  children,
  width = "auto",
  height = "auto",
  padding = "24px",
}) => {
  return (
    <Box
      sx={{
        bgcolor: "#ffff",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgb(0,0,0,0.4)",
        padding: padding,
        width: width,
        height: height,
      }}
    >
      {children}
    </Box>
  );
};
