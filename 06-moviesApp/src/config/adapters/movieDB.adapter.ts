import { THE_MOVIE_DB_API_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        // api_key: '51899ac0907cd63f64f039ff65f25c05',
        api_key: THE_MOVIE_DB_API_KEY ?? 'no-key',
        language: 'es'
    }
})