import React, { Component } from 'react'

export default class AdditionalInfoAboutFilm extends Component {
  render() {
    return (
      <div>
            <p className="cinema-info">IMDB: {this.props.af.imdb}</p>
            <p className="cinema-info">Finance: {this.props.af.finance}</p>
      </div>
    )
  }
}
