import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/home/Home'
import Pokedex from '../components/pokedex/Pokedex'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pokedex' element={<Pokedex />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router