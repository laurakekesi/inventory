import React, { useState } from 'react'
import styled from 'styled-components'
import { TbApple, TbSausage, TbCheese, TbBread, TbMilk, TbGlass, TbCircles, TbHome } from "react-icons/tb";
import ItemCardContent from './ItemCardContent';


const ItemCard = ({itemName, itemQuantity, itemCategory}) => {

    // Main Wrapper
    // TopDiv: category icon, eventually option to add photo
    // MiddleDiv: itemName, itemQuantity
    // BottomDiv: update item button (popup update cat, quant, or name), delete item button
return (
<Wrapper>
    <TopDiv>
        <ItemCardContent itemCategory={itemCategory}/>
    </TopDiv>
    <MiddleDiv>
        <div>{itemName}</div>
        <div>{itemQuantity}</div>
    </MiddleDiv>
</Wrapper>
)
}

const TopDiv = styled.div`
height: 30%;
display: flex;
justify-content: center;
align-items: center;
padding-top: 10px;
`
const MiddleDiv = styled.div`
`
const BottomDiv = styled.div`
`
const Wrapper = styled.div`
height: 40vh;
width: 15vw;
margin: 10px;
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
background-color: rgba(255, 255, 255, 0.2);
`
export default ItemCard