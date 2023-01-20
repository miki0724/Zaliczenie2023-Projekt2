import React from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";

const Contact = () => {
  <>
    <Meta title={"Kontakt"} />
    <Container class1="contact-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <iframe
              title="contactTitle"
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
            <div className="contact-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title">Kontakt</h3>
              </div>
              <div>
                <h3 className="contact-title">Skontaktuj się z nami</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </>;
};

export default Contact;
