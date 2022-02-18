import React from "react";
import pizzas from "../data/pizzas.json";
import Pizza from "./pizza-info/pizza-types/Pizza";
import AppStateProvider from "./ComponentState";
import SpecialOffer from "./SpecialOffer";

const App = () => {
  const specialOfferPizza = pizzas.find((pizza) => pizza.specialOffer);
  return (
    <AppStateProvider>
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
              {pizzas.map((pizza) => {
                return <Pizza key={pizza.id} pizza={pizza} />;
              })}
          </div>
        </div> 
      </section>
    </AppStateProvider>
  );
};

export default App;
