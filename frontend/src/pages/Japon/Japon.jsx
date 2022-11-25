import "./Japon.css";
import Image1 from "@assets/mont-fuji.jpg";
import Image2 from "@assets/fushimi-inari.jpg";
import Image3 from "@assets/himeji.jpg";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Japon = () => {
  const [indexSlider, setIndexSlider] = useState(0);
  const [showText, setShowText] = useState(false);

  const array = [
    {
      src: "src/assets/japan-1.jpg",
      description:
        "Brock is one of the best anime chefs and someone who mastered his culinary prowess as a child. Brock is also known for cooking high-end dishes that never disappoint his companions or Pokémon and always take his utensils with him wherever he goes.",
    },
    {
      src: "src/assets/japan-2.jpg",
      description:
        "Sanji is a very talented 21-year-old cook, born on March 2, from a noble family in North Blue but grew up in East Blue. He surpasses every cook he’s ever met except maybe his mentor, Zeff. He has a deep respect for all that concerns the art of cooking.",
    },
    {
      src: "src/assets/japan-3.jpg",
      description:
        "Soma has been interested in cooking since childhood, an interest he shares with his father Jôichirô Yukihira.Sôma was, very quickly, able to cook alone some family dishes.Sôma did not hesitate to challenge her father in culinary battles",
    },
    {
      src: "src/assets/japan-4.jpg",
      description:
        "Xavier is a good cook who lives in La Loupe. He cooks JavaScript. He is good at React recipes. Sometimes he plays Zelda during his breaks. ",
    },
    {
      src: "src/assets/japan-5.jpg",
      description:
        "Teuchi is a resident of Konoha and the owner of Ichiraku Ramen.He and his daughter, Ayame, consider Naruto Uzumaki their best customer and always treat him well.Naruto’s favorite dish, narutomaki, is a Japanese culinary decoration based on fish pâté, steamed, white with an orange pink spiral inside. ",
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
      <div className="japan-body">
        <h2 className="title-japon">Japan</h2>
      </div>
      <div className="history">
        <h3>History of Japan</h3>
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
            Japan is an island country in East Asia, located between the Pacific
            Ocean and the Sea of Japan, east of China, South Korea, North Korea
            and Russia, and north of Taiwan.{" "}
          </p>
        </div>
        <div className="image1-text1">
          <div className="image1">
            <img className="image11" src={Image1} alt="montfuji" />
          </div>
          <div className="text1">
            <p className="text-bas">
              <div className="meteo-info-jp">
                <span>{tempDegree1.toFixed(2)}°C</span>
                <img
                  src={urlMeteo}
                  alt={weatherApi.weather.icon}
                  width="25em"
                  height="25em"
                />
              </div>
              Mount Fuji (富士山, Fujisan, Japanese:), or Fugaku, located on the
              island of Honshū, is the highest mountain in Japan, with a summit
              elevation of 3,776.24 m. It is the second-highest volcano located
              on an island in Asia (after Mount Kerinci on the island of
              Sumatra), and seventh-highest peak of an island on Earth. Mount
              Fuji is an active stratovolcano that last erupted from 1707 to
              1708. The mountain is located about 100 km southwest of Tokyo and
              is visible from there on clear days. Mount Fuji's exceptionally
              symmetrical cone, which is covered in snow for about five months
              of the year, is commonly used as a cultural icon of Japan and it
              is frequently depicted in art and photography, as well as visited
              by sightseers and climbers.
            </p>
          </div>
        </div>
        <div className="image2-text2">
          <div className="image2">
            <img className="image22" src={Image2} alt="fushimi" />
          </div>
          <div className="text2">
            <p className="text-bas">
              <div className="meteo-info-jp">
                <span>{tempDegree2.toFixed(2)}°C</span>
                <img
                  src={urlMeteo2}
                  alt={weatherApi2.weather.icon}
                  width="25em"
                  height="25em"
                />
              </div>
              Fushimi Inari-taisha (伏見稲荷大社) is the head shrine of the kami
              Inari, located in Fushimi-ku, Kyoto, Kyoto Prefecture, Japan. The
              shrine sits at the base of a mountain also named Inari which is
              233 metres above sea level, and includes trails up the mountain to
              many smaller shrines which span 4 kilometres and take
              approximately 2 hours to walk up.
            </p>
          </div>
        </div>
        <div className="image3-text3">
          <div className="image3">
            <img className="image33" src={Image3} alt="himiji" />
          </div>
          <div className="text3">
            <p className="text-bas">
              <div className="meteo-info-jp">
                <span>{tempDegree3.toFixed(2)}°C</span>
                <img
                  src={urlMeteo3}
                  alt={weatherApi3.weather.icon}
                  width="25em"
                  height="25em"
                />
              </div>
              Himeji Castle (姫路城, Himeji-jō) is a hilltop Japanese castle
              complex situated in the city of Himeji which is located in the
              Hyōgo Prefecture of Japan. The castle is regarded as the finest
              surviving example of prototypical Japanese castle architecture,
              comprising a network of 83 rooms with advanced defensive systems
              from the feudal period. The castle is frequently known as
              Hakuro-jō or Shirasagi-jō because of its brilliant white exterior
              and supposed resemblance to a bird taking flight.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Japon;
