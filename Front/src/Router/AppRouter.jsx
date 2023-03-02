import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Encuesta from '../pages/Encuesta'
import Landing from '../pages/Landing'

const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Landing/>}/>
            <Route path='/survey' element={<Encuesta/>}/>
            
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouter