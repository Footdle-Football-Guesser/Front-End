import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage, HomePage } from "../pages/index";

const WebRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default WebRouter;
