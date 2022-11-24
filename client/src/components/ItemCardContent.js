import React from 'react'

const ItemCardContent = ({itemName, itemQuantity, itemCategory}) => {
  return (
      <>
    <div>{itemName}</div>
    <div>{itemQuantity}</div>
    </>
  )
}

export default ItemCardContent