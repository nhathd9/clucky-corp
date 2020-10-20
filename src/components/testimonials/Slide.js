import React from 'react';
import landingData from './landing';
import styled from 'styled-components';
import { Container } from '../../reusable-components/Containers';
import { RegularText, LightText } from '../../reusable-components/TextStyles';
import './main.css';

const Slide = ({activeIndex, direction}) => {
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
          landingData.map((s, index) => 
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
    

const SlideSection = styled(Container)`
  @media (max-width: 759px) {
    padding: 5%;
  }
`

 export default Slide;