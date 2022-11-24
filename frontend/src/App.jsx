import { Route, Routes } from "react-router-dom";
import Japon from "@pages/Japon";
import Voyage from "@pages/Voyage";
import Home from "@pages/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route exact path="/" element={<Japon />} />

        <Route exact path="/Voyage" element={<Voyage />} />
      </Routes>
    </div>
  );
}

export default App;
