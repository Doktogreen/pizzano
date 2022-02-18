import React from "react";
import { Pizza } from "../types";
import '../components/pizza-info/pizza-types/index.scss';
import { AddToCartProps, withAddToCart } from "./AddToCart";

interface Props extends AddToCartProps {
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza, addToCart }) => {
  const handleAddToCartClick = () => {
    addToCart({ id: pizza.id, name: pizza.name, price: pizza.price });
  };
  return (
    <div key={pizza.id} className="col-md-4 menu">
      <div className="menu-wrap">
          <a href="#" className="menu-img img mb-4" style={{backgroundImage: `url()`}}></a>
          <div className="text">
              <h3><a href="#">{pizza.name}</a></h3>
              <p>{pizza.description}</p>
              <span className="row justify-content-between">
                  <p className="price"><span>${pizza.price}</span></p>
                  <div className="dropdown show">
                      <a className="btn btn-secondary dropdown-toggle" href="..." role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Size
                      </a>

                      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="...">Small $9.99</a>
                          <a className="dropdown-item" href="...">Medium $19.99</a>
                          <a className="dropdown-item" href="...">Big $29.99</a>
                      </div>
                  </div>
              </span>
              <p><a href="#" onClick={handleAddToCartClick} className="btn btn-white btn-outline-white">Add to cart</a></p>
          </div>
      </div>
  </div>
  );
};

export default withAddToCart(SpecialOffer);
