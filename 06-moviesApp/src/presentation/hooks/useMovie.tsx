
import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import * as useCases from "../../core/use-cases";
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { FullMovie } from "../../core/entities/movie.entity";

export const useMovie = ( movieId: number) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>();

    useEffect(() => {
      loadMovie();
    }, [movieId]);


    const loadMovie = async() => {
        setIsLoading(true);

        const fullMovie = await useCases.getMovieByIdUseCase( movieDBFetcher, movieId);
        setMovie(fullMovie);
        setIsLoading(false);

        console.log({fullMovie});
        
    }


  return {
    isLoading,
    movie
  }
}