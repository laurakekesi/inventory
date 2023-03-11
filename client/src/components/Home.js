import React, { useContext, useEffect, useState } from "react";
import styled, {keyframes} from "styled-components";
import { Context } from "../Context";
import ItemCard from "./ItemCard";
import Searchbar from "./Searchbar";
import NewItemModal from "./NewItemModal";
import Spinner from 'react-bootstrap/Spinner';

const Home = () => {
  const { alphabetize, allInventory, inventoryAction} = useContext(Context);
  const [needToBuy, setNeedToBuy] = useState(null);

  useEffect(() => {
  fetch("/api/items/needToBuy")
  .then((res) => res.json())
  .then((data) => setNeedToBuy(data.data.sort(alphabetize)))
  .catch((err) => console.log(err))
  }, [inventoryAction])

  return allInventory && needToBuy? (
    <>
      <Wrapper>
        <Header>Search</Header>
        <SearchDiv>
          <Searchbar/>
        </SearchDiv>
        <Header>Running Low</Header>
        <NeedToBuy>
          {needToBuy.map((item, index) => {
            return (
              <ol index = {index}>{item.itemName} ({item.itemQuantity} left)</ol>
            )
          })}
        </NeedToBuy>
        <Header>
          All Items (a-z)
          
        </Header>
<NewItemModal/>
        <ItemCardWrapper>
          {allInventory.map((item, index) => {
            return (
              <ItemCard
                itemName={item.itemName}
                itemQuantity={item.itemQuantity}
                itemCategory={item.itemCategory}
                itemId={item._id}
                key = {`item-${index}`}
              />
            );
          })}
        </ItemCardWrapper>
      </Wrapper>
    </>
  ) : (
    <LoadingWrapper>
      <Spinner animation="grow" variant="danger"  style={{margin: "20px"}}/>
      <Spinner animation="grow" variant="warning" style={{margin: "20px"}}/>
      <Spinner animation="grow" variant="info" style={{margin: "20px"}}/>
    </LoadingWrapper>
  );
};

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
`

const fontChange = keyframes`
from {
  color: rgb(71, 232, 87)
}
to {
color: white;
}
`;
const SearchDiv = styled.div`
padding-bottom: 15px;
`
const NeedToBuy = styled.div`
margin-bottom: 20px;
`
const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
const Header = styled.div`
  font-family: var(--header-font-family);
  width: 100%;
  border-bottom: 1px black solid;
  margin-bottom: 15px;
`;
const Wrapper = styled.div`
  margin: 10vh 5vw;
`;

const ItemCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  justify-content: center;
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
    animation: ${backgroundChange} 0.3s, ${fontChange} 0.3s, ${borderChange} 0.3s;
    animation-fill-mode: forwards;
  }
`;


export default Home;
