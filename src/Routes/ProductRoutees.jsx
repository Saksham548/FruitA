import React from 'react'
import Home from '../components/Homepage.jsx'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login.jsx'
import About from '../components/About.jsx'
import FAQ from '../components/FAQ.jsx'
import ChatPage from '../components/Chat.jsx'
import Translator from '../components/Translator.jsx'



const ProductRoutees = ({ admin, setAdmin }) => {
    return (

        <Routes>
            <Route path='/' element={<Login admin={admin} setAdmin={setAdmin} />} />
            <Route path="/homepage" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/translate" element={<Translator />} />
          

        </Routes>

    )
}

export default ProductRoutees