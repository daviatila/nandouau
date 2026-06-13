import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Artist from "./pages/Artist";
import Gallery from "./pages/Gallery";
import FloatingMenu from "./components/FloatingMenu";
import Socials from "./pages/Socials";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />
      
      <FloatingMenu />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/artista" element={<Artist />} />

        <Route path="/galeria" element={<Gallery />} />

        <Route path="/redes" element={<Socials />} />
      </Routes>

      <Analytics />

    </BrowserRouter>
  );
}

export default App;