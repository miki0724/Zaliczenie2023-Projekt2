import React from "react";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import { BsHeart } from "react-icons/bs";
import Container from "../components/Container";
const Produkt = (props) => {
  return (
    <>
      <Meta title={"NattyBaddie"} />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <img src="images/headphone.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <div className="title">
                  <h3>{props.name}</h3>
                </div>
              </div>
              <div className="border-bottom py-3">
                <p className="price">20zł</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0">Na podstawie 10 opini</p>
                </div>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Rodzaj produktu</h3>
                  <p className="product-data">super</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Producent</h3>
                  <p className="product-data">super</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Waga</h3>
                  <p className="product-data">super</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">DOdatkowe informacje:</h3>
                  <p className="product-data">super</p>
                </div>
                <div className="d-flex gap-10 flex-row align-items-center my-2">
                  <h3 className="product-heading">Ilość:</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={7}
                      placeholder={1}
                      className="form-control"
                      style={{ width: "50px" }}
                      id=""
                    />
                  </div>
                  <div className="d-flex align-items-center gap-15 ms-5">
                    <button className="button border-0 " type="submit">
                      Dodaj do koszyka
                    </button>
                    <button className="button signup">KUP TERAZ</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="/Ulubione" alt="link-ulubione">
                      <BsHeart className="fs-5 me-2" />
                      Ulubione
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>description</h4>
            <div className="bg-white p-3">
              <p className="">lorem</p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12"></div>
        </div>
      </Container>
      <Container class1="special-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading2 py-3">Promocja!</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Produkt;
