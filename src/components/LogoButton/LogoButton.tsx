import { IconButton, SxProps, Theme } from "@mui/material";
import { useState } from "react";

interface LogoButton {
  width: string;
  height: string;
  src: string;
  buttonStylesProps?: SxProps<Theme> | undefined;
  url?: string;
}

export const LogoButton: React.FC<LogoButton> = ({
  width,
  height,
  buttonStylesProps,
  url,
  src,
}) => {
  const [logoScale, setLogoScale] = useState<number>(1);

  return (
    <IconButton
      disableRipple
      onMouseEnter={() => setLogoScale(1.2)}
      onMouseLeave={() => setLogoScale(1)}
      onClick={
        url
          ? () => window.open(`${url}`, "_blank", "noopener,noreferrer")
          : undefined
      }
      sx={{
        ...buttonStylesProps,
        cursor: url ? "pointer" : "default",
        width: width,
        height: height,
      }}
    >
      <img
        src={src}
        alt="logo"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          transform: `scale(${logoScale})`,
          transition: "transform 0.1s ease",
        }}
      />
    </IconButton>
  );
};
