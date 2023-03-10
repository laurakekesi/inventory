import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled, { keyframes } from "styled-components";

const UpdateModal = ({ itemName, itemQuantity, itemCategory, itemId }) => {
  const [show, setShow] = useState(false);
  const [itemNameOriginal, setItemName] = useState(itemName);
  const [itemQuantityOriginal, setItemQuantity] = useState(itemQuantity);
  const [itemCategoryOriginal, setItemCategory] = useState(itemCategory);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //sets new Item Category depending on selected value in the form.
  const itemCatChange = (e) => {
    setItemCategory(e.target.value);
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
            <Input
              onChange={(e) => setItemQuantity(e.target.value)}
              placeholder={itemQuantity}
              id="itemQuantity"
              type="number"
            ></Input>
            <Label for="itemCategory">Item Category:</Label>
            <select name="itemCategory" id="itemCategory" onChange={itemCatChange}>
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
          <Button variant="primary">Update</Button>
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
