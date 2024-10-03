import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBPopularResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

export const moviesPopularUseCase = async (  fetcher: HttpAdapter): Promise<Movie[]> => {

    try {
        
        const popular = await fetcher.get<MovieDBPopularResponse>('/popular');

        return popular.results.map( result => MovieMapper.fromMovieDBResultToEntity(result) );

        return [];
        
    } catch (error) {
        throw new Error('Error fetching movies - Popular Use Case')
    }

}