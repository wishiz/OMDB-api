import { GetMoviesResponse } from '../types'

export const getMoviesData = async (movieTitle: string, pageNumber: number): Promise<GetMoviesResponse> => {
  try {
    const resPromise = await fetch(`${process.env.REACT_APP_BASE_API_PATH}?apikey=${process.env.REACT_APP_API_KEY}&s=${movieTitle}&page=${pageNumber}`);
    const response = await resPromise.json();
    return response;
  } catch (e) {
    throw (e)
  }
};
