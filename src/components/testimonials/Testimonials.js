import React from 'react';
import Slide from './Slide';
import landingData from './Landing';
import styled from 'styled-components';
import { Container } from '../../reusable-components/Containers';
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi'
import './main.css';

class Testimonials extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
            direction: 'left',
            length: landingData.length
          };
        }

        goToPrevSlide = () => {
        let { activeIndex, length } = this.state;
        if(activeIndex < 1) {
          activeIndex = length - 1;
            }
            else {
              activeIndex--;
            }
        this.setState({activeIndex, direction: 'left'});
          }
        goToNextSlide = () => {
        let { activeIndex, length } = this.state;
        if(activeIndex === length - 1) {
          activeIndex = 0
              }
              else {
                activeIndex++;
              }
        this.setState({activeIndex, direction: 'right'});
          }

          render() {
            return (
              <Container
                padding='100px 0 70px 0'
                flexDirection='column'
              >
                <Container
                  justifyContent='center'
                >
                    <Slide
                      activeIndex={this.state.activeIndex}
                      direction={this.state.direction}
                    />
                  </Container>
                  <ArrowContainer
                    justifyContent='center'
                  >
                    <FiArrowLeftCircle
                       onClick={this.goToPrevSlide}
                       size={40}
                    />
                    <FiArrowRightCircle
                      onClick={this.goToNextSlide}
                      size={40}
                    />
                  </ArrowContainer>
              </Container>
            );
          }
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