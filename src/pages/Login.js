import React from "react";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Custom from "../components/Custom";
const Login = () => {
  return (
    <div>
      <Meta title={"Zaloguj się"} />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Logowanie</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <Custom type="email" name="email" placeholder="Email" />
                  <Custom
                    className="mt-1"
                    type="password"
                    name="password"
                    placeholder="Hasło"
                  />
                  <div>
                    <Link to="/ZapomnialemHasla">Zapomniałem hasła</Link>
                    <div className="mt-3 d-flex justify-content-center gap-30 align-items-center">
                      <button className="button border-0 py-3 " type="submit">
                        Zaloguj się
                      </button>
                      <Link to="/Zarejestruj" className="button signup py-3">
                        Zarejestruj się
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

export default Login;
