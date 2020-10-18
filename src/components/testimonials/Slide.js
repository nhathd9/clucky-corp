import React from 'react';
import landingData from './Landing';
import styled from 'styled-components';
import { Container } from '../../reusable-components/Containers';
import { RegularText, LightText } from '../../reusable-components/TextStyles';
import './main.css';

class Slide extends React.Component {
    constructor(props) {
      super(props);
      this.state = {landing: landingData};
    }
  render() {
      let { direction, activeIndex } = this.props
      return(
        <SlideSection 
        width='100%'
        padding='0 25%'
        textAlign='center'
        className={
            direction ? direction : null
        }
          >
        {
          this.state.landing.map((s, index) =>
            <div 
            className={
              index === activeIndex ? 'active' : 'inactive'
            }
              key={index}>
                <LightText 
                fontSize='18'
                lineHeight='40'
                margin='0 0 50px 0'
                >
                  {s.description}
                </LightText>
                <RegularText>{s.name}</RegularText>
                <LightText fontSize='14'>{s.position}</LightText>
            </div>
          ) }
          </SlideSection>
      )
    }
    
  }

const SlideSection = styled(Container)`
  @media (max-width: 759px) {
    padding: 5%;
  }
`

 export default Slide;