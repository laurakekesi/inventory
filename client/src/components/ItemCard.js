import React from 'react'
import styled from 'styled-components'
import ItemCardIcon from './ItemCardIcon';


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

    </BottomDiv>
</Wrapper>
)
}
const ItemDescriptor = styled.div`
font-size: 17px;
margin-bottom: 2px;
font-family: var(--header-font-family);
`
const ItemInfo = styled.div`
font-size: 17px;
margin-bottom: 15px;
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