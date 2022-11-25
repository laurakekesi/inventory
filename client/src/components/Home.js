import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ItemCard from "./ItemCard";

const Home = () => {
  const [allInventory, setAllInventory] = useState(null);
  const [colour, setColour] = useState("blue");

  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      // alphabetizes allInventory
      .then((data) =>
        setAllInventory(
          data.data.sort(function (a, b) {
            const nameA = a.itemName.toUpperCase();
            const nameB = b.itemName.toUpperCase();
            // sort in an ascending order
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // names must be equal
            return 0;
          })
        )
      )
      .catch((err) => console.log(err));
  }, []);

  // Search bar component at top
  // Search bar on click scrolls to item on page
  // Need to buy items
  // All items rendered in cards, alphabetically
  // Each card has colour depending on category, number, update, delete buttons
  // Able to take a picture for items, otherwise icon?

  return allInventory ? (
    <Wrapper>
      <div>All items</div>
      <ItemCardWrapper>
        {allInventory.map((item) => {
          return(
              <ItemCard itemName = {item.itemName} itemQuantity = {item.itemQuantity} itemCategory = {item.itemCategory}/>
          )
        })}
      </ItemCardWrapper>
    </Wrapper>
  ) : (
    <div>Loading</div>
  );
};

const Wrapper = styled.div`
  margin: 10vh 5vw;
`;

const ItemCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
`;

const MiscDiv = styled.div`
  background-color: orange;
`;
const AlcoholDiv = styled.div`
  background-color: pink;
`;
const DryDiv = styled.div`
  background-color: purple;
`;
const GrainsDiv = styled.div`
  background-color: yellow;
`;
const ProduceDiv = styled.div`
  background-color: green;
`;
const ProteinDiv = styled.div`
  background-color: red;
`;
const DairyDiv = styled.div`
  background-color: blue;
`;
export default Home;
