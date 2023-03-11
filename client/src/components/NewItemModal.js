import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled, { keyframes } from "styled-components";
import { Context } from "../Context";

const NewItemModal = () => {
  const { setInventoryAction, inventoryAction } = useContext(Context);

  const [show, setShow] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemCategory, setItemCategory] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//   sets item category whenever a new one is selected
  const itemCatChange = (e) => {
    setItemCategory(e.target.value);
  };

// posts new item on submit, then toggles inventoryAction in Context to trigger dependancy array
// which will re-fetch allInventory and needToBuy on homefeed.
  const postNewItem = (e) => {
      e.preventDefault();
    fetch('/api/newItem', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            itemName: itemName,
            itemCategory: itemCategory,
            itemQuantity: itemQuantity
        })
    })
    .then((res) => res.json())
    .catch((err) => console.log(err))
    handleClose();
    setInventoryAction(!inventoryAction)

  }

  return (
    <>
      <AddButton variant="primary" onClick={handleShow}>
        +
      </AddButton>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered={true}
      >
        <Modal.Header closeButton style={{ backgroundColor: "#257df9" }}>
          <Modal.Title style={{ color: "white" }}>New Item</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Column>
              <Label for="itemName">Item Name:</Label>
              <Input
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Item Name"
                id="itemName"
                required
              ></Input>
              <Label for="itemQuantity">Item Quantity:</Label>
              {/* Makes sure that user can only select a number */}
              <Input
                onChange={(e) => setItemQuantity(e.target.value)}
                placeholder="Item Quantity"
                id="itemQuantity"
                type="number"
                min="0"
                required
              ></Input>
              <Label for="itemCategory">Item Category:</Label>
              {/* Dropdown menu preventing user from updating to non-existing category */}
              <select
                name="itemCategory"
                id="itemCategory"
                onChange={itemCatChange}
                required
              >
                <option value="" disabled selected hidden>
                  Select Item Category
                </option>
                <option value="Dairy">Dairy</option>
                <option value="Grains">Grains</option>
                <option value="Produce">Produce</option>
                <option value="Alcohol">Alcohol</option>
                <option value="Protein">Protein</option>
                <option value="Dry">Dry</option>
                <option value="Misc">Miscellaneous</option>
              </select>
            </Column>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

            <Button variant="primary" type="submit" onClick={postNewItem}>
              Add Item
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input``;
const Label = styled.label`
  margin: 5px 0px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const backgroundChange = keyframes`
from {
    background-color: none;
}
to {
  background-color: rgba(71, 232, 87, 0.7);
}
`;
const borderChange = keyframes`
from {
  border: 2px rgb(71, 232, 87) solid;
}
to {
  border: 2px white solid;
}
`;

const fontChange = keyframes`
from {
  color: rgb(71, 232, 87)
}
to {
color: white;
}
`;

const AddButton = styled.button`
  background-color: beige;
  color: rgb(71, 232, 87);
  border: 2px rgb(71, 232, 87) solid;
  float: right;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  padding-top: 2px;
  font-family: var(--header-font-family);
  font-size: 30px;
  cursor: pointer;

  &:hover {
    animation: ${backgroundChange} 0.3s, ${fontChange} 0.3s,
      ${borderChange} 0.3s;
    animation-fill-mode: forwards;
  }
`;

export default NewItemModal;
