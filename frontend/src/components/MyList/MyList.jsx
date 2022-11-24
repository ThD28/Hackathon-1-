import { useState } from "react";
import "./MyList.css";

const MyList = () => {
  const [accor, setAccor] = useState(false);
  const handleAccor = () => {
    setAccor(!accor);
  };
  return (
    <div className="MyList-Container">
      <div className="MyList-Title">
        <h2>My Travel :</h2>
      </div>
      <div className="MyList-Text">
        <button type="button" onClick={handleAccor}>
          Name :
        </button>
        <div className={`${accor ? "showAccor" : "hideAccor"}`}>
          <div className="Accor-Country">
            <span>Country : </span>France
          </div>
          <div className="Accor-City">
            <span>City : </span>Paris, Toulouse, La Loupe
          </div>
          <div className="Accor-Message">
            <span>Message : </span>Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quos vitae, voluptates explicabo ipsum ea
            deserunt? Aliquid suscipit dolorum mollitia recusandae, corrupti
            praesentium ea voluptatibus odit autem esse, necessitatibus maxime
            omnis?
          </div>
          <div className="Accor-Image" />
        </div>
      </div>
    </div>
  );
};

export default MyList;
