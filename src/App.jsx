import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Home2 from './components/Home2';
import Body1 from './components/Body1';
import Body2 from './components/Body2';
import './App.css';

function App() {
  return (
    <div>
      
      
    <Navbar/>
     <Home/>
  <Home2/>
  <Body1/>
  <Body2/>

  

</div>

  );
}
      

export default App
