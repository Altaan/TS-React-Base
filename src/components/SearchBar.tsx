import React from "react";
import { MdSearch } from "react-icons/md";
import {
  StyledSearchBar,
  StyledSearchBarIcon,
  StyledSearchBarInput,
} from "./styles/SearchBar.styled";

const SearchBar: React.FC = () => {
  return (
    <StyledSearchBar>
      <StyledSearchBarInput type="text" placeholder="Type to search" />
      <StyledSearchBarIcon href="#">
        <MdSearch color="black" />
      </StyledSearchBarIcon>
    </StyledSearchBar>
  );
};

export default SearchBar;
