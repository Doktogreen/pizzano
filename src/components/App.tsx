import React from "react";
import pizzas from "../data/pizzas.json";
import Pizza from "./Pizza";
import AppCSS from "./App.module.css";
import PizzaSVG from "../svg/pizza.svg";
import Cart from "./Cart";
import AppStateProvider from "./AppState";
import SpecialOffer from "./SpecialOffer";
import NavBar from "./nav-bar";
import Footer from "./footer";

const App = () => {
  const specialOfferPizza = pizzas.find((pizza) => pizza.specialOffer);
  return (
    <AppStateProvider>
      <div className={AppCSS.container}>
        <NavBar />
        {/* <div className={AppCSS.header}>
          <PizzaSVG width={120} height={120} />
          <div className={AppCSS.siteTitle}>Delicious Pizza</div>
          <Cart />
        </div>{" "} */}
        {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
        <ul className={AppCSS.pizzaList}>
          {pizzas.map((pizza) => {
            return <Pizza key={pizza.id} pizza={pizza} />;
          })}
        </ul>
        <Footer />
      </div>
    </AppStateProvider>
  );
};

export default App;
