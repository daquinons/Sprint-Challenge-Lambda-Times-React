import React from "react";
import pt from "prop-types";

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt="" />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: pt.shape({
    headline: pt.string.isRequired,
    img: pt.string.isRequired,
    author: pt.string.isRequired
  })
}

export default Card;
