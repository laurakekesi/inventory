import React, { useState } from 'react'
import styled from 'styled-components'
import ItemCardContent from './ItemCardContent'

const ItemCard = ({itemName, itemQuantity, itemCategory}) => {

if (itemCategory === "Grains"){ 
    return (
    <Wrapper>
        <GrainsDiv>
            <ItemCardContent itemName={itemName} itemQuantity={itemQuantity} itemCategory={itemCategory}/>
        </GrainsDiv>
    </Wrapper>
    )
}
else if (itemCategory === "Dairy"){
    return (
    <Wrapper>
        <DairyDiv>
            <ItemCardContent itemName={itemName} itemQuantity={itemQuantity} itemCategory={itemCategory}/>
        </DairyDiv>
    </Wrapper>
    )
}
else if (itemCategory === "Produce"){
    return (
    <Wrapper>
        <ProduceDiv>
            <ItemCardContent itemName={itemName} itemQuantity={itemQuantity} itemCategory={itemCategory}/>
        </ProduceDiv>
    </Wrapper>
    )
}
else if (itemCategory === "Protein"){
    return (
    <Wrapper>
        <ProteinDiv>
            <ItemCardContent itemName={itemName} itemQuantity={itemQuantity} itemCategory={itemCategory}/>
        </ProteinDiv>
    </Wrapper>
    )
}
else if (itemCategory === "Dry"){
    return (
    <Wrapper>
        <DryDiv>
            <ItemCardContent itemName={itemName} itemQuantity={itemQuantity} itemCategory={itemCategory}/>
        </DryDiv>
    </Wrapper>
    )
}
else if (itemCategory === "Alcohol"){
    return (
    <Wrapper>
        <AlcoholDiv>
            <ItemCardContent itemName={itemName} itemQuantity={itemQuantity} itemCategory={itemCategory}/>
        </AlcoholDiv>
    </Wrapper>
    )
}
else {
    return(
    <Wrapper>
        <MiscDiv>
            <ItemCardContent itemName={itemName} itemQuantity={itemQuantity} itemCategory={itemCategory}/>
        </MiscDiv>
    </Wrapper>
    )
}
}

const MiscDiv = styled.div`
background-color: orange;
height: 100%;
width: 100%;
`
const AlcoholDiv = styled.div`
background-color: pink;
height: 100%;
width: 100%;
`
const DryDiv = styled.div`
background-color: purple;
height: 100%;
width: 100%;
`
const GrainsDiv = styled.div`
background-color: yellow;
height: 100%;
width: 100%;
`
const ProduceDiv = styled.div`
background-color: green;
height: 100%;
width: 100%;
`
const ProteinDiv = styled.div`
background-color: red;
height: 100%;
width: 100%;
`
const DairyDiv = styled.div`
background-color: blue;
height: 100%;
width: 100%;
`
const Wrapper = styled.div`
border: solid black 1px;
height: 20vh;
width: 15vw;
margin: 10px;
`
export default ItemCard