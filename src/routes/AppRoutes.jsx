import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import Change from "../components/change/Change";

const AppRoutes = () => {
  return (
    <Router>
      <Change />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
