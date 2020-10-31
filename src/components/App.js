import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main />
        <Footer />

        <div className="popup popup_type_edit">
          <div className="popup__container">
            <button
              type="button"
              aria-label="Close"
              className="button button_type_close"
            ></button>
            <h3 className="popup__title">Edit profile</h3>
            <form
              method="POST"
              name="popup_type_edit"
              className="popup__form popup__form_type_edit"
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

              <input
                type="submit"
                value="Save"
                className="button button_type_submit popup__button"
              />
            </form>
          </div>
        </div>

        <div className="popup popup_type_edit-avatar">
          <div className="popup__container">
            <button
              type="button"
              aria-label="Close"
              className="button button_type_close"
            ></button>
            <h3 className="popup__title">Change profile picture</h3>
            <form
              method="POST"
              name="popup_type_edit-avatar"
              className="popup__form"
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
              <input
                type="submit"
                value="Save"
                className="button button_type_submit popup__button"
              />
            </form>
          </div>
        </div>

        <div className="popup popup_type_add">
          <div className="popup__container">
            <button
              type="button"
              aria-label="Close"
              className="button button_type_close"
            ></button>
            <h3 className="popup__title">New place</h3>
            <form
              method="POST"
              name="popup_type_add"
              className="popup__form popup__form_type_add"
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

              <input
                type="submit"
                value="Create"
                className="button button_type_submit popup__button"
              />
            </form>
          </div>
        </div>

        <div className="popup popup_type_delete">
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
        </div>

        <div className="popup popup_type_image">
          <div className="popup__container popup__container_type_image">
            <button
              type="button"
              aria-label="Close"
              className="button button_type_close button_type_close_type_image"
            ></button>
            <figure className="popup__figure">
              <img className="popup__image" />
              <figcaption className="popup__caption"></figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
