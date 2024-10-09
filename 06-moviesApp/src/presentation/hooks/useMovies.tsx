import { useEffect, useState } from "react"
import { Movie } from "../../core/entities/movie.entity"

import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";

let popularPageNumber = 1;

export const useMovies = () => {
  
    const [isLoading, setisLoading] = useState(true);

    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);

  
    useEffect(() => {
      initialLoad();
    
    }, []);

    const initialLoad = async () => {

        const nowPlayingPromise = await UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        const popularPromise = await UseCases.moviesPopularUseCase(movieDBFetcher);
        const topRatedPromise = await UseCases.moviesTopRatedUseCase(movieDBFetcher);
        const uncomingPromise = await UseCases.moviesUpcomingUseCase(movieDBFetcher);

        const [
          nowPlayingMovies,
          popularMovies,
          topRatedMovies,
          upcomingMovies,
        ] = await Promise.all([
          nowPlayingPromise,
          popularPromise,
          topRatedPromise,
          uncomingPromise,
        ])
        

        setNowPlaying( nowPlayingMovies );
        setPopular( popularMovies );
        setTopRated( topRatedMovies );
        setUpcoming( upcomingMovies );

        setisLoading(false);

  
        // console.log({
        //   nowPlayingMovies,
        //   popularMovies,
        //   topRatedMovies,
        //   upcomingMovies,
        // });
        
    }
    

    return {
      isLoading,
      nowPlaying,
      upcoming,
      popular,
      topRated,

      //Methods
      popularNextPage: async () => {
        popularPageNumber++;
        const popularMovies = await UseCases.moviesPopularUseCase( movieDBFetcher, {
          page: popularPageNumber,
        } );

        setPopular( prev => [...prev, ...popularMovies] );
      }
    }
}