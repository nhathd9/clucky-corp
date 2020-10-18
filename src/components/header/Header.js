import React from 'react';
import logo from '../../img/logo.png';
import styled from 'styled-components'; 
import DropDown from './DropDown';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';

class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      width: null,
      screenWidthSmall: null
    }
  }

  onScreenChange = () => {
    if (this.state.width < 1070) {
      this.setState({screenWidthSmall: true})
    } else if (this.state.width >= 1070) {
      this.setState({screenWidthSmall: false})
    }
  }


    render(){
      return(
      <>
      <HeaderSolid>
      { this.state.screenWidthSmall === false
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

    updateDimensions = () => {
      this.setState({ width: window.innerWidth });
      this.onScreenChange();
    };
    componentDidMount() {
      window.addEventListener('resize', this.updateDimensions);
      window.addEventListener('load', this.updateDimensions);
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions);
      window.removeEventListener('load', this.updateDimensions);
    }
}

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
