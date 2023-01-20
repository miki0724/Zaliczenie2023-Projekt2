import React from "react";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import Container from "../components/Container";
import content from "../components/content";
const Sklep = () => {
  const [grid, setGrid] = useState(3);

  return (
    <>
      <Meta title={"Sklep"} />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div id="skok-sklep">Heading Text</div>
          <div className="col-2">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Wyszukaj po kategori</h3>
              <div>
                <ul className="ps-0">
                  <li>nabiał</li>
                  <li>orzechy</li>
                  <li>suplementy</li>
                  <li>pozostałe</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filtruj</h3>
              <div>
                <h5 className="sub-title">Dostępność</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="" for="">
                      Dostępny
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="" for="">
                      Na zamówienie
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Cena</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating mb-3 text-dark">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="OD"
                    />
                    <label htmlfor="floatingInput1">OD</label>
                  </div>
                  <div className="form-floating mb-3 text-dark">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="DO"
                    />
                    <label htmlfor="floatingInput">DO</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p3 className="mb-0 d-block">Sortuj:</p3>
                  <select
                    name=""
                    defaultValue={"manual"}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="manual">Wyróżnione</option>
                    <option value="best-selling">Najczęściej kupowane</option>
                    <option value="title-ascending">Alfabetycznie A-Z</option>
                    <option value="title-descending">Alfabetycznie, Z-A</option>
                    <option value="price-ascending">Cena rosnąco</option>
                    <option value="price-descending">Cena malejąco</option>
                    <option value="create-ascending">Od najstarszych</option>
                    <option value="create-descending">Od najnowszych</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0 ">212 produktów</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />

                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                {content.map((content) => (
                  <ProductCard
                    key={content.id}
                    image={content.image}
                    price={content.price}
                    name={content.name}
                    nameK={content.nameK}
                    description={content.description}
                    grid={grid}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Sklep;
