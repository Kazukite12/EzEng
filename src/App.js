import React,{useState} from "react";
import { HashRouter,Routes,Route, Link } from 'react-router-dom'
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
<HashRouter>
  <Background />
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Screen1" element={<Screen1/>}/>
    <Route path="/Screen2" element={<Screen2/>}/>
    <Route path="/Screen3" element={<Screen3/>}/>
    <Route path="/Screen4" element={<Screen4/>}/>
    <Route path="/Card" element={<Card/>}/>
    <Route path="/Quizz" element={<Quizz/>}/>
    <Route path="*" element={<Error/>}/>
  </Routes>
</HashRouter>
 ) 
}

export default App;