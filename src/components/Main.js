import React from 'react';
import api from '../utils/api.js';

function Main(props) {
  const [userAvatar, setUserAvatar] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserAvatar(res.avatar);
        setUserName(res.name);
        setUserDescription(res.about);
      })
      .catch((err) => console.log(err));
  });

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__data">
          <div>
            <div
              role="img"
              aria-label=""
              className="profile__avatar"
              style={{ backgroundImage: `url(${userAvatar})` }}
              onClick={props.onEditAvatar}
            ></div>
            <button
              type="button"
              aria-label="Edit avatar"
              className="button button_type_edit-avatar"
              onClick={props.onEditAvatar}
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__text">
              <h1 className="profile__name">{userName}</h1>
              <p className="profile__job">{userDescription}</p>
            </div>
            <button
              type="button"
              aria-label="Edit profile"
              className="button button_type_edit"
              onClick={props.onEditProfile}
            ></button>
          </div>
        </div>
        <button
          aria-label="Add card"
          className="button button_type_add"
          onClick={props.onAddCard}
        ></button>
      </section>

      <section className="places">
        <ul className="places__list"></ul>
      </section>
    </main>
  );
}

export default Main;
