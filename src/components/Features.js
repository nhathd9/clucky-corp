import React from 'react';
import styled from 'styled-components';
import { RegularText, LightText } from '../reusable-components/TextStyles';
import { Container } from '../reusable-components/Containers';
import { FiUsers, FiInbox, FiPrinter } from 'react-icons/fi';
import { AiOutlinePicture } from 'react-icons/ai';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { IoMdSettings } from 'react-icons/io';

const featuresIcon = [
    {
        icon: <FiUsers size={40}/>,
        animation: 'translateYDown 500ms ease-out forwards'
    },
    {
        icon: <AiOutlinePicture size={40}/>,
        animation: 'translateYDown 700ms ease-out forwards'
    },
    {
        icon: <FiInbox size={40}/>,
        animation: 'translateYDown 1000ms ease-out forwards'
    },
    {
        icon: <HiOutlineChatAlt2 size={40}/>,
        animation: 'translateYDown 600ms ease-out forwards'
    },
    {
        icon: <IoMdSettings size={40}/>,
        animation: 'translateYDown 800ms ease-out forwards'
    },
    {
        icon: <FiPrinter size={40}/>,
        animation: 'translateYDown 1100ms ease-out forwards'
    },
]

const Features = () => {
    return(
        <FeaturesSection 
            justifyContent='center' 
            width='100%' 
            padding='127px 0 0 0'
            flexWrap='wrap'
        >
            <CardContainer 
                justifyContent='space-evenly' 
                width='100%'
                flexWrap='wrap'
            >
            {
                featuresIcon.map(icon => (
                    <FeatureCard animation={icon.animation}>
                    {icon.icon}
                    <RegularText fontSize={20}>
                        MALESUADA FAMES TURPIS.
                    </RegularText>
                   <LightText> vel ultrices mauris libero id diam. vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit. </LightText>
                </FeatureCard>
                ))
            }
            </CardContainer>
        </FeaturesSection>
    );
}


const FeaturesSection = styled(Container)`
    background-image: linear-gradient(#00b0ff, #0030ff);
`


const CardContainer = styled(Container)`
    @media (min-width: 1536px) {
        width: 1500px;
    }
`

const FeatureCard = styled(Container)`
    display: block;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 350px;
    padding: 15px;
    margin: 0 0 80px;
    color: #ffffff;
    p {
        color: #ffffff;
    }
`

export default Features;