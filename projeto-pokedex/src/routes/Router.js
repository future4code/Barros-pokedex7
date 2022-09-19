import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from '../Screens/home/Home'
import Pokedex from '../Screens/pokedex/Pokedex'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pokedex' element={<Pokedex />}/>
        {/* <Route path='/pokemon-detail' element={<PokemonDetail />}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Router