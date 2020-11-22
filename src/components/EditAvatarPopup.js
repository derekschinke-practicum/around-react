import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      name="edit-avatar"
      title="Change profile picture"
      buttonValue="Save"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <label>
        <input
          type="url"
          name="url"
          id="profile-avatar"
          className="popup__input"
          placeholder="Image link"
          required
        />
        <span className="popup__error" id="profile-avatar-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
