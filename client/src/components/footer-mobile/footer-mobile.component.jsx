import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormInput from "../form-input/form-input.component";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

import "./footer-mobile.styles.scss";

const FooterMobile = () => {
  const [email, setEmail] = useState("");

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    alert("Thank you for Subscribing!");
    handleSubmit({ EMAIL: email });
    setEmail("");
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    // handleFieldChange();
    setEmail(value);
  };

  const url =
    "https://gmail.us8.list-manage.com/subscribe/post?u=45510d81c3ccc6d61462326ac&amp;id=e989ee6746&amp;f_id=002b67e0f0";
  // The url looks like the url below:
  // https://aaaaaaaaa.us20.list-manage.com/subscribe/post?u=xxxxxxxxxxxxxxxxxx&amp;id=yyyyyyyyyy
  const { loading, error, success, message, handleSubmit } =
    useMailChimpForm(url);

  return (
    <div className="footer-container-mobile">
      <div className="top-footer">
        <div className="left-side">
          <div className="menu-section">
            <h4 className="menu-title">Shop</h4>
            <Link className="footer-link" to="shop">
              Bracelets
            </Link>
            <Link className="footer-link" to="shop">
              Necklaces
            </Link>
            <Link className="footer-link" to="shop">
              Earrings
            </Link>
            <Link className="footer-link" to="shop">
              Rings
            </Link>
          </div>
          <div className="menu-section">
            <h4 className="menu-title">About</h4>
            <Link className="footer-link" to="shop">
              Glossary
            </Link>
            <Link className="footer-link" to="shop">
              Faqs
            </Link>
            <Link className="footer-link" to="shop">
              Privacy & Accessibility
            </Link>
            <Link className="footer-link" to="shop">
              Stockist
            </Link>
          </div>
        </div>
        <div className="right-side">
          <div className="menu-section">
            <h4 className="menu-title">Services</h4>
            <Link className="footer-link" to="shop">
              Affirm
            </Link>
            <Link className="footer-link" to="shop">
              Appointment
            </Link>
            <Link className="footer-link" to="shop">
              Care Guide
            </Link>
            <Link className="footer-link" to="shop">
              Size Guide
            </Link>
          </div>
          <div className="email">
            <h3>Keep up with our Antics</h3>
            <div className="email-input">
              <form className="sign-up-form" onSubmit={handleSubmitForm}>
                <FormInput
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <FontAwesomeIcon
                  className="submit"
                  icon={["fas", "chevron-right"]}
                  size="1x"
                  type="submit"
                  onClick={handleSubmitForm}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="social-media-links">
        <Link className="social-media-icon-link" to="shop">
          <FontAwesomeIcon
            className="social-media-icon"
            icon={["fab", "facebook"]}
            size="1x"
          />
        </Link>
        <Link className="social-media-icon-link" to="shop">
          <FontAwesomeIcon
            className="social-media-icon"
            icon={["fab", "instagram"]}
            size="1x"
          />
        </Link>
        <Link className="social-media-icon-link" to="shop">
          <FontAwesomeIcon
            className="social-media-icon"
            icon={["fab", "twitter"]}
            size="1x"
          />
        </Link>
        <Link className="social-media-icon-link" to="shop">
          <FontAwesomeIcon
            className="social-media-icon"
            icon={["fab", "pinterest"]}
            size="1x"
          />{" "}
        </Link>
      </div>
    </div>
  );
};

export default FooterMobile;
