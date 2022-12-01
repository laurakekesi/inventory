import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Context } from '../Context';
import ItemCard from './ItemCard';

const Category = () => {
  const { alphabetize } = useContext(Context);
  const [categoryInventory, setCategoryInventory] = useState(null);
  const category = useParams().category;

  useEffect(() => {
    fetch(`/api/items/category/${category}`)
    .then((res) => res.json())
    .then((data)=>setCategoryInventory(data.data.sort(alphabetize)))
    .catch((err)=>console.log(err))
  }, [category])

  return categoryInventory?(
    <Wrapper>
      <ItemCatHeader>All {category} items</ItemCatHeader>
      <ItemCardWrapper>
        {categoryInventory.map((item) => {
          return (
            <ItemCard itemName = {item.itemName} itemQuantity = {item.itemQuantity} itemCategory = {item.itemCategory}/>
            )
        })}
      </ItemCardWrapper>
    </Wrapper>
  )
  : (
    <LoadingWrapper>
      <iframe src="https://giphy.com/embed/l3aMGM9Ez3ZzeCJIn5" width="280" height="176" frameBorder="0" allowFullScreen></iframe>
    </LoadingWrapper>
  )
}

const LoadingWrapper = styled.div`
display: flex;
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
`
const ItemCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
`;

const ItemCatHeader = styled.div`
font-family: var(--header-font-family);
width: 100%;
border-bottom: 1px black solid;
margin-bottom: 10px;
`
const Wrapper = styled.div`
  margin: 10vh 5vw;
  width: 100%;
`;
export default Category