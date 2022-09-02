export type Movie = {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}

export type Movies = Array<Movie>

export type GetMoviesResponse = {
    Response: "True" | "False";
    Search?: Array<Movie>;
    totalResults?: string;
    Error?: string;
}

export type AppState = {
    moviesData: Movies | null;
    isLoading: boolean;
    isShowMoreLoading: boolean;
    errorMessage: string | null;
    totalResults: string;
    searchRequest: string
}