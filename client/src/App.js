import {BrowserRouter, Routes, Route} from "react-router-dom";
import Globalstyles from "./styles/Globalstyles";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Category from "./components/Category";
import styled from "styled-components";

const App = () => {
  return(
    <BrowserRouter>
    <Globalstyles/>
    <Wrapper>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/category/:category' element={<Category/>}/>
    </Routes>
    </Wrapper>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
display: flex;
`

export default App;
