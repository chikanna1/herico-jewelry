import React from "react";
import "./ambassador-program.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AmbassadorProgramPage = () => {
  return (
    <div className="ambassador-program-page-container">
      <div className="ambassador-program-text">
        <h1>We Are Looking For Brand Ambassadors to Spread The Word!</h1>
        <p>
          Do you want free jewelry? Do you have lots of fans and followers on
          social media? Herico Jewelry is currently seeking brand ambassadors to
          spread the word about our company online.
        </p>

        <h1>What You Get</h1>
        <div className="ambassador-perk">
          <FontAwesomeIcon
            className="ambassador-perk-fontawesome"
            icon={["fas", "circle"]}
            size="1x"
          />
          <p>Free Jewelry!</p>
        </div>
        <div className="ambassador-perk">
          <FontAwesomeIcon
            className="ambassador-perk-fontawesome"
            icon={["fas", "circle"]}
            size="1x"
          />
          <p>
            Exposure through our growing Instagram and Facebook Pages through
            re-posts
          </p>
        </div>
        <div className="ambassador-perk">
          <FontAwesomeIcon
            className="ambassador-perk-fontawesome"
            icon={["fas", "circle"]}
            size="1x"
          />
          <p>Sneak Peeks at new products</p>
        </div>

        <h1>
          Think You Have What it Takes to Be A Brand Ambassador? Ready To Get
          Started? Apply Now!
        </h1>
      </div>
      <div className="how-to-apply">
        <h1>How to Apply</h1>
        <p>
          Contact us at info@hericojewelry.com with links to your social media
          profiles, and tell us why you want to work with us!
        </p>
      </div>
    </div>
  );
};

export default AmbassadorProgramPage;
