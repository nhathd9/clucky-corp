import React from 'react';
import styled from 'styled-components';
import { Container } from '../../reusable-components/Containers';
import { RegularText } from '../../reusable-components/TextStyles';
import { AiOutlineCamera, AiOutlineEye, AiOutlinePicture } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsCameraVideo } from 'react-icons/bs';

const DescriptionListArray = [
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

const DescriptionList = () => {
    return(
            DescriptionListArray.map(list => (
                <Features flexDirection='row' margin='10px 0 0 0'>
                    {
                    list.icon
                    }   
                    <RegularText>{list.text}</RegularText> 
                </Features>
            ))
    );
}

const Features = styled(Container)`
    * {
        margin-top: 4px;
    }
    p {
        margin: 0 0 0 10px;
    }
    @media (max-width: 680px) {
        margin-left: 5%;
        text-align: left;
    }
`

export default DescriptionList;