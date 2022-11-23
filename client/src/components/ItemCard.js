import React from 'react'
import styled from 'styled-components'

const ItemCard = ({itemName, itemQuantity, itemCategory}) => {
  return (
    <Wrapper>
        <div>{itemName}</div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
border: solid black 1px;
height: 20vh;
width: 15vw;
margin: 10px;
`
export default ItemCard