import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useStateThroughContext } from "../store";
import MoviesGrid from "./MoviesGrid";

type Props = {
  pageNumber: number;
  searchStr: string;
  setPageNumber: (pageNum: number) => void;
};

const MoviesBlock = ({ pageNumber, searchStr, setPageNumber }: Props) => {
  const { moviesData, isLoading, errorMessage } = useStateThroughContext();

  return (
    <>
      {isLoading ? (
        <CircularProgress size={80} sx={{ margin: "0 auto" }} />
      ) : null}
      {errorMessage ? (
        <Typography color="red" fontSize="2rem" sx={{ margin: "0 auto" }}>
          Oops! {errorMessage} Try again.
        </Typography>
      ) : null}
      {moviesData ? (
        <MoviesGrid
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          searchStr={searchStr}
        />
      ) : null}
    </>
  );
};

export default MoviesBlock;
