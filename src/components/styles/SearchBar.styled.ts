import styled from "styled-components";

interface StyledSearchBarProps {
  darkBackground?: boolean;
}

export const StyledSearchBar = styled.div<StyledSearchBarProps>`
  background: ${({ darkBackground }) =>
    darkBackground ? `hsl(250 20% 20%)` : `hsl(0 0% 90%)`};
  height: 40px;
  border-radius: 40px;
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
`;
