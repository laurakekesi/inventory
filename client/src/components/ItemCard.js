import React from 'react';
import styled, { keyframes } from 'styled-components';
import ItemCardIcon from './ItemCardIcon';
import { TbTrash } from "react-icons/tb";



const ItemCard = ({itemName, itemQuantity, itemCategory}) => {

    // Main Wrapper
    // TopDiv: category icon, eventually option to add photo
    // MiddleDiv: itemName, itemQuantity
    // BottomDiv: update item button (popup update cat, quant, or name), delete item button
return (
<Wrapper>
    <TopDiv>
        <ItemCardIcon itemCategory={itemCategory}/>
    </TopDiv>
    <MiddleDiv>
        <ItemDescriptor>ITEM NAME</ItemDescriptor>
        <ItemInfo>{itemName}</ItemInfo>
        <ItemDescriptor>QUANTITY</ItemDescriptor>
        <ItemInfo>{itemQuantity}</ItemInfo>
    </MiddleDiv>
    <BottomDiv>
        <UpdateButton>Update</UpdateButton>
        <TrashButton><TbTrash/></TrashButton>
    </BottomDiv>
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

const fontSizeChange = keyframes`
from {
font-size: 15px;
}
to {
font-size: 17px;
}
`

const TrashButton = styled.button`
border: none;
background: none;
cursor: pointer;
font-size: 15px;
margin-top: 5px;

&:hover{
    animation: ${fontSizeChange} 0.3s;
    animation-fill-mode: forwards;
}
`
const UpdateButton = styled.button`
width: 50%;
height: 40px;
background-color: rgba(247, 153, 178, 0.4);
border-radius: 10px;
font-family: var(--header-font-family);
font-size: 16px;
border: none;
cursor: pointer;

&:hover{
  animation: ${backgroundChange} 0.3s,
    ${fontChange} 0.3s;
    animation-fill-mode: forwards;
}
`
const ItemDescriptor = styled.div`
font-size: 17px;
margin-bottom: 2px;
font-family: var(--header-font-family);
color: black;
`
const ItemInfo = styled.div`
font-size: 17px;
margin-bottom: 15px;
color: black;
`
const TopDiv = styled.div`
height: 30%;
display: flex;
justify-content: center;
align-items: center;
padding-top: 10px;
`
const MiddleDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const BottomDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
height: 40vh;
width: 15vw;
margin: 10px;
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
/* box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px; */
background-color: rgba(255, 255, 255, 0.2);
color: grey;
`
export default ItemCard