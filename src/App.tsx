import { Box, CircularProgress } from "@mui/material";
import WebRouter from "./routes/WebRouter";
import { NavBar } from "./components";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateBrasileiraoPlayerList } from "@/store/brasileiraoPlayer/brasileiraoPlayerSlice";
import { useEffect, useState } from "react";
import { BrasileiraoPlayerService } from "@/service";
import { selectApp } from "./store/app/appSlice";

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const { topBarHeight } = useAppSelector(selectApp);

  useEffect(() => {
    BrasileiraoPlayerService.getAllBrasileiraoPlayers()
      .then((data) => {
        dispatch(updateBrasileiraoPlayerList(data));
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CircularProgress size={150} thickness={3} color="info" />
      </Box>
    );
  }

  return (
    //NOTE: 'Box' pai de todas
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />
      <Box
        component={"main"}
        sx={{
          flex: 1,
          paddingTop: `calc(${topBarHeight}px + 2%)`,
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
