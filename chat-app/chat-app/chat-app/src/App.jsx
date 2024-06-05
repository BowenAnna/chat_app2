import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
// import {getUser} from "./utilities/users-service";
// import * as itemsAPI from "./utilities/items-api";
//pages
// import Footer from "./components/Footer/Footer";
import Home from "../chat-app/src/pages/Home/Home";
import Chat from "../chat-app/src/pages/Chat/Chat";
function App() {
  const [user, setUser] = useState(getUser());
  const [activeCat, setActiveCat] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  //Admin
  ////////////////////////////////////////////////////////////////////////////////////
  // const [role, setRole] = useState("");
  ////////////////////////////////////////////////////////////////////////////////////
  const categoriesRef = useRef([]);
  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setMenuItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();
  }, []);
  ///////////////////////////////////////////////////////////////////////////////////////
  // useEffect(() => {
  //   if (user) {
  //     setRole(user.role || "");
  //   }
  // }, [user]);
  ///////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="App">
       <Nav user={user} setUser={setUser} />
      <Routes>
      <Route path="/" element={<Home />} />
  {user? (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat user={user} setUser={setUser} />} />
    </>
  ) : (
    <>
      <Route path="/" element={<Home />} />
    </>
  )}
</Routes>
<Footer/>
</div>
  );
}

export default App;

// import { useState, useEffect} from 'react'
// import './App.css'

// const ws = new WebSocket("ws://localhost:3000/cable");
// function App() {
//   const [messages, setMessages] = useState([]);
//   const[guid, setGuid] = useState(" ");
//   const messagesContainer = document.getElementById("messages");

//   ws.onopen=()=>{
//     console.log("Connected to the websocket server");
//     setGuid(Math.random().toString(36).substring(2,15));

//     ws.send(
//       JSON.stringify({
//         command: "subscribe",
//         identifier: JSON.stringify(
//           {
//             id: guid,
//             channel: ""
//           }
//         ),
//       })
//     );
//   };

//   ws.onmessage = (e)=>{
//     const data= JSON.parse(e.data);
//     if(data.type ==="ping") return;
//     if(data.type ==="welcome") return;
//     if(data.type ==="confirm_subscription") return;

//     const message = data.message;
//     setMessagesAndScrollDown([...messages, message])
//   }

//   useEffect(()=>{
//     fetchMessages();
//   }, [])

//   useEffect(()=>{
//     resetScroll();
//   }, [messages]);

//   const handleSubmit = async(e)=>{
//     e.preventDefault();
//     const body = e.target.message.value;
//     e.target.message.value = " "

//  await fetch("http://localhost:3000/messages", {
//     method: "POST",
//     body: JSON.stringify({body }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });  
//   console.log({body})
// };

//   const fetchMessages=async()=>{
//     const response = await fetch("http://localhost:3000/messages");
//     const data = await response.json();
//     setMessagesAndScrollDown(data);
//   }

//   const setMessagesAndScrollDown = (data)=>{
//     setMessages(data);
//     resetScroll();
//   }

//   const resetScroll = ()=>{
//     if(!messagesContainer) return;
//     messagesContainer.scrollTop = messagesContainer.scrollHeight;
//   }

//   return (
//   <div className='App'>
//     <div className='messageHeader'>
//       <h1>Messages</h1>
//       <p> Guid: {guid}</p>
//     </div>
//     <div className='messages' id="messages">
//       {
//         messages.map((message)=>(
//           <div className='message' key={message.id}>
//             <p>{message.body}</p>
//           </div>
//         ))
//       }
//     </div>
//     <div className="messageForm">
//       <form onSubmit={handleSubmit}>
//         <input className="messageInput" type="text" name="message"/>
//         <button className='messageButton' type="submit">
//           Send
//         </button>
//       </form>
//     </div>
//   </div>
//   )
// }

// export default App
