import React from "react";
import pt from "prop-types";
import Card from "./Card";

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map((card, index) => {
        return (
          <div key={index}>
            <Card card={card} />
          </div>
        );
      })}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: pt.array.isRequired
}

export default Cards;
