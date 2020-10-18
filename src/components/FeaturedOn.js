import React from 'react';
import styled from 'styled-components';
import { Container } from '../reusable-components/Containers';
import google from '../img/google_logo.png';
import facebook from '../img/facebook_logo.png';
import yahoo from '../img/yahoo_logo.png';
import paypal from '../img/paypal_logo.png';

const logos = [
    {
        image: <img src={google} alt='google' />,
        animation: 'translateYDown 500ms ease-out forwards'
    },
    {
        image: <img src={facebook} alt='facebook' />,
        animation: 'translateYDown 700ms ease-out forwards'
    },
    {
        image: <img src={yahoo} alt='yahoo' />,
        animation: 'translateYDown 1000ms ease-out forwards'
    },
    {
        image: <img src={paypal} alt='paypal' />,
        animation: 'translateYDown 1200ms ease-out forwards'
    }
]

const Featured = () => {
    return(
            <FeaturedContainer 
                justifyContent='space-evenly'
                flexWrap='wrap'
                width='100%'
                padding='25px 0'
            >
                {
                    logos.map(logo => (
                        <Container animation={logo.animation}>
                            {logo.image}
                        </Container>
                    ))
                }
            </FeaturedContainer>
    );
}

const FeaturedContainer = styled(Container)`
@media (max-width: 630px) {
    * {
        margin: 10px 50px;
    }
}
	background: #f3f3f3;
`
export default Featured;