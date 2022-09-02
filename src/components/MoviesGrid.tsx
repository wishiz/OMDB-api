import { nanoid } from "nanoid";
import Grid from "@mui/material/Grid";
import { useStateThroughContext } from "../store";
import { getMoviesData } from "../api";
import MovieCard from "./MovieCard";
import ShowMoreButton from "./ShowMoreButton";

type Props = {
  pageNumber: number;
  searchStr: string;
  setPageNumber: (pageNum: number) => void;
};

const MoviesGrid = ({ pageNumber, searchStr, setPageNumber }: Props) => {
  const { moviesData, totalResults, setShowMoreLoading, loadMoreMoviesData } =
    useStateThroughContext();

  const handleShowMoreClick = () => {
    setShowMoreLoading(true);

    getMoviesData(searchStr, pageNumber + 1).then(({ Search }) => {
      if (Search) {
        loadMoreMoviesData(Search);
      }

      setShowMoreLoading(false);
    });
  };

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
      >
        {moviesData!.map((movie) => (
          <Grid item xs={2} sm={4} md={4} key={nanoid()}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
      {+totalResults > moviesData!.length ? (
        <ShowMoreButton
          onShowMore={() => {
            setPageNumber(pageNumber + 1);
            handleShowMoreClick();
          }}
        />
      ) : null}
    </>
  );
};

export default MoviesGrid;
