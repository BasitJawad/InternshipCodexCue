import React from 'react'
import Blog from './Components/Blog'
import HomePage from './Pages/HomePage'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import BlogPage from './Pages/BlogPage'
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<HomePage />}/>
        <Route path='/Blogs' element={<BlogPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
