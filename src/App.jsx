// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewBooks from './pages/NewBooks';
import About from './pages/About';
import Singup from './components/Singup';
import BookDes from './pages/BookDes';

function App() {
  return (
    <>
      <div className='dark:bg-slate-800 dark:text-white '>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<NewBooks />} />
          <Route path='/about' element={<About />} />
          <Route path='/singup' element={<Singup />} />
          <Route path='/des' element={<BookDes />} />


        </Routes>
      </BrowserRouter>

    </div>
    </>
  )
}

export default App

