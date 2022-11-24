import { Route, Routes } from "react-router-dom";
import Japon from "@pages/Japon/Japon";
import Voyage from "@pages/Voyage/Voyage";
import Home from "@pages/Home/Home";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Japon" element={<Japon />} />

        <Route exact path="/Voyage" element={<Voyage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
