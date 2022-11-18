import React,{useState} from "react";
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import Home from './Component/Home';
import Screen2 from "./Component/Screen2";
import Screen1 from "./Component/Screen1";
import Error from "./Component/Error";
import Card from "./Component/Card";
import Screen3 from "./Component/Screen3";
import Screen4 from "./Component/Screen4";
import Background from "./Component/Background";
import Quizz from "./Component/Quizz";

const App =()=> {

 return(
<BrowserRouter>
  <Background />

  
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Background" element={<Background/>}/>
    <Route path="/Screen1" element={<Screen1/>}/>
    <Route path="/Screen2" element={<Screen2/>}/>
    <Route path="/Screen3" element={<Screen3/>}/>
    <Route path="/Screen4" element={<Screen4/>}/>
    <Route path="/Card" element={<Card/>}/>
    <Route path="/Quizz" element={<Quizz/>}/>
    <Route path="*" element={<Error/>}/>
  </Routes>
</BrowserRouter>
 ) 
}

export default App;