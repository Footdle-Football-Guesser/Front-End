import { Box } from "@mui/material";
import WebRouter from "./routes/WebRouter";
import { NavBar } from "./components";

function App() {
  return (
    //NOTE: 'Box' pai de todas
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <NavBar />
      <Box
        component={"main"}
        sx={{
          height: "100%",
          width: "100%",
          paddingTop: "10vh",
          backgroundImage: `url(/src/assets/cbf-wallpaper.jpg)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <WebRouter />
      </Box>
    </Box>
  );
}

export default App;
