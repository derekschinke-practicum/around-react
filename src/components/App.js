import { useEffect, useState } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import api from '../utils/api.js';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({
    link: '',
    name: '',
  });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddCardPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard({ link: card.link, name: card.name });
    setIsImagePopupOpen(true);
  }

  function handleCloseAllPopups(evt) {
    if (evt.target !== evt.currentTarget) return;
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  useEffect(() =>
    api
      .getUserInfo()
      .then((res) => setCurrentUser(res))
      .catch((err) => console.log(err))
  );

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddCard={handleAddPlaceClick}
            onCardClick={(card) => handleCardClick(card)}
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

          <PopupWithImage
            card={selectedCard}
            isOpen={isImagePopupOpen}
            onClose={handleCloseAllPopups}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
