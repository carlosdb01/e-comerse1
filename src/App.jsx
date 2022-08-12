import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home, Login, Products, Purchases } from './pages'
import { LoadinScreen, NavBar, ProtectedRoutes} from './components';
import {useSelector} from 'react-redux'

import './App.css'

function App() {

  const isLoading = useSelector (state => state.isLoading)

  return (
    <HashRouter>
      <NavBar/>
      { isLoading && <LoadinScreen /> }
    
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='Login' element={<Login />}/>
        <Route path='products/:id' element={<Products />}/>
        <Route element={<ProtectedRoutes />}>
        <Route path='Purchases' element={<Purchases />}/>
        </Route>
      </Routes>
     
    </HashRouter>
  )
}

export default App
