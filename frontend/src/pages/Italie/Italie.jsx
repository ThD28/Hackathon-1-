import "./Italie.css";
import Image111 from "@assets/coliseum.jpg";
import Image222 from "@assets/trevifontain.jpg";
import Image333 from "@assets/pantheon.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

const Italie = () => {
  const [indexSlider, setIndexSlider] = useState(0);
  const [showText, setShowText] = useState(false);

  const array = [
    {
      src: "src/assets/italie-1.jpg",
      description: "The tower of Pisa",
    },
    {
      src: "src/assets/italie-2.jpg",
      description: "Venice",
    },
    {
      src: "src/assets/italie-3.jpg",
      description: "The river of italy",
    },
    {
      src: "src/assets/italie-4.jpg",
      description: "Ligurie",
    },
    {
      src: "src/assets/italie-5.jpg",
      description: "Toscane",
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
        "https://api.openweathermap.org/data/2.5/weather?lat=41.8933203&lon=12.4829321&appid=d4f87411186c04729acba8905ecd87c7"
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
        "https://api.openweathermap.org/data/2.5/weather?lat=41.8933203&lon=12.4829321&appid=d4f87411186c04729acba8905ecd87c7"
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
        "https://api.openweathermap.org/data/2.5/weather?lat=41.8933203&lon=12.4829321&appid=d4f87411186c04729acba8905ecd87c7"
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
      <div className="italie-body">
        <h2 className="title-japon">Italie</h2>
      </div>
      <div className="history">
        <h3>History of Italy</h3>
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
            Italy is a country of southern Europe, consisting of a peninsula in
            the shape of a boot in the center of the Mediterranean Sea and
            comprising two important islands: Sardinia and Sicily. .{" "}
          </p>
        </div>
        <div className="image1-text1">
          <div className="image1">
            <img className="image11" src={Image111} alt="coliseum" />
          </div>
          <div className="text1">
            <p className="text-bas">
              <div className="meteo-info">
                <a href="/#">{tempDegree1.toFixed(2)}°C</a>
                <img
                  src={urlMeteo}
                  alt={weatherApi.weather.icon}
                  width="25em"
                  height="25em"
                />
              </div>
              The Colosseum, originally the Flavian Amphitheatre, is a huge
              ovoid amphitheatre located in the centre of the city of Rome,
              between the Esquiline and the Cælius, the largest ever built in
              the Roman Empire. It is one of the greatest works of Roman
              architecture and engineering.
            </p>
          </div>
        </div>
        <div className="image2-text2">
          <div className="image2">
            <img className="image22" src={Image222} alt="fontain" />
          </div>
          <div className="text2">
            <p className="text-bas">
              <div className="meteo-info">
                <a href="/#">{tempDegree2.toFixed(2)}°C</a>
                <img
                  src={urlMeteo2}
                  alt={weatherApi2.weather.icon}
                  width="25em"
                  height="25em"
                />
              </div>
              The Trevi Fountain is the largest and one of the most famous
              fountains in Rome. Built between 1732 and 1762, it is located in
              the Trevi River, in Piazza di Trevi, and is backed by the Poli
              Palace.
            </p>
          </div>
        </div>
        <div className="image3-text3">
          <div className="image3">
            <img className="image33" src={Image333} alt="pantheon" />
          </div>
          <div className="text3">
            <p className="text-bas">
              <div className="meteo-info">
                <a href="/#">{tempDegree3.toFixed(2)}°C</a>
                <img
                  src={urlMeteo3}
                  alt={weatherApi3.weather.icon}
                  width="25em"
                  height="25em"
                />
              </div>
              The Pantheon of Rome is an ancient religious building located in
              Piazza della Rotonda (Rome), built on the order of Agrippa in the
              1st century BC. Damaged by several fires, it was completely
              rebuilt under Hadrian.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Italie;
