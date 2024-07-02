import "./card.scss";
import classNames from "classnames";

export const Card = ({
  className = "",
  img = "",
  price = "",
  title = "",
  dateDelivery = "",
}) => (
  <article className={classNames("card", className)}>
    {img && (
      <img
        className="card__image"
        src={img}
        width="1024"
        height="1024"
        alt={title}
      />
    )}

    <div className="card__content">
      {title && <h3 className="card__title">{title}</h3>}
      <div className="card__footer">
        {dateDelivery && <p className="card__date-delivery">{dateDelivery}</p>}
        {price && (
          <button className="card__button">{price}&nbsp;&#8381;</button>
        )}
      </div>
    </div>
  </article>
);
