import "./formulaire.css";

const Formulaire = ({ open, children, onClosePopUp }) => {
  if (!open) return null;
  return (
    <div className="formPopUp">
      <div className="modal">
        <form className="formItems">
          <h1>Create Your Dream Travel</h1>
          <section className="input-label-container">
            <div class="input-container">
              <label>Name</label>
              <input type="text" name="name" required />
            </div>
            <div class="input-container">
              <label>Country</label>
              <input type="text" name="country" required />
            </div>
            <div class="input-container">
              <label>City</label>
              <input type="text" name="city" required />
            </div>{" "}
            <div class="input-container">
              <label>Message</label>
              <input type="text" name="message" required />
            </div>{" "}
            <div class="input-container">
              <label>Image</label>
              <input type="text" name="image" required />
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
          <button type="button" className="btn-pop-submit">
            Submit
          </button>
        </section>
        {children}
      </div>
    </div>
  );
};

export default Formulaire;
