import { useState, useEffect } from "react";
import "./MyList.css";

const MyList = () => {
  const [accor, setAccor] = useState(false);
  const handleAccor = () => {
    setAccor(!accor);
  };

  const [travels, setTravels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/travels")
      .then((res) => res.json())
      .then((data) => {
        setTravels(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="MyList-Container">
      <div className="MyList-Title">
        <h2>My Trips</h2>
      </div>
      <div className="MyList-Text">
        {travels.map((travel) => (
          <div>
            <button type="button" onClick={handleAccor}>
              Name : {travel.Name}
            </button>
            <div className={`${accor ? "showAccor" : "hideAccor"}`}>
              <div className="Accor-Country">
                <span>Country : </span>
                {travel.Country}
              </div>
              <div className="Accor-City">
                <span>City : </span>
                {travel.City}
              </div>
              <div className="Accor-Message">
                <span>Message : </span>
                {travel.Message}
              </div>
              <div className="Accor-Image" />
              <div className="Accor-Button">
                <button type="button">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyList;
