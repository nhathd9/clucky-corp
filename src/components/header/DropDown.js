import React from 'react';
import styled from 'styled-components';


const navContent = ['About', 'Support', 'News'];


const DropDown = () => {
    return(
    <DropDownContainer>
        <DropButton>MENU</DropButton>
        <DropDownContent>
        {
          navContent.map((link) => (
            <DropDownLink href='#'>{link}</DropDownLink>
          ))
        }
        </DropDownContent>
    </DropDownContainer>
    );
}


const DropDownContainer = styled.div`
  position: relative;
  z-index: 2;
  left: 85%;
  bottom: 100px;
  @media (max-width: 750px) {
    left: 75%;
  }
  display: inline-block;
  &:hover * {
    display: block;
  }
`

const DropButton = styled.div`
  display: none;
  background-color: #ffffff;
  color: #2a45e2;
  padding: 11px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  &:hover  {
    background-color: #ffffff;
    text-decoration: none;
  }
  @media (max-width: 1069px) {
    display: block;
  }
    `

const DropDownContent = styled.button`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  right: 0;
  left: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border: none;
  outline: none;
  animation: translateXToLeft 400ms ease-in-out forwards;
  transform-origin: top center;
`

const DropDownLink = styled.a`
  font-family: open_semibold;
  color: #2a45e2;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
  background-color: #f1f1f1;
  transition: background-color 0.5s;
}
`

export default DropDown;