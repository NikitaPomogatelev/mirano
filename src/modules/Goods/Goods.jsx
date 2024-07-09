import "./goods.scss";
// import { goodsArray } from "../../goodsArray";
import { Card } from "../Card/Card";
import { Cart } from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "../../redux/goodsSlice";
import { useEffect } from "react";
import { API_URL } from "../../const";

export const Goods = () => {
  const dispatch = useDispatch();

  const { items: goods, status, error } = useSelector((state) => state.goods);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchGoods());
    }
  }, [dispatch, status]);
  if (status) {
    // dispatch(fetchGoods)
  }

  let content = null;
  if (status === "loading") {
    content = <p>Lodaing...</p>;
  }
  if (status === "success") {
    content = (
      <ul className="goods__list">
        {goods.map(
          (item) =>
            item && (
              <li key={item.id} className="goods__item">
                <Card
                  className="goods__card"
                  id={item.id}
                  img={`${API_URL}${item.photoUrl}`}
                  price={item.price}
                  title={item.name}
                  dateDelivery="сегодня в 14:00"
                />
              </li>
            )
        )}
      </ul>
    );
  }
  if (status === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section className="goods">
      <div className="container goods__container">
        <div className="goods__box">
          <h2 className="goods__title">Цветы</h2>
          {content}
        </div>

        <Cart />
      </div>
    </section>
  );
};
