import React, { useState } from "react";
import Popup from "reactjs-popup";
import "./sign-up-popup.styles.scss";
import leftSideImage from "./assets/model_image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { setPopupAlreadyOpened } from "../../store/popup/popup.actions";
import {
  selectIsPopupOpen,
  selectPopupAlreadyOpened,
} from "../../store/popup/popup.selector";
import { useDispatch, useSelector } from "react-redux";
import { setIsPopupOpen } from "../../store/popup/popup.actions";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

const SignUpPopup = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const popupAlreadyOpened = useSelector(selectPopupAlreadyOpened);

  const setPopupOpen = () => {
    setOpen(true);
    dispatch(setPopupAlreadyOpened(true));
  };

  React.useEffect(() => {
    if (popupAlreadyOpened) {
      return;
    }
    const timeout = setTimeout(() => {
      setPopupOpen(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [open]);

  const url =
    "https://gmail.us8.list-manage.com/subscribe/post?u=45510d81c3ccc6d61462326ac&amp;id=e989ee6746&amp;f_id=002b67e0f0";
  // The url looks like the url below:
  // https://aaaaaaaaa.us20.list-manage.com/subscribe/post?u=xxxxxxxxxxxxxxxxxx&amp;id=yyyyyyyyyy
  const { loading, error, success, message, handleSubmit } =
    useMailChimpForm(url);

    
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    setOpen(false);
    alert("Thank you for Subscribing!");
    handleSubmit({ EMAIL: email });
    console.log(email);
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    // handleFieldChange();
    setEmail(value);
  };

  return (
    <Popup open={open} modal>
      <div className="popup-container">
        <div
          className="left-side"
          style={{ backgroundImage: `url(${leftSideImage})` }}
        >
          <h1 className="herico-title">HERICO</h1>
        </div>
        <div className="right-side">
          <div className="right-side-text">
            <h3>WOOHOO!!</h3>
            <h1>15% off for our partners in crime</h1>
            <h3>Hearing from us is almost as good as wearing our jewelry.</h3>
          </div>
          <div className="email-input">
            <form className="sign-up-form" onSubmit={() => handleSubmitForm}>
              <FormInput
                id="EMAIL"
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email Address"
                required
              />
              <div className="submit-container">
                <Button type="submit" onClick={handleSubmitForm}>
                  Join the fun
                </Button>
                <p className="cancel">
                  I hate deals and prefer to pay more for the same thing
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default SignUpPopup;
