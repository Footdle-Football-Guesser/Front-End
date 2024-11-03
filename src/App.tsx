import { Box } from "@mui/material";
import WebRouter from "./routes/WebRouter";
import { NavBar } from "./components";

function App() {
  return (
    //NOTE: 'Box' pai de todas
    <Box
      sx={{
        height: "100%",
      }}
    >
      <NavBar />
      <Box
        component={"main"}
        sx={{
          height: "calc(100vh - 89px)",
          width: "100%",
          marginTop: "89px",
          overflow: "hidden",
        }}
      >
        <WebRouter />
      </Box>
    </Box>
  );
}

export default App;
