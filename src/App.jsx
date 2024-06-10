// import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {getUser} from "./utilities/users-service";
import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Auth from "./pages/Auth/Auth";
function App() {
  const [user, setUser] = useState(getUser());
  const [activeCat, setActiveCat] = useState("");
  const [menuItems, setMenuItems] = useState([]);
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
  return (
    <div className="App">
       <Nav user={user} setUser={setUser} />
      <Routes>
      <Route path="/" element={<Home />} />
  {user? (
    <>
      <Route path="/" element={<Home />} />
      {/* <Route path="/messages" element={<Chat user={user} setUser={setUser} />} /> */}
    </>
  ) : (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Auth setUser={setUser} />} />
      <Route path="/messages" element={<Chat user={user} setUser={setUser} />} /> {/*block this route later on*/}
    </>
  )}
</Routes>
<Footer/>
</div>
  );
}

export default App;



