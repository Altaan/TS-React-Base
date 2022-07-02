import styled from "styled-components";

interface StyledSearchBarProps {
  darkBackground?: boolean;
}

export const StyledSearchBar = styled.div<StyledSearchBarProps>`
  background: ${({ darkBackground }) =>
    darkBackground ? `hsl(250 10% 18%)` : `hsl(0 0% 85%)`};
  height: 40px;
  border-radius: 40px;

  &:focus-within {
    background: ${({ darkBackground }) =>
      darkBackground ? `hsl(250 10% 25%)` : `hsl(0 0% 92%)`};
  }
`;

export const StyledSearchBarInput = styled.input<StyledSearchBarProps>`
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0 0 0 12px;
  color: ${({ darkBackground }) => (darkBackground ? "white" : "black")};
  font-size: 14px;
  line-height: 40px;
`;

export const StyledSearchBarIcon = styled.a`
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  &:focus-within {
    outline: none;
  }
`;
