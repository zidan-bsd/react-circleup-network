import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/_global.sass";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
