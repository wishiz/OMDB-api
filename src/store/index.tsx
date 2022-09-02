import {
  createContext,
  useContext,
  useReducer,
  PropsWithChildren,
} from "react";
import { AppState, Movies } from "../types";

const SET_MOVIES_DATA = "SET_MOVIES_DATA";
const LOAD_MORE_MOVIES_DATA = "LOAD_MORE_MOVIES_DATA";
const SET_LOADING_STATUS = "SET_LOADING_STATUS";
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
const SET_TOTAL_RESULTS = "SET_TOTAL_RESULTS";
const SET_SEARCH_REQUEST = "SET_SEARCH_REQUEST";
const SET_SHOW_MORE_LOADING_STATUS = "SET_SHOW_MORE_LOADING_STATUS";

const initialState: AppState = {
  moviesData: null,
  isLoading: false,
  isShowMoreLoading: false,
  errorMessage: null,
  totalResults: "",
  searchRequest: "",
};

type AppActions =
  | { type: "SET_MOVIES_DATA"; moviesData: Movies | null }
  | { type: "LOAD_MORE_MOVIES_DATA"; moviesData: Movies }
  | { type: "SET_LOADING_STATUS"; isLoading: boolean }
  | { type: "SET_SHOW_MORE_LOADING_STATUS"; isShowMoreLoading: boolean }
  | { type: "SET_ERROR_MESSAGE"; errorMessage: string | null }
  | { type: "SET_TOTAL_RESULTS"; totalResults: string }
  | { type: "SET_SEARCH_REQUEST"; searchRequest: string };

type StateProvider = AppState & {
  setMoviesData: (movies: Movies | null) => void;
  loadMoreMoviesData: (movies: Movies) => void;
  setLoading: (isLoading: boolean) => void;
  setShowMoreLoading: (isLoading: boolean) => void;
  setErrorMessage: (message: string | null) => void;
  setTotalResults: (results: string) => void;
  setSearchRequest: (request: string) => void;
};

const AppContext = createContext<StateProvider | undefined>(undefined);

const AppProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(
    (state: AppState, action: AppActions) => {
      switch (action.type) {
        case SET_MOVIES_DATA:
          return { ...state, moviesData: action.moviesData };
        case LOAD_MORE_MOVIES_DATA:
          if (state.moviesData) {
            return {
              ...state,
              moviesData: [...state.moviesData, ...action.moviesData],
            };
          }
          return state;
        case SET_LOADING_STATUS:
          return { ...state, isLoading: action.isLoading };
        case SET_SHOW_MORE_LOADING_STATUS:
          return { ...state, isShowMoreLoading: action.isShowMoreLoading };
        case SET_ERROR_MESSAGE:
          return { ...state, errorMessage: action.errorMessage };
        case SET_TOTAL_RESULTS:
          return { ...state, totalResults: action.totalResults };
        case SET_SEARCH_REQUEST:
          return { ...state, searchRequest: action.searchRequest };
        default:
          throw new Error("Wrong action passed.");
      }
    },
    initialState
  );

  const setMoviesData = (movies: Movies | null) => {
    dispatch({ type: SET_MOVIES_DATA, moviesData: movies });
  };

  const loadMoreMoviesData = (movies: Movies) => {
    dispatch({ type: LOAD_MORE_MOVIES_DATA, moviesData: movies });
  };

  const setLoading = (isLoading: boolean) => {
    dispatch({ type: SET_LOADING_STATUS, isLoading });
  };

  const setShowMoreLoading = (isShowMoreLoading: boolean) => {
    dispatch({ type: SET_SHOW_MORE_LOADING_STATUS, isShowMoreLoading });
  };

  const setErrorMessage = (errorMessage: string | null) => {
    dispatch({ type: SET_ERROR_MESSAGE, errorMessage });
  };

  const setTotalResults = (totalResults: string) => {
    dispatch({ type: SET_TOTAL_RESULTS, totalResults });
  };

  const setSearchRequest = (searchRequest: string) => {
    dispatch({ type: SET_SEARCH_REQUEST, searchRequest });
  };

  const value = {
    moviesData: state.moviesData,
    isLoading: state.isLoading,
    errorMessage: state.errorMessage,
    totalResults: state.totalResults,
    searchRequest: state.searchRequest,
    isShowMoreLoading: state.isShowMoreLoading,
    setMoviesData,
    loadMoreMoviesData,
    setLoading,
    setShowMoreLoading,
    setErrorMessage,
    setTotalResults,
    setSearchRequest,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useStateThroughContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("No context");
  }

  return context;
};

export default AppProvider;
