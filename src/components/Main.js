function Main() {
  function handleEditAvatarClick() {
    const editAvatarPopup = document.querySelector('.popup_type_edit-avatar');
    editAvatarPopup.classList.add('popup_opened');
  }
  function handleEditProfileClick() {
    const editProfilePopup = document.querySelector('.popup_type_edit');
    editProfilePopup.classList.add('popup_opened');
  }
  function handleAddPlaceClick() {
    const addPlacePopup = document.querySelector('.popup_type_add');
    addPlacePopup.classList.add('popup_opened');
  }

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__data">
          <div>
            <div role="img" aria-label="" className="profile__avatar"></div>
            <button
              type="button"
              aria-label="Edit avatar"
              className="button button_type_edit-avatar"
              onClick={handleEditAvatarClick}
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__text">
              <h1 className="profile__name"></h1>
              <p className="profile__job"></p>
            </div>
            <button
              type="button"
              aria-label="Edit profile"
              className="button button_type_edit"
              onClick={handleEditProfileClick}
            ></button>
          </div>
        </div>
        <button
          aria-label="Add card"
          className="button button_type_add"
          onClick={handleAddPlaceClick}
        ></button>
      </section>

      <section className="places">
        <ul className="places__list"></ul>
      </section>
    </main>
  );
}

export default Main;
