import { Route, Routes, useLocation } from "react-router-dom";
import Japon from "@pages/Japon/Japon";
import France from "@pages/France/France";
import Voyage from "@pages/Voyage/Voyage";
import Home from "@pages/Home/Home";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import Scroll from "@components/Skroll/Scroll";
import "./App.css";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname !== "/" && <Header />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Japon" element={<Japon />} />
        <Route exact path="/France" element={<France />} />
        <Route exact path="/Voyage" element={<Voyage />} />
      </Routes>
      <Scroll />
      {pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
