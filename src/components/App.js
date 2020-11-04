import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddCardPopupOpen(true);
  }

  function handleCloseAllPopups(evt) {
    if (evt.target !== evt.currentTarget) return;
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    // setIsDeletePopupOpen(false);
    // setIsImagePopupOpen(false);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddCard={handleAddPlaceClick}
        />
        <Footer />

        <PopupWithForm
          name="edit"
          title="Edit profile"
          buttonValue="Save"
          isOpen={isEditProfilePopupOpen}
          onClose={handleCloseAllPopups}
        >
          <label>
            <input
              type="text"
              name="name"
              id="profile-name"
              className="popup__input popup__input_type_name"
              placeholder="Name"
              required
              minlength="2"
              maxlength="40"
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
              minlength="2"
              maxlength="200"
            />
            <span className="popup__error" id="profile-job-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm
          name="edit-avatar"
          title="Change profile picture"
          buttonValue="Save"
          isOpen={isEditAvatarPopupOpen}
          onClose={handleCloseAllPopups}
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

        <PopupWithForm
          name="add"
          title="New place"
          buttonValue="Create"
          isOpen={isAddCardPopupOpen}
          onClose={handleCloseAllPopups}
        >
          <label>
            <input
              type="text"
              name="title"
              id="card-title"
              className="popup__input popup__input_type_title"
              placeholder="Title"
              required
              minlength="2"
              maxlength="30"
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

        <PopupWithForm
          name="delete"
          title="Are you sure?"
          buttonValue="Yes"
          // isOpen={}
          onClose={handleCloseAllPopups}
          shouldNotValidate={true}
        ></PopupWithForm>

        {/* <div className="popup popup_type_delete">
          <div className="popup__container">
            <button
              type="button"
              aria-label="Close"
              className="button button_type_close"
            ></button>
            <h3 className="popup__title">Are you sure?</h3>
            <form
              method="POST"
              className="popup__form popup__form_type_delete"
              novalidate
            >
              <input
                type="submit"
                value="Yes"
                className="button button_type_submit popup__button"
              />
            </form>
          </div>
        </div> */}

        <PopupWithImage />
      </div>
    </div>
  );
}

export default App;
