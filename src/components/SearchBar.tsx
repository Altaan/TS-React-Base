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
    <StyledSearchBar darkMode={darkMode}>
      <StyledSearchBarInput
        type="text"
        placeholder="Search..."
        onKeyPress={(e) => handleKeypress(e, searchOnEnterPress, onClickSearch)}
        darkMode={darkMode}
      />
      <StyledSearchBarIcon
        href="#"
        onClick={(e) => handleSubmit(e, onClickSearch)}
        data-tooltip="Search"
        darkMode={darkMode}
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
