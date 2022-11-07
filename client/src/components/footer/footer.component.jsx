import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormInput from "../form-input/form-input.component";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

import "./footer.styles.scss";

const Footer = () => {
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
    <div className="footer-container">
      <div className="left-side">
        <div className="menu-section">
          <h4 className="menu-title">Shop</h4>
          <Link className="footer-link" to="/shop/products/all">
            Bracelets
          </Link>
          <Link className="footer-link" to="/shop/products/all">
            Necklaces
          </Link>
          <Link className="footer-link" to="/shop/products/all">
            Earrings
          </Link>
          <Link className="footer-link" to="/shop/products/all">
            Rings
          </Link>
        </div>
        <div className="menu-section">
          <h4 className="menu-title">About</h4>
          <Link className="footer-link" to="glossary">
            Glossary
          </Link>
          <Link className="footer-link" to="faqs">
            Faqs
          </Link>
          <Link className="footer-link" to="privacy-policy">
            Privacy & Accessibility
          </Link>
          <Link className="footer-link" to="terms-of-service">
            Terms of Service
          </Link>
        </div>
        <div className="menu-section">
          <h4 className="menu-title">Services</h4>
          <Link className="footer-link" to="affirm">
            Affirm
          </Link>
          {/*
          <Link className="footer-link" to="care-guide">
          Care Guide
          </Link>
          <Link className="footer-link" to="size-guide">
          Size Guide
          </Link>
        */}
        </div>
      </div>
      <div className="right-side">
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
        <div className="social-media-links">
          <Link
            className="social-media-icon-link"
            to="https://www.facebook.com/profile.php?id=100087326212607"
          >
            <FontAwesomeIcon
              className="social-media-icon"
              icon={["fab", "facebook"]}
              size="1x"
            />
          </Link>
          <Link
            className="social-media-icon-link"
            to="https://www.instagram.com/hericojewelry/"
          >
            <FontAwesomeIcon
              className="social-media-icon"
              icon={["fab", "instagram"]}
              size="1x"
            />
          </Link>
          <Link
            className="social-media-icon-link"
            to="https://twitter.com/hericojewelry/"
          >
            <FontAwesomeIcon
              className="social-media-icon"
              icon={["fab", "twitter"]}
              size="1x"
            />
          </Link>
          <Link
            className="social-media-icon-link"
            to="https://www.pinterest.com/hericojewelry/"
          >
            <FontAwesomeIcon
              className="social-media-icon"
              icon={["fab", "pinterest"]}
              size="1x"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
