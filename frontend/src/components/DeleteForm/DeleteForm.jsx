import axios from "axios";
import { useState } from "react";
import "./DeleteForm.css";

const DeleteForm = ({ open, children, onClosePopUp }) => {
  if (!open) return null;

  const [del, setDel] = useState();

  const handleConfirme = (e) => {
    setDel(e.target.value);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8000/travels/${del}`)
      .then(alert("Your travel got succesfully remove"));
    window.location.reload();
  };

  return (
    <div className="formPopUp2">
      <div className="modal2">
        <form className="formItems2">
          <h1>Delete your travel</h1>
          <section className="input-label-container2">
            <div className="input-container2">
              <label htmlFor="Name">
                Name
                <input
                  id="Name"
                  type="text"
                  name="Name"
                  required
                  onChange={handleConfirme}
                />
              </label>
            </div>
          </section>
        </form>
        <section className="btns-form2">
          <button
            type="button"
            className="btn-pop-close2"
            onClick={onClosePopUp}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn-pop-submit2"
            onClick={handleDelete}
          >
            Confirm Delete
          </button>
        </section>
        {children}
      </div>
    </div>
  );
};

export default DeleteForm;
