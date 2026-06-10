import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Artist from "./pages/Artist";
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

        <Route path="/galeria" element={<Gallery />} />

        <Route path="/redes" element={<Socials />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;