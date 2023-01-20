import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import wish from "../images/wish.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={`${
          location.pathname === "/Produkt" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "/Produkt/:id"
              : location.pathname === "/Produkt/:id"
              ? "/Produkt/1"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={props.image} alt="" />
          </div>
          <div className="product-details">
            <h6>{props.nameK}</h6>
            <h5 className="product-title">{props.name}</h5>
            <ReactStars
              count={5}
              size={24}
              value="5"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              {props.description}
            </p>
            <p className="price">{props.price} zł</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={view} alt="view"></img>
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart"></img>
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
