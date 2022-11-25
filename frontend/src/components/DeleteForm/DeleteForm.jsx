import "./DeleteForm.css";

const DeleteForm = ({ open, children, onClosePopUp }) => {
  if (!open) return null;
  return (
    <div className="formPopUp2">
      <div className="modal2">
        <form className="formItems2">
          <h1>Delete your travel</h1>
          <section className="input-label-container2">
            <div className="input-container2">
              <label htmlFor="Name">
                Name
                <input id="Name" type="text" name="Name" required />
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
          <button type="submit" className="btn-pop-submit2">
            Confirme Delete
          </button>
        </section>
        {children}
      </div>
    </div>
  );
};

export default DeleteForm;
