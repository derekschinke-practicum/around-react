import PopupWithForm from './PopupWithForm';

function AddCardPopup(props) {
  return (
    <PopupWithForm
      name="add"
      title="New place"
      buttonValue="Create"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <label>
        <input
          type="text"
          name="title"
          id="card-title"
          className="popup__input popup__input_type_title"
          placeholder="Title"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="popup__error" id="card-title-error"></span>
      </label>

      <label>
        <input
          type="url"
          name="url"
          id="card-url"
          className="popup__input popup__input_type_image-url"
          placeholder="Image link"
          required
        />
        <span className="popup__error" id="card-url-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddCardPopup;
