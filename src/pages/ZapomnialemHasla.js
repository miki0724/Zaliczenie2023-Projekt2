import React from "react";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Custom from "../components/Custom";

const ZapomnialemHasla = () => {
  return (
    <>
      <Meta title={"Zmień hasło"} />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3 text-dark">Zmień hasło</h3>
              <p className="text-center my-2 mb-3">
                Na maila wysłano wiadomość z kodem do zmiany hasła
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <Custom type="email" name="email" placeholder="Email" />

                <div>
                  <div className="mt-3 d-flex flex-column justify-content-center gap-20 align-items-center">
                    <button className="button border-0" type="submit">
                      POTWIERDŹ
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
      </Container>
    </>
  );
};

export default ZapomnialemHasla;
