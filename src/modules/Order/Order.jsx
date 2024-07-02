import { OrderStatus } from "./OrderStatus";
import "./order.scss";

export const Order = () => {
  return (
    <>
      <div className="order">
        <div className="order__wrapper">
          <h2 className="order__title">Оформить заказ</h2>
          <form className="order__form" id="order">
            <fieldset className="order__fieldset">
              <legend className="order__legend">Данные заказчика</legend>
              <div className="order__input-group">
                <input
                  className="order__input"
                  type="text"
                  name="name-buyer"
                  placeholder="Имя"
                />
                <input
                  className="order__input"
                  type="text"
                  name="phone-buyer"
                  placeholder="Телефон"
                />
              </div>
            </fieldset>
            <fieldset className="order__fieldset">
              <legend className="order__legend">Данные получателя</legend>
              <div className="order__input-group">
                <input
                  className="order__input"
                  type="text"
                  name="name-recipient"
                  placeholder="Имя"
                />
                <input
                  className="order__input"
                  type="text"
                  name="phone-recipient"
                  placeholder="Телефон"
                />
              </div>
            </fieldset>
            <fieldset className="order__fieldset">
              <legend className="order__legend">Адрес</legend>
              <div className="order__input-group">
                <input
                  className="order__input"
                  type="text"
                  name="street"
                  placeholder="Улица"
                />
                <input
                  className="order__input order__input_min"
                  type="text"
                  name="house"
                  placeholder="Дом"
                />
                <input
                  className="order__input order__input_min"
                  type="text"
                  name="apartment"
                  placeholder="Квартира"
                />
              </div>
            </fieldset>
            <fieldset className="order__fieldset">
              <div className="order__payment">
                <label className="order__label-radio">
                  <input
                    className="order__radio"
                    type="radio"
                    name="payment-online"
                    value="true"
                    defaultChecked
                  />
                  Оплата онлайн
                </label>
              </div>
              <div className="order__delivery">
                <label htmlFor="delivery">Доставка 01.07</label>
                <input type="hidden" name="delivery-date" value="01.07" />
                <div className="order__select-wrapper">
                  <select
                    className="order__select"
                    name="delivery-time"
                    id="delivery"
                  >
                    <option value="9-12">с 9:00 до 12:00</option>
                    <option value="12-15">с 12:00 до 15:00</option>
                    <option value="15-18">с 15:00 до 18:00</option>
                    <option value="18-21">с 18:00 до 21:00</option>
                  </select>
                </div>
              </div>
            </fieldset>
          </form>
          <div className="order__footer">
            <p className="order__total">92100&nbsp;&#8381;</p>
            <button className="order__button" type="submit" form="order">
              Заказать
            </button>
          </div>
        </div>
        <button className="order__close" type="button">
          ×
        </button>
      </div>

      <OrderStatus />
    </>
  );
};