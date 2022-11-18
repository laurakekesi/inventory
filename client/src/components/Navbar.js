import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper>
      <Link to="/category/Produce" element>Produce</Link>
      <Link to="/category/Protein">Protein</Link>
      <Link to="/category/Dairy">Dairy</Link>
      <Link to="/category/Grains">Grains</Link>
      <Link to="/category/Dry">Dry</Link>
      <Link to="/category/Alcohol">Alcohol</Link>
      <Link to="/category/Misc">Misc</Link>

    </Wrapper>
  )
}

const Wrapper = styled.div`
`

export default Navbar