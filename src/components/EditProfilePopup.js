import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      name="edit"
      title="Edit profile"
      buttonValue="Save"
      isOpen={props.isEditProfilePopupOpen}
      onClose={props.handleCloseAllPopups}
    >
      <label>
        <input
          type="text"
          name="name"
          id="profile-name"
          className="popup__input popup__input_type_name"
          placeholder="Name"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__error" id="profile-name-error"></span>
      </label>
      <label>
        <input
          type="text"
          name="job"
          id="profile-job"
          className="popup__input popup__input_type_job"
          placeholder="About me"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="popup__error" id="profile-job-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
