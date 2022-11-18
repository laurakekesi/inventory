import React, { useEffect, useState } from 'react'

const Home = () => {
const [allInventory, setAllInventory] = useState(null);

useEffect(()=> {
fetch("/api/items")
.then((res)=>res.json())
.then((data)=>setAllInventory(data.data))
.catch((err)=>console.log(err))
}, [])

  return (
    allInventory 
    ?<div>Home</div>
    :<div>Loading</div>
    
  )
}

export default Home