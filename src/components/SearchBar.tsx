import React from "react";
import { MdSearch } from "react-icons/md";
import {
  StyledSearchBar,
  StyledSearchBarInput,
  StyledSearchBarIcon,
} from "./styles/SearchBar.styled";

interface Props {
  onClickSearch: () => void;
  searchOnEnterPress?: boolean;
  darkMode?: boolean;
}

const SearchBar: React.FC<Props> = ({
  onClickSearch,
  searchOnEnterPress,
  darkMode,
}) => {
  return (
    <StyledSearchBar darkBackground={darkMode}>
      <StyledSearchBarInput
        type="text"
        placeholder="Type to search"
        onKeyPress={(e) => handleKeypress(e, searchOnEnterPress, onClickSearch)}
        darkBackground={darkMode}
      />
      <StyledSearchBarIcon
        href="#"
        onClick={(e) => handleSubmit(e, onClickSearch)}
      >
        <MdSearch color={darkMode ? "white" : "black"} />
      </StyledSearchBarIcon>
    </StyledSearchBar>
  );
};

const handleSubmit = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  onClickSearch: () => void
) => {
  event.preventDefault();
  onClickSearch();
};

const handleKeypress = (
  event: React.KeyboardEvent<HTMLInputElement>,
  searchOnEnterPress: boolean | undefined,
  onClickSearch: () => void
) => {
  if (event.key === "Enter" && searchOnEnterPress) {
    onClickSearch();
  }
};

export default SearchBar;
