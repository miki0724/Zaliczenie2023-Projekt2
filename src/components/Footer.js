import React from "react";

import { Link } from "react-router-dom";
import { BsLinkedin, BsInstagram, BsYoutube } from "react-icons/bs";
import newsletter from "../images/newsletter.png";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newslatter"></img>
                <h2 className="mb-0 text-white">Zapisz się do newslettera</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Wpisz swój email"
                  aria-label="Wpisz swój email"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Zapisz się
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Kontakt</h4>
              <div>
                <address className="text-white fs-6">
                  81-824 Sopot, Armii Krajowej 101, Polska
                </address>
                <a href="tel. +48 675 456 721" className="mt-3 d-block mb-1">
                  +48 675 456 721
                </a>
                <a href="adres mail" className="mt-3 d-block mb-0 text-white">
                  sklep@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-3">
              <h4 className="text-white mb-4">Konto</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">O nas</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Kontakt</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Linki</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Kategoria 1</Link>
                <Link className="text-white py-2 mb-1">Kategoria 2</Link>
                <Link className="text-white py-2 mb-1">Kategoria 3</Link>
                <Link className="text-white py-2 mb-1">Kategoria 4</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy;{new Date().getFullYear()}; Niesamowity footer wcale nie
                wykonany 20.01
                {""}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
