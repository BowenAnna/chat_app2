import { useState } from 'react'
import './App.css'
import Home from '../../frontend/src/components/Home'
import Login from '../../frontend/src/components/Login'
import Chat from '../../frontend/src/components/Chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </div>
  )
}

export default App
