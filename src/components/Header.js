import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-2 text-center">
        <div className="container-xxl">
          <div class="row">
            <div className="col">
              <p className="text-white mb-0 ">
                Sprawdź promocje i kupuj nawet do 40% taniej! Psst! Spróbuj użyć
                kodu:"SIEMANO_ALE_TANIO"
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to="/" className="text-white">
                  ZdrowyTy
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Wpisz nazwe produktu..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={wishlist} alt="compare"></img>
                    <p className="mb-0">
                      Ulubione <br /> Produkty
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={user} alt="login"></img>
                    <p className="mb-0">
                      Zaloguj <br /> Na Konto
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/Koszyk"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={cart} alt="cart"></img>
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">3</span>
                      <p className="mb-0">137,25zł</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15  d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="me-5 d-inline-block">Kategorie</span>
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item text-white" href="/produkt">
                          Orzechy
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-white" href="/produkt">
                          Soki
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-white" href="/produkt">
                          Dodatki
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-content-center gap-15">
                    <NavLink to="/">Strona Główna</NavLink>
                    <NavLink to="/Produkt">Produkty</NavLink>
                    <NavLink to="/about">Kontakt</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
