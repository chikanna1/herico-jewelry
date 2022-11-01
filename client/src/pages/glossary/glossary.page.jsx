import React from "react";
import "./glossary.styles.scss";

const GlossaryPage = () => {
  return (
    <div className="glossary-page-container">
      <h1>GLOSSARY</h1>
      <div className="alphabet-rows">
        <div className="alphabet-row">
          <h1 className="alphabet-title">#</h1>
          <div className="alphabet-cards-row">
            <div className="alphabet-card">
              <h1 className="alphabet-word">18-Karat Gold</h1>
              <p className="alphabet-text">
                Gold Karat is a measure of how much precious metal (Gold) is
                made in a piece with it. Gold is a precious yellow metal (atomic
                number 79.) 18 karat gold is made of 75% gold and 25% other
                metals such as zinc, copper etc.
              </p>
            </div>
          </div>
        </div>
        <div className="alphabet-row">
          <h1 className="alphabet-title">A</h1>
          <div className="alphabet-cards-row">
            <div className="alphabet-card">
              <h1 className="alphabet-word">African Jewelry Set</h1>
              <p className="alphabet-text">
                African Jewelry Sets are jewelry sets that are African inspired.
              </p>
            </div>
            <div className="alphabet-card">
              <h1 className="alphabet-word">Adaeze</h1>
              <p className="alphabet-text">
                This is a name given primarily to women in the Igbo language of
                Nigeria. It translates to princess or daughter of the king. That
                is why we named this jewelry set in honor of princesses.
              </p>
            </div>
            <div className="alphabet-card">
              <h1 className="alphabet-word">Amaka</h1>
              <p className="alphabet-text">
                This is a name given primarily to women in the Igbo language of
                Nigeria. It translates loosley to beautiful.
              </p>
            </div>
          </div>
        </div>
        <div className="alphabet-row">
          <h1 className="alphabet-title">M</h1>
          <div className="alphabet-cards-row">
            <div className="alphabet-card">
              <h1 className="alphabet-word">Menala</h1>
              <p className="alphabet-text">
                Menala is actually a word that stems from the word Omenala. We
                shorted the word be removing the O. Omenala in igbo loosley
                translates to "culture"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlossaryPage;
