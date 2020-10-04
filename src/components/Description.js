import React from 'react';
import styled from 'styled-components';
import iphone from '../img/i.png';
import { HeaderText, RegularText } from './TextStyles';
import { AiOutlineCamera, AiOutlineEye, AiOutlinePicture } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsCameraVideo } from 'react-icons/bs';

const listArray = [
    {
        text: 'Euismod ligula ipsum vulputate tellus.', 
        icon: <AiOutlineCamera size={25}/>
    },
    {
        text: 'Morbi non efficitur nibh sit amet est eros.', 
        icon: <BsCameraVideo size={25}/>
    },
    {
        text: 'Fusce faucibus ante liberonec luctus egestas.', 
        icon: <AiOutlineEye size={25}/>
    },
    {
        text: 'Quisque pretium malesuada ornare.', 
        icon: <AiOutlinePicture size={25}/>
    },
    {
        text: 'Cras interdum vestibulum dolor.', 
        icon: <HiOutlineLocationMarker size={25} />
    }
]

const Description = () => {
    return(
        <DescriptionContainer>
            <ImageContainer><img src={iphone} /></ImageContainer>
            <List>
                <HeaderText>THE GREATEST PRODUCTS EVER CREATED</HeaderText>
                <p>
                    Seuismod ligula ipsum vulputate tellus quisque dictum tortor at purus faucibus tincidunt, 
                    pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
                    {
                    listArray.map(list => (
                        <ListContent>
                            {
                            list.icon
                            }   
                            <RegularText>{list.text}</RegularText> 
                        </ListContent>
                    ))
                    }

            </List>
        </DescriptionContainer>
    );
}

const DescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 5%;
`

const ImageContainer = styled.div`
    margin-right: 5%;
`

const List = styled.div`
    display: flex;
    flex-direction: column;
    color: #6d6c6c;
    width: 565px;
    margin-top: 30px;
    * {
        margin-top: 5px;
    }
    p {
        line-height: 35px;
        margin: 30px 0 45px 0;
    }
    @media (max-width: 680px) {
        justify-content: center;
        text-align: center;
    }
`

const ListContent = styled.div`
    display: flex;
    flex-direction: row;
    p {
        margin: 0 0 0 10px;
    }
    @media (max-width: 680px) {
        margin-left: 5%;
        text-align: left;
    }
`

export default Description;