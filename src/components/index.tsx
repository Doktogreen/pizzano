import React from "react";
import AppStateProvider from "./ComponentState";
import Footer from "./footer";
import NavBar from "./nav-bar";
import Pizzano from "./pizza-info";

export default function Landing(){
    // const specialOfferPizza = pizzas.find((pizza) => pizza.specialOffer);
  return (
    <AppStateProvider>
        <NavBar />
			    <Pizzano />
		    <Footer/>
	</AppStateProvider>
    )
}