import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "../Context";
import ItemCard from "./ItemCard";
import Searchbar from "./Searchbar";

const Home = () => {
  const { alphabetize, allInventory } = useContext(Context);
  const [needToBuy, setNeedToBuy] = useState(null);

  useEffect(() => {
  fetch("/api/items/needToBuy")
  .then((res) => res.json())
  .then((data) => setNeedToBuy(data.data.sort(alphabetize)))
  .catch((err) => console.log(err))
  }, [])

  // TO DO
  // Search bar component under need to buy. 
  // As typing, cards matching that item show up underneath? (maybe after 3 letters)
  // Able to take a picture for items, otherwise icon

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
        <Header>All Items (a-z)</Header>
        <ItemCardWrapper>
          {allInventory.map((item, index) => {
            return (
              <ItemCard
                itemName={item.itemName}
                itemQuantity={item.itemQuantity}
                itemCategory={item.itemCategory}
                key = {`item-${index}`}
              />
            );
          })}
        </ItemCardWrapper>
      </Wrapper>
    </>
  ) : (
    <LoadingWrapper>
      <iframe
        src="https://giphy.com/embed/l3aMGM9Ez3ZzeCJIn5"
        width="280"
        height="176"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </LoadingWrapper>
  );
};

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

export default Home;
