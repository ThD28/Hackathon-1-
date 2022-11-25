import "./Italie.css";
import Image111 from "@assets/coliseum.jpg";
import Image222 from "@assets/trevifontain.jpg";
import Image333 from "@assets/pantheon.jpg";
import { useState } from "react";

const Italie = () => {
  const [indexSlider, setIndexSlider] = useState(0);
  const [showText, setShowText] = useState(false);

  const array = [
    {
      src: "src/assets/italie-1.jpg",
      description:
        "Brock is one of the best anime chefs and someone who mastered his culinary prowess as a child. Brock is also known for cooking high-end dishes that never disappoint his companions or Pokémon and always take his utensils with him wherever he goes.",
    },
    {
      src: "src/assets/italie-2.jpg",
      description:
        "Sanji is a very talented 21-year-old cook, born on March 2, from a noble family in North Blue but grew up in East Blue. He surpasses every cook he’s ever met except maybe his mentor, Zeff. He has a deep respect for all that concerns the art of cooking.",
    },
    {
      src: "src/assets/italie-3.jpg",
      description:
        "Soma has been interested in cooking since childhood, an interest he shares with his father Jôichirô Yukihira.Sôma was, very quickly, able to cook alone some family dishes.Sôma did not hesitate to challenge her father in culinary battles",
    },
    {
      src: "src/assets/italie-4.jpg",
      description:
        "Xavier is a good cook who lives in La Loupe. He cooks JavaScript. He is good at React recipes. Sometimes he plays Zelda during his breaks. ",
    },
    {
      src: "src/assets/italie-5.jpg",
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
