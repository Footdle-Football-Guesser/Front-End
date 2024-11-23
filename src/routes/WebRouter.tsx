import { Route, Routes } from "react-router-dom";
import { ConfigurationPage, HomePage } from "../pages/index";

const WebRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<ConfigurationPage />} />
    </Routes>
  );
};

export default WebRouter;
