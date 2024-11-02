import { Route, Routes } from "react-router-dom";
import { LoginPage, HomePage } from "../pages/index";

const WebRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default WebRouter;
