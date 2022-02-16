import React from "react";

export default function PizzaSize(){
    return(
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section ftco-animate text-center">
                        <h2 className="mb-4">Hot Meals</h2>
                        <p className="flip"><span className="deg1"></span><span className="deg2"></span><span className="deg3"></span></p>
                        <p className="mt-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 text-center ftco-animate">
                        <div className="menu-wrap">
                            <a href="#" className="menu-img img mb-4" style={{backgroundImage: "url(images/pizza-1.jpg)"}}></a>
                            <div className="text">
                                <h3><a href="#">Itallian Pizza</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                <p className="price"><span>$2.90</span></p>
                                <p><a href="#" className="btn btn-white btn-outline-white">Add to cart</a></p>
                            </div>
                        </div>
                    </div>
                <div className="col-md-3 text-center ftco-animate">
                    <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: "url(images/pizza-2.jpg)"}}></a>
                        <div className="text">
                            <h3><a href="#">Itallian Pizza</a></h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                            <p className="price"><span>$2.90</span></p>
                            <p><a href="#" className="btn btn-white btn-outline-white">Add to cart</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center ftco-animate">
                    <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: "url(images/pizza-3.jpg)"}}></a>
                        <div className="text">
                            <h3><a href="#">Itallian Pizza</a></h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                            <p className="price"><span>$2.90</span></p>
                            <p><a href="#" className="btn btn-white btn-outline-white">Add to cart</a></p>
                        </div>
                    </div>
                </div>
    		</div>
    	</div>
    </section>
    )
}