import React, {useState} from 'react';
import Slide from './Slide';
import landingData from './landing';
import styled from 'styled-components';
import { Container } from '../../reusable-components/Containers';
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi'
import './main.css';

const Testimonials = () => {

        const [ activeIndex, setActiveIndex ] = useState(0);
        const [ direction, setDirection ] = useState('left');
        const [ length ] = useState(landingData.length);

        const goToPrevSlide = () => {
          let index = activeIndex
        if(activeIndex < 1) {
          index = length - 1;
            }
            else {
              index--;
            }
            setActiveIndex(index);
            setDirection('left');
          }
        const goToNextSlide = () => {
          let index = activeIndex
        if(activeIndex === length - 1) {
          index = 0
              }
              else {
                index++;
              }
              setActiveIndex(index);
              setDirection('right');
          }
            return (
              <Container
                padding='100px 0 70px 0'
                flexDirection='column'
              >
                <Container
                  justifyContent='center'
                >
                    <Slide
                      activeIndex={activeIndex}
                      direction={direction}
                    />
                  </Container>
                  <ArrowContainer
                    justifyContent='center'
                  >
                    <FiArrowLeftCircle
                       onClick={goToPrevSlide}
                       size={40}
                    />
                    <FiArrowRightCircle
                      onClick={goToNextSlide}
                      size={40}
                    />
                  </ArrowContainer>
              </Container>
            );
    }
    
 
    const ArrowContainer = styled(Container)`
    color: #6d6c6c;
    
    *:hover {
      color: #00b0ff;
  }
    *{
      margin: 0 30px;
      transition: color 0.1s;
    }
    `

export default Testimonials;