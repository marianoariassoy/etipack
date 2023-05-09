import { BrowserRouter, Route, Routes } from "react-router-dom";

import NosotrosContainer from "./pages/nosotros/NosotrosContainer";
import MultipaginasContainer from "./pages/multipaginas/MultipaginasContainer";
import AutoadhesivasContainer from "./pages/autoadhesivas/AutoadhesivasContainer";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NosotrosContainer />} />
          <Route path="/sobre-nosotros" element={<NosotrosContainer />} />
          <Route path="/etiquetas-autoadhesivas" element={<AutoadhesivasContainer />} />
          <Route path="/etiquetas-multipagina" element={<MultipaginasContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
