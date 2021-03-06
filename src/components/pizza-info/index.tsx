import React, {useState} from "react";
import UserBio from "../user-info/user-bio";
import UserCard from "../user-info/user-card";
import OrderConfirmation from "./order-confirmation/Order";
import PizzaTypes from "./pizza-types/PizzaTypes";
import "./index.css"

export default function Pizzano(){
    const [page, setPage] = useState(1);

    const increment = () => {
        setPage(page + 1);
        if (page < 1) {
            setPage(page)
        }
    }
    const decrement = () => {
        setPage(page - 1);
        if (page > 4){
            setPage(page)
        }
    }
    return(
        <section className="ftco-menu">
    	<div className="container-fluid">
    		<div className="row d-md-flex">
	    		<div className="col-lg-4 img f-menu-img mb-5 mb-md-0" style={{backgroundImage: "url(../../../assets/images/about.jpg)"}}>
	    		</div>
	    		<div className="col-lg-8 p-md-5">
                {page === 1 ? (
                <div className="row justify-content-between mb-5 pb-3">
                    <div className="col-md-7 heading-section">
                        <h4 className="mb-4">Welcome to <b>Pizzano</b></h4>
                        <p className="flip text-left"><span className="deg1"></span><span className="deg2"></span><span className="deg3"></span></p>
                        <p className="mt-5">The home of your favourite pizza(s), Order Now.</p>
                    </div>
                    <div>
                        <form className="form-inline">
                            <input className="form-control search-field mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-gold my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>):
                null}
		    	<div className="row">
		          <div className="col-md-12 d-flex align-items-center">
		            <div className="tab-content" id="v-pills-tabContent">
		              <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab">
		              	{page === 1 ? <PizzaTypes />: null}
                        {page === 2 ? <UserBio />: null}
                        {page === 3 ? <UserCard />: null}
                        {page === 4 ? <OrderConfirmation shopAgain={page} />: null}
		              </div>
		            </div>
		          </div>
                  <div className="col-md-12 nav-link-wrap mb-5">
		            <div className="nav row justify-content-between nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
		              <a onClick={decrement} className="nav-link active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Previous</a>
		              <a onClick={increment} className="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Next</a>
		              {/* <a className="nav-link" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Burgers</a>
		              <a className="nav-link" id="v-pills-4-tab" data-toggle="pill" href="#v-pills-4" role="tab" aria-controls="v-pills-4" aria-selected="false">Pasta</a> */}
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
    	</div>
    </section>
    )
}