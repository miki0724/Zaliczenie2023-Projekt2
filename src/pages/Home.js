import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Promocja from "../components/Promocja";
import Container from "../components/Container";
import { services } from "../utils/Data";
import contentHit from "../components/contentHit";
import contentPromocja from "../components/contentPromocja";
const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-3 py-3">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-1 py-3">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="images/banner1.png"
                className="img-fluid rounded-3"
                alt="main-banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>HIT TYGODNIA!</h4>
                <h5>Mleko owsiane Hafer</h5>
                <p>EKOLOGICZNY NAPÓJ Z OWSA. 100% ROŚLINNY</p>
                <br />
                <h6>9.99 zł</h6>
                <br />
                <Link className="button">KUP TERAZ</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative ">
                <img
                  src="images/banner2.png"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner1-content  position-absolute">
                  <Link className="button2 text-dark">
                    <h4>NOWOŚĆ!</h4>

                    <h5>ORGANIC POWDER</h5>

                    <p>BIO proszek do pieczenia</p>
                    <h6>22.37zł</h6>
                  </Link>
                </div>
              </div>

              <div className="small-banner position-relative ">
                <img
                  src="images/banner3.png"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner1-content position-absolute">
                  <Link className="button2 text-dark">
                    <h4>Z POWROTEM!</h4>

                    <h5>Macchiato Drink</h5>

                    <p>
                      Kawa z rana <br />
                    </p>

                    <h6>5.99zł</h6>
                  </Link>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/banner4.png"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner1-content position-absolute">
                  <Link className="button2">
                    <h4>
                      SUSZONE <br /> OWOCE
                    </h4>
                    <br />
                    <h6>8.99zł</h6>
                  </Link>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/banner5.png"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner1-content position-absolute">
                  <Link className="button2">
                    <h4>
                      LODY <br />
                      MARACHUJA
                    </h4>
                    <br />
                    <h6>4.99zł</h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-3">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading py-3">Hit dzisiejszego dnia!</h3>
          </div>
          <div className="row">
            {contentHit.map((contentHit) => (
              <ProductCard
                key={contentHit.id}
                image={contentHit.image}
                price={contentHit.price}
                name={contentHit.name}
                nameK={contentHit.nameK}
                description={contentHit.description}
              />
            ))}
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-3 home-wrapper">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading2 py-3">Promocja!</h3>
          </div>
        </div>
        <div className="row">
          {contentPromocja.map((contentPromocja) => (
            <Promocja
              key={contentPromocja.id}
              image={contentPromocja.image}
              price={contentPromocja.price}
              name={contentPromocja.name}
              nameK={contentPromocja.nameK}
              description={contentPromocja.description}
              ilosc={contentPromocja.ilosc}
              stara={contentPromocja.stara}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Home;
