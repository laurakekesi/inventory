import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Category = () => {
  const [categoryInventory, setCategoryInventory] = useState(null);
  const category = useParams().category;
  // console.log(category.category)

  useEffect(() => {
    fetch(`/api/items/category/${category}`)
    .then((res) => res.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
  }, [category])

  return (
    <div></div>
  )
}

export default Category