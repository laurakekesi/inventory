import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TbApple, TbSausage, TbCheese, TbBread, TbMilk, TbGlass, TbCircles, TbHome } from "react-icons/tb";

const Navbar = () => {
  return (
    <Wrapper>
      <PageLink to="/"><TbHome/></PageLink>
      <PageLink to="/category/Produce"><TbApple/></PageLink>
      <PageLink to="/category/Protein"><TbSausage/></PageLink>
      <PageLink to="/category/Dairy"><TbCheese/></PageLink>
      <PageLink to="/category/Grains"><TbBread/></PageLink>
      <PageLink to="/category/Dry"><TbMilk/></PageLink>
      <PageLink to="/category/Alcohol"><TbGlass/></PageLink>
      <PageLink to="/category/Misc"><TbCircles/></PageLink>
    </Wrapper>
  )
}

const PageLink = styled(Link)`
font-size: 40px;
text-decoration: none;
color: black;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
background-color: rgba(247, 153, 178, 0.4);
width: 50px;
`



export default Navbar