import React from 'react';
import styled from 'styled-components';
import { Link, Container } from '../../reusable-components/Containers';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';


const socials = [
  {
    icon: <FaInstagram size={25}/>,
    animation: 'translateXToLeft 500ms ease-out forwards'
  }, 
  {
    icon: <FaFacebookF size={23}/>,
    animation: 'translateXToLeft 700ms ease-out forwards'
  }, 
  {
    icon: <FaTwitter size={23}/>,
    animation: 'translateXToLeft 1000ms ease-out forwards'
  }
];

const SocialLinks = () => {
    return(
    <SocialsContainer 
      flexDirection='row'
      margin='38px 0 0 auto'
    >
    {
        socials.map(social => (
        <WhiteCircle 
          href='#'
          animation={social.animation}
          justifyContent='center'
          width='40px'
          height='40px'
        >
            {social.icon}
        </WhiteCircle>
        ))
    }
    </SocialsContainer>
    );
}

const SocialsContainer = styled(Container)`
display: none;
@media (min-width: 1070px) {
  display: flex;
}
& > * {
  margin-left: 20px;
}

`

const WhiteCircle = styled(Link)`
& > * {
  color: #2a45e2;
  margin-top: 7px;
}
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export default SocialLinks;