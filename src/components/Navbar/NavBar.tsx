import { AppBar, Button, Toolbar } from "@mui/material";

export const NavBar = () => {
  return (
    <AppBar position="fixed" sx={{ bgcolor: "#06aa48" }}>
      <Toolbar sx={{ flexDirection: "row-reverse" }}>
        <Button variant="text" sx={{ color: "black" }}>
          LOGIN
        </Button>
      </Toolbar>
    </AppBar>
  );
};
