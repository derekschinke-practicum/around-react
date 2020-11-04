function Card(props) {
  return (
    <li class="card">
      <button type="button" class="button button_type_delete"></button>
      <div
        role="img"
        class="card__image"
        style={{ backgroundImage: `url(${props.link})` }}
      ></div>
      <div class="card__info">
        <h2 class="card__title">{props.title}</h2>
        <div>
          <button
            type="button"
            aria-label="Like"
            class="button button_type_like"
          ></button>
          <p class="card__likes">{props.likes}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
