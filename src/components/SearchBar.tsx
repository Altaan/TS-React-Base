import React from "react";
import {
  StyledSearchBar,
  StyledSearchBarIcon,
  StyledSearchBarInput,
} from "./styles/SearchBar.styled";

const SearchBar: React.FC = () => {
  return (
    <StyledSearchBar>
      <StyledSearchBarInput type="text" placeholder="Type to search" />
      <StyledSearchBarIcon></StyledSearchBarIcon>
    </StyledSearchBar>
  );
};

export default SearchBar;
