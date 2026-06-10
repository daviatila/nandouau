import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Artist from "./pages/Artist";
import JaSabia from "./pages/JaSabia";
import HistoriaJaSabia from "./pages/HistoriaJaSabia";
import Gallery from "./pages/Gallery";
import FloatingMenu from "./components/FloatingMenu";
import Socials from "./pages/Socials";

function App() {
  return (
    <BrowserRouter>

      <FloatingMenu />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/artista" element={<Artist />} />

        <Route path="/ja-sabia" element={<JaSabia />} />

        <Route path="/historia-ja-sabia" element={<HistoriaJaSabia />} />

        <Route path="/galeria" element={<Gallery />} />

        <Route path="/redes" element={<Socials />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;