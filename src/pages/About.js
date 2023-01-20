import React from "react";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
const About = () => {
  return (
    <div>
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                title="aboutTitle"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9724.106509581672!2d23.081691746742777!3d52.46054520120366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4721ccff72f5af07%3A0x5c8412db904271d4!2s17-330%20Nurzec-Stacja!5e0!3m2!1spl!2spl!4v1673415887261!5m2!1spl!2spl"
                width="600"
                height="450"
                className="border-0 w-100"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Kontakt</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Imie"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="textelefon"
                        className="form-control"
                        placeholder="Nr.Telefonu"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        placeholder="wiadomość"
                        cols="30"
                        rows="4"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Wyślij</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Skontaktuj się z nami</h3>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        42-215 Częstochowa, Ludowa 11, Polska
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel. +48 675 456 721">+48 675 456 721</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a href="mail">sklep@gmail.com</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0">Poniedziałek - Sobota (8-18)</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
