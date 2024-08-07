export const CartItem = ({ img = "", title = "", price = "" }) => (
  <li className="cart__item">
    {img && <img className="cart__img" src={img} alt={title} />}
    {title && <h4 className="cart__item-title">{title}</h4>}
    <div className="cart__counter">
      <button className="cart__counter-btn">-</button>
      <input
        className="cart__counter-input"
        type="number"
        max="99"
        min="0"
        defaultValue="1"
      />
      <button className="cart__counter-btn">+</button>
    </div>
    {price && <p className="cart__price">{price}&nbsp;&#8381;</p>}
  </li>
);
