import React, { useState, useEffect } from 'react';
import logo from '../../img/logo.png';
import styled from 'styled-components'; 
import DropDown from './DropDown';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';

const Header = () => {
  const [ width, setWidth ] = useState(window.innerWidth)
  const [ screenWidthSmall, setScreenWidthSmall ] = useState(null)
  const onScreenChange = () => {
    if (width < 1070) {
      setScreenWidthSmall(true)
    } else if (width >= 1070) {
      setScreenWidthSmall(false)
    }
  }
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    onScreenChange();
  };

  useEffect(() => {

    window.addEventListener('resize', updateDimensions);
    window.addEventListener('load', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('load', updateDimensions);
    }

  })

      return(
      <>
      <HeaderSolid>
      { screenWidthSmall === false
        ? <HeaderGradient>
            <Container>
                <HomeLink href='#'>
                  <img src={logo} alt='Clucky Corp'/>
                </HomeLink>
                  <Navigation />
                  <SocialLinks />
            </Container>
          </HeaderGradient>
        : (
          <>
            <HeaderGradient>
            <Container>
                <HomeLink href='#'>
                  <img src={logo} alt='Clucky Corp'/>
                </HomeLink>
              </Container>
            </HeaderGradient>
            <DropDown />
            
          </>
          )       
        }
      </HeaderSolid>
      </>
      );
    };


const HeaderGradient = styled.div`
    width: 100%;
    height: 150px;
    background-image: linear-gradient(#00b0ff, #0030ff);
    clip-path: polygon(
      0 0,
      100% 0,
      100% 100%,
      0 calc(120% - 4vw)
    );
`
const HeaderSolid = styled.div`
    width: 100%;
    height: 150px;
    background-color: #183bd1;
`

const Container = styled.div`
  display: flex;
  align-content: flex-end;
  @media (max-width: 1069px) {
    margin-left: 5%;
  }
  margin-left: 18%;
  margin-right: 18%;
`

const HomeLink = styled.a`
margin-top: 5px;
@media (max-width: 1069px) {
  margin-top: 25px;
}
animation: translateXToRight 1300ms ease-out forwards; 
  transition: transform 0.5s;
  &:hover { 
    transform: scale(0.95); 
  }
`
export default Header;
