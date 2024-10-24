import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'

function App() {

  return (
    <div>
      <Navbar/>
      <hr/>
      <div className='flex '>
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add/>} />
          <Route path="/list" element={<List/>} />
          <Route path="/orders" element={<Orders/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
