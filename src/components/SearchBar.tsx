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
  darkBackground?: boolean;
}

const SearchBar: React.FC<Props> = ({
  onClickSearch,
  searchOnEnterPress,
  darkBackground,
}) => {
  const handleSubmit = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    onClickSearch();
  };

  const handleKeypress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchOnEnterPress) {
      onClickSearch();
    }
  };

  return (
    <StyledSearchBar darkBackground={darkBackground}>
      <StyledSearchBarInput
        type="text"
        placeholder="Type to search"
        onKeyPress={(e) => handleKeypress(e)}
        darkBackground={darkBackground}
      />
      <StyledSearchBarIcon href="#" onClick={(e) => handleSubmit(e)}>
        <MdSearch color={darkBackground ? "white" : "black"} />
      </StyledSearchBarIcon>
    </StyledSearchBar>
  );
};

export default SearchBar;
