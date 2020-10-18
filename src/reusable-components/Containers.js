import styled from 'styled-components'; 

const Container = styled.div`
    display: flex;
    text-align: ${(props) => props.textAlign || ''};
    flex-direction: ${(props) => props.flexDirection || ''};
    justify-content: ${(props) => props.justifyContent || ''};
    width: ${(props) => props.width || ''};
    height: ${(props) => props.height || ''};
    margin: ${(props) => props.margin || ''};
    padding: ${(props) => props.padding || ''};
    flex-wrap: ${(props) => props.flexWrap || ''};
    animation: ${(props) => props.animation || ''}; 
`

const Link  = styled.a`
    display: flex;
    text-decoration: none;
    text-align: ${(props) => props.textAlign || ''};
    flex-direction: ${(props) => props.flexDirection || ''};
    justify-content: ${(props) => props.justifyContent || ''};
    width: ${(props) => props.width || ''};
    height: ${(props) => props.height || ''};
    margin: ${(props) => props.margin || ''};
    padding: ${(props) => props.padding || ''};
    flex-wrap: ${(props) => props.flexWrap || ''};
    animation: ${(props) => props.animation || ''}; 
`


export { Container, Link };