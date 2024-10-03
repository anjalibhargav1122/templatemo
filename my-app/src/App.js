import React from 'react'
import Link from './pages/link/Link'
import Contact from './pages/contact/Contact'
import Main from './pages/landing/Main'
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Templates from './pages/templates/Templates'
import Template from './pages/template/Template'

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/link" element={<Link/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/templates" element={<Templates/>}/>
      <Route path="/template" element={<Template/>}/>
     
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App