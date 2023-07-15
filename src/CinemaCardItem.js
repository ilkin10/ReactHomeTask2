import React from 'react';
import AdditionalInfoAboutFilm from './AdditionalInfoAboutFilm';

const CinemaCardItem = ({ film, additionalInfo }) => {
  return (
    <div style={{ marginLeft: '35px', display: 'inline-block' }}>
      <div className="cinema-card" style={{ margin: '50px' }}>
        <img
          style={{ textAlign: 'center' }}
          src={film.CoverImage}
          alt="Cinema"
          className="cinema-image2"
        />
        <div className="cinema-details">
          <h3 style={{ textAlign: 'center' }} className="cinema-name">
            {film.CinemaName}
          </h3>
          <p className="cinema-info">Genre: {film.CinemaJenre}</p>
          <p className="cinema-info">Producer: {film.CinemaProducer}</p>
          <AdditionalInfoAboutFilm af={additionalInfo} />
        </div>
      </div>
    </div>
  );
};

export default CinemaCardItem;
