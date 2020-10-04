import React from 'react';
import styled from 'styled-components';
import google from '../img/google_logo.png';
import facebook from '../img/facebook_logo.png';
import yahoo from '../img/yahoo_logo.png';
import paypal from '../img/paypal_logo.png';


const Featured = () => {
    return(
        <FeaturedContainer>
            <img src={google} />
            <img src={facebook} />
            <img src={yahoo} />
            <img src={paypal} />
        </FeaturedContainer>
    );
}

const FeaturedContainer = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
@media (max-width: 630px) {
    * {
        margin: 0px 50px 0px 50px;
    }
}
    width: 100%;
    padding: 25px 0;
	background: #f3f3f3;
`
export default Featured;