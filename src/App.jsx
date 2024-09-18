
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Homepage'
import About from './components/About'
import ProductRoutees from './Routes/ProductRoutees';
import AdminRoutes from './Routes/AdminRoutes';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
function App() {


  const user = { user: { role: "admin" } };
  const [admin, setAdmin] = useState(false);

  console.log(user?.user?.role);
  // console.log(user?.user?.role);

  return (
    <>
      {/* <BrowserRouter> */}
      <Router>
        <Routes>
          {<Route path='/*' element={ admin ? <AdminRoutes /> : <ProductRoutees admin={admin} setAdmin={setAdmin}/>} />}
        </Routes>
      </Router>
      <Toaster />
      {/* </BrowserRouter> */}

    </>
  )
}

export default App
