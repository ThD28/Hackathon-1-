import "./formulaire.css";
import { useState } from "react";
import axios from "axios";

const Formulaire = ({ open, children, onClosePopUp }) => {
  const [dataForm, setDataForm] = useState({
    Name: "",
    Country: "",
    City: "",
    Message: "",
    Img: "",
  });

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let { Name, Country, City, Message, Img } = dataForm;
    if (!Name || !Country || !City) {
      alert("You need to complete all necessary input");
    } else {
      axios
        .post("http://localhost:8000/travels", {
          Name,
          Country,
          City,
          Message,
          Img,
        })
        .then(() => {
          setDataForm({
            Name: "",
            Country: "",
            City: "",
            Message: "",
            Img: "",
          });
        });
      alert("Your travel has been correctly added to your list");
      axios("http://localhost:8000/travels")
        .then((data) => {
          setDataForm(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    window.location.reload();
  };

  if (!open) return null;
  return (
    <div className="formPopUp">
      <div className="modal">
        <form className="formItems">
          <h1>Create Your Dream Travel</h1>
          <section className="input-label-container">
            <div className="input-container">
              <label htmlFor="Name">
                Name
                <input
                  id="Name"
                  type="text"
                  name="Name"
                  required
                  value={dataForm.Name}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label htmlFor="Country">
                Country
                <input
                  id="Country"
                  type="text"
                  name="Country"
                  required
                  value={dataForm.Country}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label htmlFor="City">
                City
                <input
                  id="City"
                  type="text"
                  name="City"
                  required
                  value={dataForm.City}
                  onChange={handleChange}
                />
              </label>
            </div>{" "}
            <div className="input-container">
              <label htmlFor="Message">
                Message
                <input
                  id="Message"
                  type="text"
                  name="Message"
                  required
                  value={dataForm.Message}
                  onChange={handleChange}
                />
              </label>
            </div>{" "}
            <div className="input-container">
              <label htmlFor="Img">
                Image
                <input
                  id="Img"
                  type="text"
                  name="Img"
                  required
                  value={dataForm.Img}
                  onChange={handleChange}
                />
              </label>
            </div>{" "}
          </section>
        </form>
        <section className="btns-form">
          <button
            type="button"
            className="btn-pop-close"
            onClick={onClosePopUp}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn-pop-submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </section>
        {children}
      </div>
    </div>
  );
};

export default Formulaire;
