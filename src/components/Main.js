import React from 'react';
import api from '../utils/api.js';
import Card from './Card.js';

function Main(props) {
  const [userAvatar, setUserAvatar] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserAvatar(res.avatar);
        setUserName(res.name);
        setUserDescription(res.about);
      })
      .catch((err) => console.log(err));

    api
      .getInitialCards()
      .then((res) =>
        setCards(
          res.map((card) => ({
            link: card.link,
            name: card.name,
            likes: card.likes,
          }))
        )
      )
      .catch((err) => console.log(err));
  }, []);

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
        <ul className="places__list">
          {cards.map((card, index) => (
            <Card
              key={index}
              link={card.link}
              name={card.name}
              likes={card.likes.length}
              onCardClick={() => props.onCardClick(card)}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
