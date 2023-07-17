// import React from "react";
import './App.css';
import HeaderSection from './components/HeaderSection';
import ContentSection from './components/ContentSection';
import FooterSection from './components/FooterSection';
import { useState } from 'react';



// TODO: Add a comment explaining what this function is doing
// This function is a functional component that helps us split the UI into distinct parts.
function App() {

  const[activeMenu,setMenu] = useState('');
  const changeMenu = (item) =>{
    setMenu(item);
  }
  return (
    <div>
      <HeaderSection activeMenu={changeMenu} />
      <ContentSection activeMenu={activeMenu}/>
      <FooterSection/>
    </div>
  );
}

export default App;
