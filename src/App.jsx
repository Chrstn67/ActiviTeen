import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ActivityPage from "./pages/ActivityPage";
import MentionsLegales from "./pages/MentionsLegales";
import NotFoundPage from "./pages/NotFoundPage";

import ScrollToTop from "./components/ScrollToTop";
import "./styles/App.css";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/activite/:type/:slug" element={<ActivityPage />} />
          <Route path="/mentions-legales/" element={<MentionsLegales />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
