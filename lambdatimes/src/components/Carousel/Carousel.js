import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: 0,
      images: []
    };
  }
  componentDidMount() {
    this.setState({
      images: carouselData
    });
  }

  leftClick = () => {
    this.setState(prevState => {
      return {
        selectedImage:
          prevState.selectedImage - 1 < 0
            ? this.state.images.length - 1
            : prevState.selectedImage - 1
      };
    });
  };

  rightClick = () => {
    this.setState(prevState => {
      return {
        selectedImage: (prevState.selectedImage + 1) % this.state.images.length
      };
    });
  };

  selectedImage = () => {
    return (
      <img
        src={this.state.images[this.state.selectedImage]}
        style={{ display: "block" }}
      />
    );
  };

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
