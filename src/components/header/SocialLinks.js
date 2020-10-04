import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const socials = [ <FaInstagram size={25}/>, <FaFacebookF size={23}/>, <FaTwitter size={23}/>]

const SocialLinks = () => {
    return(
    <SocialsContainer>
    {
        socials.map(social => (
        <WhiteCircle>
            {social}
        </WhiteCircle>
        ))
    }
    </SocialsContainer>
    );
}

const SocialsContainer = styled.div`
& > * {
  margin-left: 20px;
}
display: flex;
flex-direction: row;
margin-top: 38px;
margin-left: auto;

`

const WhiteCircle = styled.div`
& > * {
  color: #2a45e2;
  margin-top: 7px;
}
display: flex;
justify-content: center;
  background-color: #ffffff;
  max-width: 40px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: transform 0.5s;
  &:hover { 
    transform: scale(0.95); 
  }
  `

export default SocialLinks;