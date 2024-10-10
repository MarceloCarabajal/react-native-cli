
import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import * as useCases from "../../core/use-cases";
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { FullMovie } from '../../core/entities/movie.entity';
import { Cast } from '../../core/entities/cast.entity';

export const useMovie = ( movieId: number) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>();
    const [cast, setcast] = useState<Cast[]>();

    useEffect(() => {
      loadMovie();
    }, [movieId]);


    const loadMovie = async() => {
        setIsLoading(true);

        const fullMoviePromise = await useCases.getMovieByIdUseCase( movieDBFetcher, movieId);
        const castPromise = await useCases.getMovieCastUseCase( movieDBFetcher, movieId);

        const [ fullMovie, cast] = await Promise.all([ fullMoviePromise, castPromise]);

        setMovie(fullMovie);
        setcast(cast);

        setIsLoading(false);
        
    }


  return {
    isLoading,
    movie,
    cast
  }
}