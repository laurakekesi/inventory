import React from 'react';
import { TbApple, TbSausage, TbCheese, TbBread, TbMilk, TbGlass, TbCircles} from "react-icons/tb";
import styled from 'styled-components';

const ItemCardContent = ({itemName, itemQuantity, itemCategory}) => {

  if (itemCategory === "Produce"){
    return(
      <IconDiv><TbApple color='#6fba59'/></IconDiv>
    )
  }
  else if (itemCategory === "Protein"){
    return(
      <IconDiv><TbSausage color='#ea3f3f'/></IconDiv>
    )    
  }
  else if (itemCategory === "Dairy"){
    return(
      <IconDiv><TbCheese color='#ff9d00'/></IconDiv>
    )    
  }
  else if (itemCategory === "Grains"){
    return(
      <IconDiv><TbBread color='#fcd63c'/></IconDiv>
    )    
  }
  else if (itemCategory === "Dry"){
    return(
      <IconDiv><TbMilk color='#9b6839'/></IconDiv>
    )    
  }
  else if (itemCategory === "Alcohol"){
    return(
      <IconDiv><TbGlass color='794baa'/></IconDiv>
    )    
  }
  else {
    return(
      <IconDiv><TbCircles color='#619be2'/></IconDiv>
    )
  }
}

const IconDiv = styled.div`
font-size: 60px;
`

export default ItemCardContent