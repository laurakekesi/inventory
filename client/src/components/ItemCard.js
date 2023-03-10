import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import ItemCardIcon from "./ItemCardIcon";
import { TbTrash } from "react-icons/tb";
import UpdateModal from "./UpdateModal";
import { Context } from "../Context";

const ItemCard = ({ itemName, itemQuantity, itemCategory, itemId }) => {
  const { setInventoryAction, inventoryAction } = useContext(Context);

  //deletes item, used on TrashButton
  const deleteItem = (e) => {
    e.preventDefault();
    fetch(`/api/item/${itemId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(setInventoryAction(!inventoryAction))
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      <TopDiv>
        <ItemCardIcon itemCategory={itemCategory} />
      </TopDiv>
      <MiddleDiv>
        <ItemDescriptor>ITEM NAME</ItemDescriptor>
        <ItemInfo>{itemName}</ItemInfo>
        <ItemDescriptor>QUANTITY</ItemDescriptor>
        <ItemInfo>{itemQuantity}</ItemInfo>
      </MiddleDiv>
      <BottomDiv>
        <UpdateModal
          itemName={itemName}
          itemQuantity={itemQuantity}
          itemCategory={itemCategory}
          itemId={itemId}
          key={`item-${itemId}`}
        />
        <TrashButton onClick={deleteItem}>
          <TbTrash />
        </TrashButton>
      </BottomDiv>
    </Wrapper>
  );
};

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
`;

const TrashButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 15px;
  margin-top: 5px;

  &:hover {
    animation: ${fontSizeChange} 0.3s;
    animation-fill-mode: forwards;
  }
`;

const ItemDescriptor = styled.div`
  font-size: 17px;
  margin-bottom: 2px;
  font-family: var(--header-font-family);
  color: black;
`;
const ItemInfo = styled.div`
  font-size: 17px;
  margin-bottom: 15px;
  color: black;
`;
const TopDiv = styled.div`
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;
const MiddleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  height: 40vh;
  width: 15vw;
  margin: 10px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-image: linear-gradient(
    rgba(250, 179, 197, 0.2),
    rgba(255, 255, 255, 0.2)
  );
  color: grey;
`;
export default ItemCard;
