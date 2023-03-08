import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled, {keyframes} from 'styled-components';

const UpdateModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Update item info
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
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

export default UpdateModal;