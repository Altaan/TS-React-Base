import React from "react";
import { MdSearch } from "react-icons/md";
import {
  StyledSearchBar,
  StyledSearchBarIcon,
  StyledSearchBarInput,
} from "./styles/SearchBar.styled";

interface Props {
  onClickSearch: () => void;
  searchEnterPress?: boolean;
}

const SearchBar: React.FC<Props> = ({ onClickSearch, searchEnterPress }) => {
  const handleSubmit = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    onClickSearch();
  };

  const handleKeypress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchEnterPress) {
      onClickSearch();
    }
  };

  return (
    <StyledSearchBar>
      <StyledSearchBarInput
        type="text"
        placeholder="Type to search"
        onKeyPress={(e) => handleKeypress(e)}
      />
      <StyledSearchBarIcon href="#" onClick={(e) => handleSubmit(e)}>
        <MdSearch color="black" />
      </StyledSearchBarIcon>
    </StyledSearchBar>
  );
};

export default SearchBar;
