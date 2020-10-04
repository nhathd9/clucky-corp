import React from 'react';
import styled from 'styled-components';
import hero from '../img/hero.jpg';
import { HeaderText, RegularText } from './TextStyles';
import { AiFillAndroid, AiFillApple } from 'react-icons/ai';


const Hero = () => {
    return(
        <HeroContainer>
            <Caption>
                <HeaderText>CREATORS OF ROBOFRIENDS AND SMARTBRAIN</HeaderText>
                <RegularText>DEVELOPERS OF THE FUTURE, BUILDING FOR TODAY</RegularText>
                <ButtonContainer>
                <Button href='https://dangnhathuy.github.io/robofriends'>
                    <AiFillAndroid size={20}/>
                    <RegularText>ROBOFRIENDS</RegularText>
                </Button>
                <Button href='https://facerecognitionbrain7.herokuapp.com'>
                    <AiFillApple size={20}/>
                    <RegularText>SMARTBRAIN</RegularText>
                </Button>
            </ButtonContainer>
            </Caption>
        </HeroContainer>
    );
}

const HeroContainer = styled.div`
    width: 100%;
    height: 560px;
    background: url(${hero}) no-repeat fixed center center;
    background-size: cover;

    @media (max-width: 689px) {
        display: flex;
        justify-content: center;
    }
`

const Caption = styled.div`
    @media (max-width: 689px) {
        left: 0;
        text-align: center;
        width: 100%;
    }

    position: relative;
    left: 15%;
    padding-top: 5%;
    display: flex;
    flex-direction: column;
    color: #525252;
    width: 512px;
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 45px;
    @media (max-width: 689px) {
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

`
const Button = styled.a`
    display: flex;
    flex-direction: row;
    color: #525252;
    border 2px solid #525252;
    margin-right: 25px;
    margin-bottom: 20px;
    padding: 15px 40px;
    text-decoration: none;
    p {
        margin: 0;
        margin-left: 10px;
    }

    @media (max-width: 689px) {
        margin-right: 5px;
        margin-left: 5px;
    }

    &:hover {
        border-color: #00b0ff;
        color: #00b0ff;
        p {
            color: #00b0ff;
            transition: color 0.5s
        }
        transition: color 0.5s, border-color 0.5s;
       
    }
`


export default Hero;