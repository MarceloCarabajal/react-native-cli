import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBTopRatedResponse, NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

export const moviesTopRatedUseCase = async (  fetcher: HttpAdapter): Promise<Movie[]> => {

    try {
        
        const topRated = await fetcher.get<MovieDBTopRatedResponse>('/top_rated');

        return topRated.results.map( result => MovieMapper.fromMovieDBResultToEntity(result) );

        return [];
        
    } catch (error) {
        throw new Error('Error fetching movies - Top rated results')
    }

}