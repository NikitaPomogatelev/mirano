import { useState } from "react";
import { Header } from "./modules/Header/Header";
import { Hero } from "./modules/Hero/Hero";
import { Filter } from "./modules/Filter/Filter";
import { Goods } from "./modules/Goods/Goods";
import { Subscribe } from "./modules/Subscribe/Subscribe";
import { Footer } from "./modules/Footer/Footer";
import { Order } from "./modules/Order/Order";
import { useSelector } from "react-redux";

export const App = () => {
  const [isOrder, setOrder] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const toggleOrderHandler = () => {
    console.log("isOrder", isOrder);
    setOrder(!isOrder.value);
  };

  const isOpenModal = useSelector((state) => state.modal.isOpen);

  return (
    <>
      <Header />

      <main>
        <Hero />
        <Filter />
        <Goods />
        <Subscribe />
      </main>

      <Footer />

      {isOpenModal && <Order />}
    </>
  );
};
