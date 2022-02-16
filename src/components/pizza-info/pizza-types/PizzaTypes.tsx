import React from "react";
import pizzadata from '../../../data/pizzas.json';
import './index.scss';


export default function PizzaTypes(){
    return(
        <section className="ftco-section">
            <div className="container">
                <div className="row">
                    {pizzadata.map((pizza, index) => {
                        return(<div key={pizza.id} className="col-md-4">
                        <div className="menu-wrap">
                            <a href="#" className="menu-img img mb-4" style={{backgroundImage: `url(${pizza.specialOffer})`}}></a>
                            <div className="text">
                                <h3><a href="#">{pizza.name}</a></h3>
                                <p>{pizza.description}</p>
                                <p className="price"><span>${pizza.price}</span></p>
                                <p><a href="#" className="btn btn-white btn-outline-white">Add to cart</a></p>
                            </div>
                        </div>
                    </div>)})}
    		    </div>
                </div>
        </section>
    )
}