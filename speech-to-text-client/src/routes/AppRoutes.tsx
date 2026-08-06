import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import History from "../pages/History";
import Recorder from "../pages/Recorder";

const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />

          <Route path="/recorder" element={<Recorder />} />

          <Route path="/history" element={<History />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;