import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import HomeView from "../pages/HomePage/View";
import SearchNewsView from "../pages/SearchNews/View";
import TestUi from "../pages/TestInterView/view";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomeView/></Layout>} />
      <Route path="/:category" element={<Layout><HomeView/></Layout>} />
      <Route path="business" element={<Layout><TestUi/></Layout>} />
      {/* <Route path="/news/:id" element={<div>News Detail Page</div>} /> */}
      <Route path="/search/:q" element={<Layout><SearchNewsView/></Layout>} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default AppRouter;
