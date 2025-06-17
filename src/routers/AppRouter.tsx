import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout> </Layout>} />
      <Route path="/about" element={<div>About Page</div>} />
      <Route path="/contact" element={<div>Contact Page</div>} />
      <Route path="/news" element={<div>News Page</div>} />
      <Route path="/news/:id" element={<div>News Detail Page</div>} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default AppRouter;
