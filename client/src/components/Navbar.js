import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { TbApple, TbSausage, TbCheese, TbBread, TbMilk, TbGlass, TbCircles, TbHome } from "react-icons/tb";

const Navbar = () => {
  return (
    <Wrapper>
      <NavWrapper>
      <PageLink to="/"><TbHome/></PageLink>
      <PageLink to="/category/Produce"><TbApple/></PageLink>
      <PageLink to="/category/Protein"><TbSausage/></PageLink>
      <PageLink to="/category/Dairy"><TbCheese/></PageLink>
      <PageLink to="/category/Grains"><TbBread/></PageLink>
      <PageLink to="/category/Dry"><TbMilk/></PageLink>
      <PageLink to="/category/Alcohol"><TbGlass/></PageLink>
      <PageLink to="/category/Misc"><TbCircles/></PageLink>
      </NavWrapper>
    </Wrapper>
  )
}


const backgroundChange = keyframes`
from {
  background-color: rgba(247, 153, 178, 0.4);
}
to {
  background-color: rgba(247, 153, 178, 0.7);
}
`;

const fontChange = keyframes`
from {
  color: black
}
to {
color: white;
}
`;

const slideRight = keyframes`
from {
  transform: translateX(-100%)
}
to {
  transform: translateX(+100%)
}
`

const PageLink = styled(Link)`
font-size: 50px;
text-decoration: none;
color: black;
width: 100%;
text-align: center;
margin-top: 10px;
padding-top: 5px;


&:hover{
  animation: ${backgroundChange} 0.5s,
    ${fontChange} 0.5s;
    border-radius: 40%;
    animation-fill-mode: forwards;

}
`
const NavWrapper = styled.div`
display: flex;
flex-direction: column;
background-color: rgba(247, 153, 178, 0.4);
width: 55px;
height: 100vh;
align-items: center;
justify-content: center;
transform: translateX(-100%);
`
const Wrapper = styled.div`

&:hover{
  animation: ${slideRight} 0.5s;
  animation-fill-mode: forwards;
}
`



export default Navbar