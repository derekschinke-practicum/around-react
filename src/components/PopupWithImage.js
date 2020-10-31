function PopupWithImage() {
  return (
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
  );
}

export default PopupWithImage;
