import { Route, Routes } from "react-router-dom";
import Japon from "@pages/Japon";
import Voyage from "@pages/Voyage";
// import Home from "@pages/Home";
import Footer from "@components/Footer";
import Header from "@components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Japon />} />

        <Route exact path="/Voyage" element={<Voyage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
