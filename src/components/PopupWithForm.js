function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <button
          type="button"
          aria-label="Close"
          className="button button_type_close"
        ></button>

        <h3 className="popup__title"></h3>

        <form
          method="POST"
          name={`popup_type_${props.name}`}
          className={`popup__form popup__form_type_${props.name}`}
        >
          {props.children}
          <input
            type="submit"
            value=""
            className="button button_type_submit popup__button"
          />
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
