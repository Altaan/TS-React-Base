import React, { useState } from "react";
import {
  StyledAnchor,
  StyledHeader,
  StyledList,
  StyledListItem,
  StyledLogo,
  StyledMenuBtn,
  StyledMenuBurgerBtn,
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
  const [isMenuBtnOpen, setIsMenuBtnOpen] = useState(false);

  return (
    <StyledHeader>
      <StyledLogo>{logoLink}</StyledLogo>

      <StyledMenuBtn>
        <StyledMenuBurgerBtn />
      </StyledMenuBtn>
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
