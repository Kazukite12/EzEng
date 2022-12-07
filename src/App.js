import React,{useState,} from "react";
import { HashRouter,Routes,Route } from 'react-router-dom'
import Home from './Component/Home';
import Screen2 from "./Component/Screen2";
import Screen1 from "./Component/Screen1";
import Error from "./Component/Error";
import Card from "./Component/Card";
import Card1 from "./Component/Card1";
import Screen3 from "./Component/Screen3";
import Screen4 from "./Component/Screen4";
import Screen5 from "./Component/Screen5";
import Screen6 from "./Component/Screen6";
import Background from "./Component/Background";
import Quizz from "./Component/Quizz";
import Quizz1 from "./Component/Quizz1";
import Quizz2Result from "./Component/Quizz2Result";
import sfx from "./Asset/sfx.mp3";
import Info from "./Component/info";
import Bquizz from "./Component/BeforeQuizz";
import Bquizz1 from "./Component/BeforeQuizz1";
import song from "./Asset/song.mp3"
import AudioNav from "./Component/audio";
import Video from "./Component/Video";
import Video1 from "./Component/Video1";



const App =()=> {


  

function play() {
  var audioSfx = document.getElementById("sfx");
    audioSfx.play();
}

function muteSfx() {
  var audioSfx = document.getElementById("sfx");
  if(audioSfx.muted) {
    audioSfx.muted = false ;
  } else {
    audioSfx.muted = true;
  }
}


function playMusic() {
  var audio = document.getElementById("music");
    audio.play();
}

function mute() {
  var audio = document.getElementById("music");
  if(audio.muted) {
    audio.muted = false;
  } else {
    audio.muted=true;
  }
}

const [openNav, setOpenNav] = useState(false)

return(

<HashRouter>
 
  <Background />
  <AudioNav setOpenNav={setOpenNav} open={openNav} muteSfx={muteSfx} mute={mute}/>
  <audio id="sfx" src={sfx} />
  <audio id="music" src={song} loop />
  <Routes>
    <Route path="/" element={<Home setOpenNav={setOpenNav} play={play} playMusic={playMusic}/>}/>
    <Route path="/info" element={<Info/>}/>
    <Route path="/Screen1" element={<Screen1 play={play}/>}/>
    <Route path="/Screen2" element={<Screen2 play={play}  />}/>
    <Route path="/Screen3" element={<Screen3 play={play} />}/>
    <Route path="/Screen4" element={<Screen4 play={play} />}/>
    <Route path="/Screen5" element={<Screen5 play={play} />}/>   
    <Route path="/Screen6" element={<Screen6 play={play} />}/>   
    <Route path="/Video" element={<Video play={play} />} />
    <Route path="/Video1" element={<Video1 play={play} />} />
    <Route path="/Bquizz" element={<Bquizz play={play} />}/>   
    <Route path="/Bquizz1" element={<Bquizz1 play={play} />}/>   
    <Route path="/Card" element={<Card play={play}/>}/>
    <Route path="/Card1" element={<Card1 play={play}/>}/>
    <Route path="/Quizz" element={<Quizz play={play}/>}/>
    <Route path="/Quizz1" element={<Quizz1/>}/>
    <Route path="/Quizz2" element={<Quizz2Result setOpenNav={setOpenNav}/>}/>
    <Route path="*" element={<Error/>}/>
  </Routes>
</HashRouter>
 ) 
}

export default App;