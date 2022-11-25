import { useState } from "react";
import MyList from "../../components/MyList/MyList";
import Formulaire from "@components/Formulaire/Formulaire";
import "./Voyage.css";
import DeleteForm from "@components/DeleteForm/DeleteForm";

const myTravelImage = [
  {
    id: 1,
    url: "https://i.la-croix.com/1400x933/smart/2016/08/11/1200781662/musee-Louvre-second-touristique-levisite-France-derriere-dattractions-Disneyland-Paris_0.jpg",
    name: "Le Louvre",
  },
  {
    id: 2,
    url: "https://blog.logitravel.fr/wp-content/uploads/2019/01/1-1.jpg",
    name: "Château",
  },
  {
    id: 3,
    url: "https://geo.img.pmdstatic.net/scale/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FGEO.2F2019.2F09.2F20.2Ff9114492-c2b0-4269-9658-56e177ffed90.2Ejpeg/autox600/quality/65/10-l-opera-de-sydney-australie.jpg",
    name: "Australie",
  },
  {
    id: 4,
    url: "https://blog.logitravel.fr/wp-content/uploads/2019/01/portada-1280x720.jpg",
    name: "Montagne",
  },
];

const myTravelImage2 = [
  {
    id: 1,
    url: "data:image/jpeg;base64,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",
    name: "Le Louvre",
  },
  {
    id: 2,
    url: "https://www.condorferries.co.uk/remote.axd/condorlivemedia.azureedge.net/media/11508/france-tourism-stats-2.jpg?anchor=center&amp;mode=crop&amp;width=1920&amp;height=1080&amp;rnd=132200387810000000",
    name: "Château",
  },
  {
    id: 3,
    url: "https://www.floornature.eu/media/photos/1/16892/01_Zone-of-Utopia_Mathieu_Forest-Arch_Ice-Cubes_ph-ArchExist_full.jpg",
    name: "Australie",
  },
  {
    id: 4,
    url: "https://ak-d.tripcdn.com/images/0102f12000a2tywlo1DF0.jpg?proc=source%2Ftrip",
    name: "Montagne",
  },
];

const Voyage = () => {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const [isOpenPopUp2, setIsOpenPopUp2] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setIsOpenPopUp(true);
  }
  function handleClick2(e) {
    e.preventDefault();
    setIsOpenPopUp2(true);
  }
  return (
    <div className="Voyage-Container">
      <div className="MyTravel-Container">
        <div className="MyTravel-Title">
          <h2>Trips</h2>
        </div>
        <div className="MyTravel-Image">
          {myTravelImage.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundImage: `url(${item.url})`,
              }}
              className="itemBg"
            />
          ))}
        </div>
        <div className="MyTravel-Image">
          {myTravelImage2.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundImage: `url(${item.url})`,
              }}
              className="itemBg"
            />
          ))}
        </div>
        <div className="MyTravel-Button">
          <button type="button" className="btn-grad" onClick={handleClick}>
            Create
          </button>
          <button type="button" className="btn-grad" onClick={handleClick2}>
            Delete
          </button>
        </div>
      </div>
      <div className="MyTravel-MyList">
        <Formulaire
          open={isOpenPopUp}
          onClosePopUp={() => setIsOpenPopUp(false)}
        />
        <DeleteForm
          open={isOpenPopUp2}
          onClosePopUp={() => setIsOpenPopUp2(false)}
        />
        <MyList />
      </div>
    </div>
  );
};

export default Voyage;
