import React from "react";
import Meta from "../components/Meta";

import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
const Koszyk = () => {
  return (
    <>
      <Meta title={"Koszyk"} />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Nazwa produktu</h4>
              <h4 className="cart-col-2">Cena</h4>
              <h4 className="cart-col-3">Ilość</h4>
              <h4 className="cart-col-4">Razem</h4>
            </div>
            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img
                    src="images/dziurawiec.webp"
                    className="img-fluid"
                    alt="zdjecieProduktu"
                  ></img>
                </div>
                <div className="w-75">
                  <p>tytuł zdkjecia</p>
                  <p>sss</p>
                  <p>awa</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">100zł</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <input
                  className="form-control"
                  type="number"
                  name=""
                  min={1}
                  max={7}
                  id=""
                />
              </div>
              <div>
                <AiFillDelete className="text-danger" />
              </div>
              <div className="cart-col-4">
                <h5 className="price">100zł</h5>
              </div>
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/Produkt" className="button">
                  Kontynułuj zakupy
                </Link>
                <div className="d-flex flex-column justify-content-end align-items-center">
                  <h4> Razem: 100zł</h4>
                  <p>Koszt przesyłki: 0zł</p>
                  <Link to="/checkout" className="button">
                    Podsumowanie
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Koszyk;
