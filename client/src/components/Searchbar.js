import React, { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Context } from "../Context";
import { TbSearch } from "react-icons/tb";

const Searchbar = () => {
  const { allInventory } = useContext(Context);
  const [value, setValue] = useState("");
  const [matchedItems, setMatchedItems] = useState("No items match your search...")


  // after 3 characters, if match, setMatchedItems?
  // else, initial message
  // have all matching cards show up?
  
  return allInventory ? (
    <Wrapper>
      <InputWrapper>
      <TbSearch fontSize={20}/>
      <InputBox
        type="text"
        onChange={(ev) => setValue(ev.target.value)}
        value={value}
      ></InputBox>
      <ClearButton onClick={() => setValue('')}>x</ClearButton>
      </InputWrapper>
      <div>{value.length>3? matchedItems : ""}</div>
    </Wrapper>
  ) : (
    <div>Loading...</div>
  );
};

export default Searchbar;

const fontChange = keyframes`
from {
  color: black
}
to {
color: white;
}
`;

const ClearButton = styled.button`
border: none;
height: 22px;
width: 22px;
background-color: rgba(255, 38, 0, 0.7);
border-radius: 50%;
cursor: pointer;
font-size: 15px;
padding: 0 0 1px 1px;
&:hover{
  animation: ${fontChange} 0.3s;
    animation-fill-mode: forwards;
}
`;
const InputBox = styled.input`
border: none;
height: 23px;
width: 80%;
&:focus{
  outline: none;
}
`;
const InputWrapper = styled.div`
background-color: white;
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 20px;
padding: 0 2px 0 3px;
border: 2px solid lightgray;
margin-bottom: 10px;
`
const Wrapper = styled.div`
width: 30%;
`;
