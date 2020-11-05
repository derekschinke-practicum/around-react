function Card(props) {
  return (
    <li className="card">
      <button type="button" className="button button_type_delete"></button>
      <div
        role="img"
        className="card__image"
        style={{ backgroundImage: `url(${props.link})` }}
        alt={props.name}
        onClick={props.onCardClick}
      ></div>
      <div className="card__info">
        <h2 className="card__title">{props.name}</h2>
        <div>
          <button
            type="button"
            aria-label="Like"
            className="button button_type_like"
          ></button>
          <p className="card__likes">{props.likes}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
