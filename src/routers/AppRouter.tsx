import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import HomeView from "../pages/HomePage/View";
import SportView from "../pages/Sport/View";
import BusinesView from "../pages/Business/View";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomeView/></Layout>} />
      <Route path="/graph" element={<Layout><SportView/></Layout>} />
      <Route path="/business" element={<Layout><BusinesView/></Layout>} />
      <Route path="/news" element={<div>News Page</div>} />
      <Route path="/news/:id" element={<div>News Detail Page</div>} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default AppRouter;
