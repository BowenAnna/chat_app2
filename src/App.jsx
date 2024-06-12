// import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {getUser} from "./utilities/users-service";
import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Auth from "./pages/Auth/Auth";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">

      <Nav user={user} setUser={setUser} />
      <Routes>
      <Route path="/" element={<Home />} />
  {user? (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/messages" element={<Chat user={user} setUser={setUser} />} />
      <Route path="/*" element={<Navigate to="/messages"/>}/>
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



