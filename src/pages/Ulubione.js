import React from "react";
import Container from "../components/Container";
import Meta from "../components/Meta";
import contentHit from "../components/contentHit";
import ProductCard from "../components/ProductCard";
const Ulubione = () => {
  return (
    <>
      <Meta title={"Ulubione"} />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/orzechy.jpg"
                  className="img-fluid w-100"
                  alt="zegarek"
                />
              </div>
              <div className="bg-white px-3 py-3">
                <h5 className="title">orzechy</h5>
                <h6 className="price">22,99zł</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/maca.jpg"
                  className="img-fluid w-100"
                  alt="zegarek"
                />
              </div>
              <div className="bg-white px-3 py-3">
                <h5 className="title">maca</h5>
                <h6 className="price">22.99zł</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/jogurt.jpg"
                  className="img-fluid w-100"
                  alt="zegarek"
                />
              </div>
              <div className="bg-white px-3 py-3">
                <h5 className="title">jogurt</h5>
                <h6 className="price">2,99zł</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/dziurawiec.webp"
                  className="img-fluid w-100"
                  alt="zegarek"
                />
              </div>
              <div className="bg-white px-3 py-3">
                <h5 className="title">dziurawiec</h5>
                <h6 className="price">39.99zł</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Ulubione;
