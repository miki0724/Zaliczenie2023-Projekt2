import React from "react";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from "../components/Container";
const Checkout = () => {
  return (
    <>
      <Meta title={"Podsumowanie"} />
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">NazwaSklepu</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-white total-price" to="/Koszyk">
                      Koszyk
                    </Link>
                  </li>
                  &nbsp;/
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Informacje do zakupu
                  </li>
                  &nbsp;/
                  <li className="breadcrumb-item total-price">Dostawa</li>
                  &nbsp;/
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Płatność
                  </li>
                </ol>
              </nav>
              <h4 className="title">Kontakt</h4>
              <p className="user-details">imie i nazwisko kupujacego</p>
              <h4 className="mb-3">Adres dostawy</h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap ustify-content-between"
              >
                <div className="w-100">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Select Country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Imię"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Nazwisko"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Numer mieszkania"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Miasto"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Wybierz miasto
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="kod pocztowy"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/Koszyk" className="text-white">
                      <BiArrowBack className="me-2" />
                      Powrót do koszyka
                    </Link>
                    <Link to="/Koszyk" className="button">
                      Wybierz sposób dostawy
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p>Razem produkty</p>
                <p>100zł</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0">Dostawa</p>
                <p className="mb-0">0zł</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4>Razem</h4>
              <h5>100zł</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
