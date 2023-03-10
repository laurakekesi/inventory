import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled, { keyframes } from "styled-components";
import { Context } from "../Context";

const UpdateModal = ({ itemName, itemQuantity, itemCategory, itemId }) => {

const {setInventoryAction, inventoryAction} = useContext(Context)

  const [show, setShow] = useState(false);
  const [itemNameNew, setItemName] = useState(itemName);
  const [itemQuantityNew, setItemQuantity] = useState(itemQuantity);
  const [itemCategoryNew, setItemCategory] = useState(itemCategory);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //sets new Item Category depending on selected value in the form.
  const itemCatChange = (e) => {
    setItemCategory(e.target.value);
  };

//depending on what information has been changed, corresponding patch will take place
//if itemQuantity is changed, it will patch the itemQuantity, as well as needToBuy 
    //(if < 2, sets to true)
    //(else, sets to false)
//then inventoryAction state is changed, allowing the homepage to reload
//then modal is closed
  const updateItemHandler = (e) => {
      e.preventDefault()
    if (itemNameNew !== itemName) {
      fetch(`/api/itemName/${itemId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemName: itemNameNew,
        }),
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));
    }
    if (itemQuantityNew !== itemQuantity) {
      fetch(`/api/itemQuantity/${itemId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemQuantity: itemQuantityNew,
        }),
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));

      if (itemQuantityNew < 2) {
        fetch(`/api/itemNeedToBuy/${itemId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            needToBuy: true,
          }),
        })
          .then((res) => res.json())
          .catch((err) => console.log(err));
      } else {
        fetch(`/api/itemNeedToBuy/${itemId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            needToBuy: false,
          }),
        })
          .then((res) => res.json())
          .catch((err) => console.log(err));
      }
    }
    if (itemCategoryNew !== itemCategory) {
      fetch(`/api/itemCategory/${itemId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemCategory: itemCategoryNew,
        }),
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));
    }
    setInventoryAction(!inventoryAction)
    handleClose()
  };

  return (
    <>
      <UpdateButton variant="primary" onClick={handleShow}>
        Update
      </UpdateButton>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered={true}
      >
        <Modal.Header closeButton style={{ backgroundColor: "#257df9" }}>
          <Modal.Title style={{ color: "white" }}>Update Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Label for="itemName">Item Name:</Label>
          <Form>
            <Input
              onChange={(e) => setItemName(e.target.value)}
              placeholder={itemName}
              id="itemName"
            ></Input>
            <Label for="itemQuantity">Item Quantity:</Label>
            {/* Makes sure that user can only select a number */}
            <Input
              onChange={(e) => setItemQuantity(e.target.value)}
              placeholder={itemQuantity}
              id="itemQuantity"
              type="number"
            ></Input>
            <Label for="itemCategory">Item Category:</Label>
            {/* Dropdown menu preventing user from updating to non-existing category */}
            <select
              name="itemCategory"
              id="itemCategory"
              onChange={itemCatChange}
            >
              <option value="" disabled selected hidden>
                {itemCategory}
              </option>
              <option value="Dairy">Dairy</option>
              <option value="Grains">Grains</option>
              <option value="Produce">Produce</option>
              <option value="Alcohol">Alcohol</option>
              <option value="Protein">Protein</option>
              <option value="Dry">Dry</option>
              <option value="Misc">Miscellaneous</option>
            </select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateItemHandler}>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
const backgroundChange = keyframes`
from {
    background-color: rgba(247, 153, 178, 0.2);
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
const UpdateButton = styled.button`
  width: 50%;
  height: 40px;
  background-color: rgba(247, 153, 178, 0.2);
  border-radius: 10px;
  font-family: var(--header-font-family);
  font-size: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    animation: ${backgroundChange} 0.3s, ${fontChange} 0.3s;
    animation-fill-mode: forwards;
  }
`;

const Input = styled.input``;
const Label = styled.label`
  margin: 5px 0px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default UpdateModal;
