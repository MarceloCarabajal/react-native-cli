import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBUpcomingResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

export const moviesUpcomingUseCase = async (  fetcher: HttpAdapter): Promise<Movie[]> => {

    try {
        
        const upcoming = await fetcher.get<MovieDBUpcomingResponse>('/upcoming');

        return upcoming.results.map( result => MovieMapper.fromMovieDBResultToEntity(result) );

        return [];
        
    } catch (error) {
        throw new Error('Error fetching movies - Upcoming')
    }

}