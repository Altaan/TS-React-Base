import React from "react";
import {
  StyledAnchor,
  StyledHeader,
  StyledList,
  StyledListItem,
  StyledLogo,
  StyledNav,
} from "./styles/NavigationBar.styled";

interface NavItem {
  title: string;
  link: string;
}

interface Props {
  items: NavItem[];
  logoLink: string;
}

const NavigationBar: React.FC<Props> = ({ items, logoLink }) => {
  return (
    <StyledHeader>
      <StyledLogo>{logoLink}</StyledLogo>

      <StyledNav>
        <StyledList>
          {items.map((navItem, index) => (
            <StyledListItem>
              <StyledAnchor
                key={`${navItem.title + index.toString}`}
                href={navItem.link}
              >
                {navItem.title}
              </StyledAnchor>
            </StyledListItem>
          ))}
        </StyledList>
      </StyledNav>
    </StyledHeader>
  );
};

export default NavigationBar;
