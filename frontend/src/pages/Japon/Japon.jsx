import "./Japon.css";
import React, { useState } from "react";

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
        <p>
          Japan is an island country in East Asia, located between the Pacific
          Ocean and the Sea of Japan, east of China, South Korea, North Korea
          and Russia, and north of Taiwan.{" "}
        </p>
      </div>
    </div>
  );
};

export default Japon;
