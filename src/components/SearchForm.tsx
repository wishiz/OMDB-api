import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  searchStr: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
};

const SearchForm = ({ searchStr, onSubmit, onInputChange }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <Box display="flex" alignItems="stretch">
        <TextField
          name="title"
          label="Movie"
          placeholder="Please enter movie title"
          onChange={onInputChange}
          value={searchStr}
          size="small"
          required
          autoFocus
        />
        <IconButton type="submit" aria-label="search" sx={{ marginLeft: 1 }}>
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
      </Box>
    </form>
  );
};

export default SearchForm;
