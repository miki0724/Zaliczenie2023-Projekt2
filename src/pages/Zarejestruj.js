import React from "react";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Custom from "../components/Custom";
const Zarejestruj = () => {
  return (
    <div>
      <Meta title={"Zarejestruj"} />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Zarejestruj się</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <Custom
                    type="text"
                    name="name"
                    placeholder="Imię i nazwisko"
                  />
                  <Custom type="email" name="email" placeholder="Email" />
                  <Custom
                    className="mt-1"
                    type="tel"
                    name="mobile"
                    placeholder="numer telefonu"
                  />
                  <Custom
                    className="mt-1"
                    type="password"
                    name="password"
                    placeholder="Hasło"
                  />

                  <div>
                    <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                      <button className="button border-0 py-3 ">
                        Zarejestruj się
                      </button>
                      <Link to="/Login" className="py-3 text-danger">
                        Anuluj
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zarejestruj;
