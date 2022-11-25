import "./Brasil.css";
import Image1111 from "@assets/christ.jpg";
import Image2222 from "@assets/diamantina.jpg";
import Image3333 from "@assets/tijuca.jpg";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Brasil = () => {
  const [indexSlider, setIndexSlider] = useState(0);
  const [showText, setShowText] = useState(false);

  const array = [
    {
      src: "src/assets/brasil-1.jpg",
      description: "Sao Luis",
    },
    {
      src: "src/assets/brasil-2.jpg",
      description: "Rio de Janeiro",
    },
    {
      src: "src/assets/brasil-3.jpg",
      description: "Slums in Rio de Janeiro",
    },
    {
      src: "src/assets/brasil-4.jpg",
      description: "Sao Paulo",
    },
    {
      src: "src/assets/brasil-5.jpg",
      description: "Iguazu Falls",
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
        "https://api.openweathermap.org/data/2.5/weather?lat=35.4874565&lon=138.8078281&appid=d4f87411186c04729acba8905ecd87c7"
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
        "https://api.openweathermap.org/data/2.5/weather?lat=35.021041&lon=135.7556075&appid=d4f87411186c04729acba8905ecd87c7"
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
        "https://api.openweathermap.org/data/2.5/weather?lat=34.8153529&lon=134.6854793&appid=d4f87411186c04729acba8905ecd87c7"
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
      <div className="brasil-body">
        <h2 className="title-japon">Brasil</h2>
      </div>
      <div className="history">
        <h3>History of Brasil</h3>
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
            Brazil (in Portuguese: Brasil/bɾaůziw/), the Federative Republic of
            Brazil (República Federativa do Brasil), is the largest state in
            Latin America. Brazil, designated as a continent-country, is the
            fifth largest country in the world, behind Russia, Canada, the
            United States and China.{" "}
          </p>
        </div>
        <div className="image1-text1">
          <div className="image1">
            <img className="image11" src={Image1111} alt="christ" />
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
              Christ the Redeemer is a large statue of Christ dominating the
              city of Rio de Janeiro in Brazil, from the top of Mount Corcovado.
              Over the years, it has become one of the city’s internationally
              recognized emblems, as well as Pain de Sucre, Copacabana beach and
              carnival.
            </p>
          </div>
        </div>
        <div className="image2-text2">
          <div className="image2">
            <img className="image22" src={Image2222} alt="diamantina" />
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
              The Chapada Diamantina National Park is a natural park of Brazil
              located in the environment of the Chapada Diamantina, in the state
              of Bahia; the park is located about 400 km from Salvador, the
              state capital. Created in 1985 by federal decree, it covers an
              area of 1,520 km² and includes the main municipalities of Andaraí,
              Ibicoara, Itaetê, Lençóis, Mucugê and Palmeiras.-
            </p>
          </div>
        </div>
        <div className="image3-text3">
          <div className="image3">
            <img className="image33" src={Image3333} alt="tijuca" />
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
              The Tijuca National Park is located in the city of Rio de Janeiro,
              Brazil. Among the tourist elements of the park, trails, caves and
              waterfalls, are famous landmarks of the city, such as the Stone of
              the Gávea, the Corcovado and the statue of Christ the Redeemer, or
              the Tijuca peak, the highest point of the park, 1022 meters above
              sea level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brasil;
