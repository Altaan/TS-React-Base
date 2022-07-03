import styled from "styled-components";

interface StyledSearchBarProps {
  darkMode?: boolean;
}

export const StyledSearchBar = styled.div<StyledSearchBarProps>`
  background: ${({ darkMode }) =>
    darkMode ? `hsl(250 0% 18%)` : `hsl(0 0% 85%)`};
  height: 40px;
  border-radius: 40px;

  &:focus-within {
    background: ${({ darkMode }) =>
      darkMode ? `hsl(250 0% 25%)` : `hsl(0 0% 92%)`};
  }
`;

export const StyledSearchBarInput = styled.input<StyledSearchBarProps>`
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0 0 0 12px;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  font-size: 14px;
  line-height: 40px;
`;

export const StyledSearchBarIcon = styled.a<StyledSearchBarProps>`
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;

  &:focus-within {
    outline: none;
  }

  &::before,
  &::after {
    position: absolute;
    bottom: -2.5rem;
  }

  &:hover::before,
  &:focus::before {
    content: attr(data-tooltip);
    background: ${({ darkMode }) =>
      darkMode ? `hsl(250 0% 50%)` : `hsl(0 0% 75%)`};
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
    padding: 0.25rem;
    width: max-content;
    border-radius: 0.3rem;
  }
`;
