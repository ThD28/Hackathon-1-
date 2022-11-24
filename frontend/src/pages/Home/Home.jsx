import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Travel Maker</h1>
      <Link to="/Japon">
        <button type="button" className="homeButton">
          Start Traveling
        </button>
      </Link>
    </div>
  );
};

export default Home;
