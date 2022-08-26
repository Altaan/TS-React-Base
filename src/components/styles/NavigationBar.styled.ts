import styled from "styled-components";

export const StyledHeader = styled.header`
  background: var(--color-light-orange);
  position: fixed;
  z-index: 1000;
  text-align: center;
  width: 100%;
`;

export const StyledLogo = styled.h1`
  margin: 0;
`;

export const StyledNav = styled.nav`
  background: var(--color-light-orange);
  position: absolute;
  text-align: left;
  left: 0;
  top: 100%;
  width: 100%;
`;

export const StyledMenuBtn = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 2rem;
  height: 2rem;
  transition: all 0.5s ease-in-out;
  border: 3px solid black;
  cursor: pointer;
`;

export const StyledMenuBurgerBtn = styled.div`
  background: white;
  width: 1.5rem;
  height: 0.25rem;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: white;
    width: 1.5rem;
    height: 0.25rem;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
  }

  &::before {
    transform: translateY(-8px);
  }

  &::after {
    transform: translateY(8px);
  }
`;

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StyledListItem = styled.li`
  margin-bottom: 1em;
  margin-left: 1em;
`;

export const StyledAnchor = styled.a`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.2rem;

  &:hover {
    color: black;
  }
`;
