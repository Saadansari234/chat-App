import React, { useState } from "react";
import ChatPage1 from "./pages/ChatPage1";
import './App.css'
import ChatPage2 from "./pages/ChatPage2";
function App() {
  const [change, setChange]=useState(false)

  const handleClick=()=>{
    setChange(!change)
  }
  return (
    <div>
      {
        change ? <ChatPage1/>: <ChatPage2/>
      }
      
      
      <button className="send-button position-absolute" onClick={handleClick} >{change ? 'user1' :'user2'}</button>
    </div>
  );
}

export default App;
