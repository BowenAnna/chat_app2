import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Groupchat />} />
      </Routes>
    </div>
  );
}

export default App;
