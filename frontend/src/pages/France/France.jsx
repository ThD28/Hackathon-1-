import "./France.css";
import Image11 from "@assets/eiffel.jpg";
import Image22 from "@assets/notredame.jpg";
import Image33 from "@assets/chateauversailles.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

const France = () => {
  const [indexSlider, setIndexSlider] = useState(0);
  const [showText, setShowText] = useState(false);

  const array = [
    {
      src: "src/assets/france-1.jpg",
      description: "Paris",
    },
    {
      src: "src/assets/france-2.jpg",
      description: "the Louvre Museum of Paris",
    },
    {
      src: "src/assets/france-3.jpg",
      description: "Alsace",
    },
    {
      src: "src/assets/france-4.jpg",
      description: "The castle of Mont Saint Michel",
    },
    {
      src: "src/assets/france-5.jpg",
      description: "The French Riviera ",
    },
  ];

  const weatherTab = {
    main: {
      temp: 300,
    },
    weather: [
      {
        icon: "10d",
      },
    ],
  };

  const [weatherApi, setWeatherApi] = useState(weatherTab);
  const [weatherApi2, setWeatherApi2] = useState(weatherTab);
  const [weatherApi3, setWeatherApi3] = useState(weatherTab);

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=48.8588897&lon=2.3200410217200766&appid=d4f87411186c04729acba8905ecd87c7"
      )
      .then((response) => response.data)
      .then((data) => {
        setWeatherApi(data);
        console.error(data);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=48.8588897&lon=2.3200410217200766&appid=d4f87411186c04729acba8905ecd87c7"
      )
      .then((response) => response.data)
      .then((data) => {
        setWeatherApi2(data);
        console.error(data);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=48.8588897&lon=2.3200410217200766&appid=d4f87411186c04729acba8905ecd87c7"
      )
      .then((response) => response.data)
      .then((data) => {
        setWeatherApi3(data);
        console.error(data);
      });
  }, []);

  const urlMeteo = `https://openweathermap.org/img/wn/${weatherApi.weather[0].icon}@2x.png`;
  const tempDegree1 = weatherApi.main.temp - 273.15;
  const urlMeteo2 = `https://openweathermap.org/img/wn/${weatherApi2.weather[0].icon}@2x.png`;
  const tempDegree2 = weatherApi2.main.temp - 273.15;
  const urlMeteo3 = `https://openweathermap.org/img/wn/${weatherApi3.weather[0].icon}@2x.png`;
  const tempDegree3 = weatherApi3.main.temp - 273.15;

  const handlePrevious = () => {
    setShowText(false);
    if (indexSlider === 0) {
      setIndexSlider(array.length - 1);
    } else {
      setIndexSlider(indexSlider - 1);
    }
  };

  const handleNext = () => {
    setShowText(false);
    if (indexSlider === array.length - 1) {
      setIndexSlider(0);
    } else {
      setIndexSlider(indexSlider + 1);
    }
  };

  return (
    <div className="japan">
      <div className="france-body">
        <h2 className="title-japon">France</h2>
      </div>
      <div className="history">
        <h3>History of France</h3>
        <div className="container">
          <div>
            <img
              className="img-container-fluid blur"
              src={
                array[indexSlider - 1 < 0 ? array.length - 1 : indexSlider - 1]
                  .src
              }
              alt="name"
              key={indexSlider - 1 < 0 ? array.length - 1 : indexSlider - 1}
              onClick={handlePrevious}
              aria-hidden="true"
            />
          </div>
          <div className="div-container-fluid">
            <img
              className="img-container-fluid"
              src={array[indexSlider].src}
              alt="name"
              key={indexSlider}
              onClick={() => setShowText(!showText)}
              aria-hidden="true"
            />
            <p
              className={showText ? "show" : ""}
              onClick={() => setShowText(!showText)}
              aria-hidden="true"
            >
              {array[indexSlider].description}
            </p>
          </div>
          <div>
            <img
              className="img-container-fluid blur"
              src={
                array[indexSlider + 1 === array.length ? 0 : indexSlider + 1]
                  .src
              }
              alt="name"
              key={indexSlider + 1 === array.length ? 0 : indexSlider + 1}
              onClick={handleNext}
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="info">
          <p>
            France is a transcontinental sovereign state whose metropolitan
            territory extends into Western Europe and whose ultramarine
            territory extends into the Indian, Atlantic, Pacific, Antarctic6 and
            South America .{" "}
          </p>
        </div>
        <div className="image1-text1">
          <div className="image1">
            <img className="image11" src={Image11} alt="eiffel" />
          </div>
          <div className="text1">
            <p className="text-bas">
              <div className="meteo-info-fr">
                <span>{tempDegree1.toFixed(2)}°C</span>
                <img
                  src={urlMeteo}
                  alt={weatherApi.weather.icon}
                  width="25em"
                  height="25em"
                />
              </div>
              The Eiffel Tower is a 330m tall, puddled iron tower located in
              Paris, at the northwest end of the Champ-de-Mars park on the banks
              of the Seine in the 7th arrondissement. His official address is 5
              Avenue Anatole-France. Built in two years by Gustave Eiffel and
              his collaborators for the 1889 Paris World Exhibition, celebrating
              the centenary of the French Revolution, and initially named the
              «300-metre tower», it has become the symbol of the French capital
              and a leading tourist site.
            </p>
          </div>
        </div>
        <div className="image2-text2">
          <div className="image2">
            <img className="image22" src={Image22} alt="notredame" />
          </div>
          <div className="text2">
            <p className="text-bas">
              <div className="meteo-info-fr">
                <span>{tempDegree2.toFixed(2)}°C</span>
                <img
                  src={urlMeteo2}
                  alt={weatherApi2.weather.icon}
                  width="25em"
                  height="25em"
                />
              </div>
              FThe Notre-Dame Cathedral of Paris, commonly known as Notre-Dame,
              is one of the most emblematic monuments of Paris and France. It is
              located on the island of the City and is a place of Catholic
              worship, seat of the Archdiocese of Paris, dedicated to the Virgin
              Mary.
            </p>
          </div>
        </div>
        <div className="image3-text3">
          <div className="image3">
            <img className="image33" src={Image33} alt="himiji" />
          </div>
          <div className="text3">
            <p className="text-bas">
              <div className="meteo-info-fr">
                <span>{tempDegree3.toFixed(2)}°C</span>
                <img
                  src={urlMeteo3}
                  alt={weatherApi3.weather.icon}
                  width="25em"
                  height="25em"
                />
              </div>
              The Palace of Versailles is a historic castle and monument located
              in Versailles in Yvelines, France. It was the main residence of
              the kings of France Louis XIV, Louis XV and Louis XVI. The king,
              court, and government permanently resided there from 6 May 1682 to
              6 October 1789, except for the years of the Regency from 1715 to
              1723. Wanted by Louis XIV to glorify the French monarchy, the
              castle is the most important monument of his reign and one of the
              masterpieces of classical architecture. He had a great influence
              in Europe in the 18th and 19th centuries in the field of
              architecture and decorative arts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default France;
