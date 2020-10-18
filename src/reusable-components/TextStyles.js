import styled from 'styled-components';

const HeaderText = styled.h1`
    font-family: open_bold, Helvetica, Arial, sans-serif;
    font-size: ${(props) => props.fontSize || 34}px;
    text-align: ${(props) => props.textAlign || ''};
    color: ${(props) => props.color || '#525252'};
    margin: ${(props) => props.margin || ''};
`

const RegularText = styled.p`
    font-family: open_semibold, Helvetica, Arial, sans-serif;
    font-size: ${(props) => props.fontSize || 16}px;
    text-align: ${(props) => props.textAlign || ''};
    margin: ${(props) => props.margin || ''};
    color: ${(props) => props.color || '#6d6c6c'};
`

const LightText = styled.p`
    font-family: open_light, Helvetica, Arial, sans-serif;
    font-size: ${(props) => props.fontSize || 16}px;
    margin: ${(props) => props.margin || ''};
    text-align: ${(props) => props.textAlign || ''};
    line-height: ${(props) => props.lineHeight || ''}px;
    color: ${(props) => props.color || '#6d6c6c'};
`


export { HeaderText, RegularText, LightText };