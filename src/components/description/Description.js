import React from 'react';
import styled from 'styled-components';
import iphone from '../../img/iphone.png';
import { Container } from '../../reusable-components/Containers';
import Button from '../../reusable-components/Button';
import { HeaderText, RegularText } from '../../reusable-components/TextStyles';
import DescriptionList from './DescriptionList'
import { BsPlay } from 'react-icons/bs';

const Description = () => {
    return(
        <Container 
            justifyContent='center'
            flexDirection='row'
            padding='127px 0'
            flexWrap='wrap'
        >
            <Container 
                margin='35px 35px 0 0'
                animation='translateXToRight 1000ms ease-out forwards'
            >
                <img src={iphone} alt='robofriends'/>
            </Container>
            <DescriptionContent 
                flexDirection='column'
                width='565px'
                margin='30px 0 0 0'
                animation='translateXToLeft 1000ms ease-out forwards'
            >
                <HeaderText>THE GREATEST PRODUCTS EVER CREATED</HeaderText>
                <RegularText margin='30px 0 30px 0'>
                    Seuismod ligula ipsum vulputate tellus quisque dictum tortor at purus faucibus tincidunt, 
                    pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </RegularText>
                <DescriptionList />
                <Links
                    flexDirection='row'
                    flexWrap='wrap'
                >
                    <AboutVideoButton>
                        <BsPlay size={30} />
                        <RegularText>ABOUT VIDEO</RegularText>
                    </AboutVideoButton>
                    <AppLink href='#'>
                        <RegularText>get the app</RegularText>
                    </AppLink>
                </Links>
            </DescriptionContent>
        </Container>
    );
}

const DescriptionContent = styled(Container)`
    color: #6d6c6c;
    p {
        line-height: 35px;
    }
    @media (max-width: 680px) {
        justify-content: center;
        text-align: center;
    }
`

const Links = styled(Container)`
    margin-top: 45px;
    @media (max-width: 680px) {
        justify-content: center;
        text-align: center;
    }
`

const AboutVideoButton = styled(Button)`
    * {
        margin-top: 1px;
    }
    p {
        margin: 0 0 0 10px;
        cursor: pointer;
    }
    width: 230px;
    margin: 0;
    justify-content: center;
    padding: 8px 20px 8px 20px;
`

const AppLink = styled.a`
    text-decoration: none;
    font-size: 16px;
    margin: 15px 0 0 25px;
    p {
        margin: 0;
        transition: color 0.5s;
    }
    p:hover,
    p:focus{
        text-decoration: none;
        color: #00b0ff;
    }
`

export default Description;