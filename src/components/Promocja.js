import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer/CountdownTimer";

const Promocja = (props) => {
  return (
    <div className="col-6 mb-2">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src={props.image} className="img-fluid" alt="promocja" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">{props.nameK}</h5>
            <h6 className="title">{props.name}</h6>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">{props.price}</span> &nbsp;
              <strike>{props.stara}</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <div className="d-flex gap-10 align-items-center">
                <div>
                  <CountdownTimer countdownTimestampMs={1674939974714} />
                </div>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>
                Ilość ograniczona! Zostało: <strong>{props.ilosc}</strong> sztuk
              </p>

              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{ width: "85%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link className="buttonP">Dodaj do koszyka!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promocja;
