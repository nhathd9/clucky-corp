import React, {useState} from 'react';
import styled from 'styled-components';
import { RegularText } from '../reusable-components/TextStyles';
import { Container } from '../reusable-components/Containers';
import { FiMail, FiCheck } from 'react-icons/fi';
import loading from '../img/loading.gif';

const Email = () => {

const [ buttonLoad, setButtonLoad ] = useState(null)

const onButtonSubmit = () => {
    setButtonLoad('loading');
    setTimeout(onEmailRecieved, 3000);
}

const onEmailRecieved = () => {
    setButtonLoad('success');
}

    return(
        <EmailSection 
            padding='60px'
            justifyContent='center'  
        >
                <EmailContent 
                    flexDirection='column'
                    width='460px'
                >    
                <RegularText 
                    fontSize='20'
                    textAlign='center'
                    color='#ffffff'
                    margin='0 0 50px 0'
                >
                    We're hiring. Join our company!
                </RegularText>
                <EmailContent justifyContent='center'>
                    <EnterEmail type='text' placeholder='Enter your email' />
                    <SubmitEmail onClick={onButtonSubmit}>
                        {
                            buttonLoad === null 
                            ? <FiMail size={18}/>
                            : (
                                buttonLoad === 'loading'
                                ? <img src={loading} alt='loading'/>
                                : <FiCheck size={18} />
                            )
                        }
                    </SubmitEmail>
                </EmailContent>
            </EmailContent>
        </EmailSection>
        );
}


const EmailSection = styled(Container)`
    background-image: linear-gradient(#00b0ff, #0030ff);
`


const EmailContent = styled(Container)`
    @media(max-width: 759px) {
        width: 100%;
    }

`

const EnterEmail = styled.input`
    background-color: #ffffff;
    border: none;
    outline: none;
    height: 50px;
    width: 400px;
    padding: 0 20px;
    font-family: open_light, Helvetica, Arial, sans-serif;
    font-size: 14px;
`

const SubmitEmail = styled.button`
    border: none;
    outline: none;
    width: 60px;
    background-color: #ffffff;
    &:hover {
        cursor: pointer;
      }

    * {
        color: #126dff;
        margin-top: 3px;
    }
`


export default Email;