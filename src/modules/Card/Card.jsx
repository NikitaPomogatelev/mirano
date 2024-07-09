import { useDispatch } from "react-redux";
import "./card.scss";
import classNames from "classnames";
import { addItemToCart } from "../../redux/cartSlice";

export const Card = ({
  className = "",
  id,
  img = "",
  price = "",
  title = "",
  dateDelivery = "",
}) => {
  const dispatch = useDispatch();

  const handlerAddToCart = () => {
    dispatch(addItemToCart({ id, img, price, title, dateDelivery }));
  };

  return (
    <article className={classNames("card", className)}>
      {img && (
        <img
          className="card__image"
          src={img}
          width="1024"
          height="1024"
          alt={name}
        />
      )}

      <div className="card__content">
        {title && <h3 className="card__title">{title}</h3>}
        <div className="card__footer">
          {dateDelivery && (
            <p className="card__date-delivery">{dateDelivery}</p>
          )}
          {price && (
            <button className="card__button" onClick={handlerAddToCart}>
              {price}&nbsp;&#8381;
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
