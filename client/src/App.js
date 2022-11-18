import {BrowserRouter, Routes, Route} from "react-router-dom";
import Globalstyles from "./styles/Globalstyles";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Category from "./components/Category";



const App = () => {
  return(
    <BrowserRouter>
    <Globalstyles/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:category' element={<Category/>}/>
    </Routes>
    </BrowserRouter>
  );
}


export default App;
