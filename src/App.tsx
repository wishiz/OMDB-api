import React, { useState } from "react";
import Container from "@mui/material/Container";
import MoviesBlock from "./components/MoviesBlock";
import SearchForm from "./components/SearchForm";
import Typography from "@mui/material/Typography";
import { useStateThroughContext } from "./store";
import { getMoviesData } from "./api";

function App() {
  const [searchStr, setSearchStr] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);

  const { setMoviesData, setLoading, setErrorMessage, setTotalResults } =
    useStateThroughContext();

  const hangleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    if (searchStr) {
      getMoviesData(searchStr, pageNumber).then((res) => {
        const { Response, Search, Error, totalResults } = res;
        if (Response === "True" && Search) {
          setMoviesData(Search);
          setErrorMessage(null);
          setTotalResults(totalResults || "");
        } else if (Response === "False" && Error) {
          setErrorMessage(Error);
          setMoviesData(null);
        }
        setLoading(false);
      });
    }
  };

  const handleSearchStrChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setSearchStr(e.target.value);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <Typography variant="h1">Movies seeker</Typography>
      <SearchForm
        searchStr={searchStr}
        onSubmit={hangleSubmit}
        onInputChange={handleSearchStrChange}
      />
      <MoviesBlock
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        searchStr={searchStr}
      />
    </Container>
  );
}

export default App;
