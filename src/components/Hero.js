import React from 'react';
import styled from 'styled-components';
import hero from '../img/hero.jpg';
import { Container } from '../reusable-components/Containers';
import Button from '../reusable-components/Button';
import { HeaderText, RegularText } from '../reusable-components/TextStyles';
import { AiFillAndroid, AiFillApple } from 'react-icons/ai';


const Hero = () => {
    return(
        <HeroBackground 
            width='100%' 
            height='560px'
        >
            <HeroContent
                width='512px'
                flexDirection='column'
                padding='127px 0 127px 0'
                animation='translateXToRight 1000ms ease-out forwards'
            >
                <HeaderText>CREATORS OF ROBOFRIENDS AND SMARTBRAIN</HeaderText>
                <RegularText>DEVELOPERS OF THE FUTURE, BUILDING FOR TODAY</RegularText>
                <ButtonContainer
                    flexDirection='row'
                    margin='45px 0 0 0'
                    flexWrap='wrap'
                >
                <AppLink href='https://dangnhathuy.github.io/robofriends'>
                    <AiFillAndroid size={20}/>
                    <RegularText>ROBOFRIENDS</RegularText>
                </AppLink>
                <AppLink href='https://facerecognitionbrain7.herokuapp.com'>
                    <AiFillApple size={20}/>
                    <RegularText>SMARTBRAIN</RegularText>
                </AppLink>
            </ButtonContainer>
            </HeroContent>
        </HeroBackground>
    );
}

const HeroBackground = styled(Container)`
    background: url(${hero}) no-repeat fixed center center;
    background-size: cover;

    @media (max-width: 689px) {
        display: flex;
        justify-content: center;
        min-height: 560px;
        height: 60%;
    }
`

const HeroContent = styled(Container)`
    @media (max-width: 689px) {
        left: 0;
        text-align: center;
        width: 100%;
    }

    position: relative;
    left: 15%;
    color: #525252;
`
const ButtonContainer = styled(Container)`
    @media (max-width: 689px) {
        justify-content: space-evenly;
    }

`
const AppLink = styled(Button)`
    margin-right: 25px;
    margin-bottom: 20px;
    padding: 15px 40px;
`


export default Hero;