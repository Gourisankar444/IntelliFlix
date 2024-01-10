import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;

// import React from 'react';
// import MovieCard from './MovieCard';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const MovieList = ({ title, movies }) => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 7, // Adjust the number of visible slides as needed
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000, // Adjust autoplay speed as needed
//     swipeToSlide: true,
//     draggable: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="px-6">
//       <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
//       <Slider {...settings}>
//         {movies?.map((movie) => (
//           <div key={movie.id}>
//             <MovieCard posterPath={movie.poster_path} />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default MovieList;
