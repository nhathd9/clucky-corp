import React from 'react';
import styled from 'styled-components'; 
import { Link } from '../../reusable-components/Containers';

const navContent = [
  {
    word: 'About',
    animation: 'translateXToRight 1000ms ease-out forwards'
  }, 
  {
    word: 'Support',
    animation: 'translateXToRight 700ms ease-out forwards'
  }, 
  {
    word: 'News',
    animation: 'translateXToRight 500ms ease-out forwards'
  }
];

const Navigation = () => {
      return(
            <Nav>
            {
                navContent.map(content => (
                <NavLinks href='#'
                    animation={content.animation}
                >
                    {content.word}
                </NavLinks>
                ))
            }
            </Nav>
      );
}

const Nav = styled.div`
  margin-top: 43px;
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
  width: 490px;
`

const NavLinks = styled(Link)`
  display: none;
  @media (min-width: 1070px) {
    display: block;
  }
  text-decoration: none;
  font-size: 16px;
  margin-left: 40px;
  color: #ffffff;
  transition: color 0.5s;
  &:hover,
  &:focus{
  text-decoration: none;
  color: #85caff;
  transition: color 0.5s;

`
export default Navigation;
