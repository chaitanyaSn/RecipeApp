import React from 'react'
import Sidebar from './components/Sidebar'
import HomePage from './Pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import FavoritesPage from './Pages/FavoritesPage'

const App = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/fav' element={<FavoritesPage/>}/>
      </Routes>
    
      
    </div>
  )
}

export default App
