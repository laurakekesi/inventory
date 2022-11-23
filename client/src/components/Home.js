import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import ItemCard from './ItemCard';

const Home = () => {
const [allInventory, setAllInventory] = useState(null);
const alphabetizedInventoryArray = [];

useEffect(()=> {
fetch("/api/items")
.then((res)=>res.json())
.then((data)=>setAllInventory(data.data))
.catch((err)=>console.log(err))
}, [])

if (allInventory){

const alphabetizeInventory = () => {
  allInventory.map((item) => {
    alphabetizedInventoryArray.push(item.itemName)
  });
  alphabetizedInventoryArray.sort();
  console.log(alphabetizedInventoryArray)

}

alphabetizeInventory();
}

// Search bar component at top
// Search bar on click scrolls to item on page
// Need to buy items 
// All items rendered in cards, alphabetically
// Each card has colour depending on category, number, update, delete buttons
// Able to take a picture for items, otherwise icon?

  return (
    allInventory 
    ?<Wrapper>
    <div>All items</div>
    {allInventory.map((item)=>{
 
      return(
        <itemWrapper>
          <ItemCard itemName = {item.itemName} itemQuantity = {item.itemQuantity} itemCategory = {item.itemCategory}/>
        </itemWrapper>
      )
    })}
    </Wrapper>
    :<div>Loading</div>
    
  )
}

const Wrapper = styled.div`
margin: 10vh 5vw;
`

const itemWrapper = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
`
export default Home