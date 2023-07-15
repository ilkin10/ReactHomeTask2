import React, { Component } from "react";

export default class NavbarItem extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
        <div className="cinema-image-container">
        <img src={this.props.cinemaobject.logoOfCinema} alt="Cinema" className="cinema-image1" />
      </div>
          <div className="cinema-info">
            <h1 style={{marginLeft:"40px"}}>{this.props.cinemaobject.name}</h1>
            <p style={{marginLeft:"40px"}}>{this.props.cinemaobject.address}</p>
          </div>
          <div className="cinema-rating">
            <span>Rating:</span>
            <span>{this.props.cinemaobject.ratingofcinema}</span>
          </div>
        </nav>
      </div>
    );
  }
}
