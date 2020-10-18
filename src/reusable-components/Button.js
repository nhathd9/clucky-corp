import styled from 'styled-components'; 

const Button = styled.a`
    display: flex;
    flex-direction: row;
    color: #525252;
    border 2px solid #525252;
    text-decoration: none;
    transition: all 0.5s;
    p {
        margin: 0;
        margin-left: 10px;
        transition: color 0.5s;
    }

    @media (max-width: 689px) {
        margin-right: 5px;
        margin-left: 5px;
    }

    &:hover {
        border-color: #00b0ff;
        color: #00b0ff;

        p {
            color: #00b0ff;
        };
       
    }
`

export default Button;