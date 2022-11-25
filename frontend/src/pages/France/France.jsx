import "./France.css";
import Image1 from "@assets/mont-fuji.jpg";
import Image2 from "@assets/fushimi-inari.jpg";
import Image3 from "@assets/himeji.jpg";
import React, { useState } from "react";

const France = () => {
  const [indexSlider, setIndexSlider] = useState(0);
  const [showText, setShowText] = useState(false);

  const array = [
    {
      src: "src/assets/france-1.jpg",
      description:
        "Brock is one of the best anime chefs and someone who mastered his culinary prowess as a child. Brock is also known for cooking high-end dishes that never disappoint his companions or Pokémon and always take his utensils with him wherever he goes.",
    },
    {
      src: "src/assets/france-2.jpg",
      description:
        "Sanji is a very talented 21-year-old cook, born on March 2, from a noble family in North Blue but grew up in East Blue. He surpasses every cook he’s ever met except maybe his mentor, Zeff. He has a deep respect for all that concerns the art of cooking.",
    },
    {
      src: "src/assets/france-3.jpg",
      description:
        "Soma has been interested in cooking since childhood, an interest he shares with his father Jôichirô Yukihira.Sôma was, very quickly, able to cook alone some family dishes.Sôma did not hesitate to challenge her father in culinary battles",
    },
    {
      src: "src/assets/france-4.jpg",
      description:
        "Xavier is a good cook who lives in La Loupe. He cooks JavaScript. He is good at React recipes. Sometimes he plays Zelda during his breaks. ",
    },
    {
      src: "src/assets/france-5.jpg",
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
            <img className="image11" src={Image1} alt="montfuji" />
          </div>
          <div className="text1">
            <p className="text-bas">
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
            <img className="image22" src={Image2} alt="fushimi" />
          </div>
          <div className="text2">
            <p className="text-bas">
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
            <img className="image33" src={Image3} alt="himiji" />
          </div>
          <div className="text3">
            <p className="text-bas">
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
