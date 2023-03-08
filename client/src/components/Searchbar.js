import React, { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Context } from "../Context";
import { TbSearch } from "react-icons/tb";
import ItemCard from "./ItemCard";

const Searchbar = () => {
  const { allInventory } = useContext(Context);
  const [value, setValue] = useState("");
  const [matchedItems, setMatchedItems] = useState("");

  useEffect(() => {
    setMatchedItems(
      allInventory.filter((item) =>
        item.itemName.toLowerCase().includes(value.toLowerCase())
      )
    );
  }, [value]);

  return allInventory ? (
    <Wrapper>
      <InputWrapper>
        <TbSearch fontSize={20} />
        <InputBox
          type="text"
          onChange={(ev) => setValue(ev.target.value)}
          value={value}
        ></InputBox>
        <ClearButton onClick={() => setValue("")}>x</ClearButton>
      </InputWrapper>
      <div>
        {value.length > 1 ? (
          <SearchResults>
            {matchedItems.map((item, index) => (
              <ItemCard
                itemName={item.itemName}
                itemQuantity={item.itemQuantity}
                itemCategory={item.itemCategory}
                key={`item-${index}`}
              />
            ))}
          </SearchResults>
        ) : (
          ""
        )}
      </div>
    </Wrapper>
  ) : (
    <div>Loading...</div>
  );
};

export default Searchbar;

const fontChange = keyframes`
from {
  color: white
}
to {
color: black;
}
`;

const SearchResults = styled.div`
  display: flex;
  width: 80vw;
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
  color: white;
  &:hover {
    animation: ${fontChange} 0.3s;
    animation-fill-mode: forwards;
  }
`;
const InputBox = styled.input`
  border: none;
  height: 23px;
  width: 80%;
  &:focus {
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
`;
const Wrapper = styled.div`
  width: 30%;
`;
