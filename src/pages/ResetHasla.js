import React from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import Custom from "../components/Custom";
const ResetHasla = () => {
  return (
    <>
      <Meta title={"Zmień hasło"} />

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Resetuj hasło</h3>
              <form action="" className="d-flex flex-column gap-15">
                <Custom
                  className="mt-1"
                  type="password"
                  name="password"
                  placeholder="nowe hasło"
                />
                <Custom
                  className="mt-1"
                  type="password"
                  name="password"
                  placeholder="potwierdź nowe hasło"
                />

                <div>
                  <div className="mt-3 d-flex justify-content-center gap-20 align-items-center">
                    <button className="button border-0 py-3 " type="submit">
                      Potwierdź
                    </button>
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

export default ResetHasla;
