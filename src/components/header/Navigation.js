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
                <Link href='#'
                    animation={content.animation}
                >
                    {content.word}
                </Link>
                ))
            }
            </Nav>
      );
}

const Nav = styled.div`
  a {
    text-decoration: none;
    font-size: 16px;
    margin-left: 40px;
    color: #ffffff;
    transition: color 0.5s;
  }
  a:hover,
  a:focus{
	text-decoration: none;
  color: #85caff;
  transition: color 0.5s;
}
  margin-top: 43px;
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
  width: 490px;

`

export default Navigation;
