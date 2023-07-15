import React from 'react';
import NavbarItem from './NavbarItem';
import CinemaCardItem from './CinemaCardItem';
import FeedBackItem from './FeedBackItem';

const cinema = {
  name: 'CinemaPlus',
  address: 'Koroglu Rehimov 70',
  ratingofcinema: '6.6*',
  logoOfCinema:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDiQXOPaeSTdCLHYGPfWSuE4Ddv_EwOAv0uQ&usqp=CAU',
};

const films = [
  {
    CinemaName: 'Interstellar',
    CinemaJenre: 'Action',
    CinemaProducer: 'Christopher Nolan',
    CoverImage:
      'https://m.media-amazon.com/images/I/61pyUElLh7L._AC_UF894,1000_QL80_.jpg',
  },
  {
    CinemaName: 'Spider Man',
    CinemaJenre: 'Fantasy',
    CinemaProducer: 'John Doe',
    CoverImage:
      'https://www.wallpaperflare.com/static/65/932/1022/digital-art-venom-miles-morales-spider-man-wallpaper.jpg',
  },
  {
    CinemaName: 'Never Be Alone',
    CinemaJenre: 'Something',
    CinemaProducer: 'Person',
    CoverImage:
      'https://marketplace.canva.com/EAFKCougWxw/2/0/1131w/canva-minimalist-documenter-never-be-alone-movie-poster-TrbqaWjvEpM.jpg',
  },
];

const filmImdbAndFinance = [
  {
    imdb: 6.5,
    finance: '10.000.000 $',
  },
  {
    imdb: 2.3,
    finance: '45.023.220 $',
  },
  {
    imdb: 4.8,
    finance: '1.000.000 $',
  },
];


const feedbacks = [
  {
    user: "Ilkin",
    moviename:"Interstellar",
    time:"7 minutes ago",
    content:"I think this is a greatest movie i have ever seen"
  },
  {
    user: "Arif",
    moviename:"SpiderMan",
    time:"2 month ago",
    content:"Good Movie. I liked that."
  },
  {
    user: "John",
    moviename:"Never Be Alone",
    time:"1 year ago",
    content:"Amazing"
  },
];


function App() {
  const cinemaCards = films.map((film, index) => {
    const additionalInfo = filmImdbAndFinance[index];
    return (
      <CinemaCardItem key={index} film={film} additionalInfo={additionalInfo} />
    );
  });

  return (
    <div id="root">
      <NavbarItem cinemaobject={cinema} />
      <div style={{ display: 'flex' }}>{cinemaCards}</div>
      <FeedBackItem feedback={feedbacks[0]}></FeedBackItem>
      <FeedBackItem feedback={feedbacks[1]}></FeedBackItem>
      <FeedBackItem feedback={feedbacks[2]}></FeedBackItem>
    </div>
  );
}

export default App;
