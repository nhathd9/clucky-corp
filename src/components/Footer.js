import React from 'react';
import styled from 'styled-components';
import { LightText } from '../reusable-components/TextStyles';
import { Container, Link } from '../reusable-components/Containers';
import { AiOutlineTwitter, AiFillFacebook, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const footerLinks = [
    {
        icon: <AiOutlineTwitter size={40}/>,
        animation: 'translateYDown 500ms ease-out forwards'
    },
    {
        icon: <AiFillFacebook size={40}/>,
        animation: 'translateYDown 700ms ease-out forwards'
    },
    {
        icon: <AiFillLinkedin size={40}/>,
        animation: 'translateYDown 1000ms ease-out forwards'
    },
    {
        icon: <AiFillGithub size={40}/>,
        animation: 'translateYDown 1500ms ease-out forwards'
    },
]

const Footer = () => {
    return(
        <FooterContainer flexDirection='column' justifyContent='center' padding='100px 10%'>
            <Container 
                justifyContent='center' 
            >
                <Container 
                    width='80%'
                    margin='0 0 100px'
                    justifyContent='space-evenly' 
                    flexWrap='wrap'
                >
                {
                    footerLinks.map(link => (
                        <IconContainer href='#' animation={link.animation}>
                            {link.icon}
                        </IconContainer>
                    ))
                }
                </Container>
            </Container>
            <LightText margin='auto'>
            Designed by PixelHint :)
            </LightText>
        </FooterContainer>
    );
}


const FooterContainer = styled(Link)`
    @media()
`


const IconContainer = styled(Link)`
    color: #bababa;
`




export default Footer;