import { useContext, useState, useEffect } from 'react';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import Card from './Card';

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);

  useEffect(() =>
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
      .catch((err) => console.log(err))
  );

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__data">
          <div>
            <div
              role="img"
              aria-label=""
              className="profile__avatar"
              style={{ backgroundImage: `url(${currentUser.avatar})` }}
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
              <h1 className="profile__name">{currentUser.name}</h1>
              <p className="profile__job">{currentUser.about}</p>
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
