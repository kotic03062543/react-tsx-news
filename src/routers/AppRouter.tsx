import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import HomeView from "../pages/HomePage/View";
import DetailView from "../pages/NewsDetail/View";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomeView/></Layout>} />
      <Route path="/:category" element={<Layout><HomeView/></Layout>} />
      {/* <Route path="/General" element={<Layout><SportView/></Layout>} />
      <Route path="/business" element={<Layout><BusinesView/></Layout>} /> */}
      {/* <Route path="/entertainment" element={<div>entertainment Page</div>} /> */}
      <Route path="/news/:id" element={<div>News Detail Page</div>} />
      <Route path="/detail" element={<Layout><DetailView/></Layout>} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default AppRouter;
