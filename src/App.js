import React from 'react'
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Certification from './pages/Certification';
import IABAC from './pages/IABAC';
import DEVOPS from './pages/DEVOPS';
import ICFQ from './pages/ICFQ';
import IIFIS from './pages/IIFIS';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

const App = () => {
  return (
   <>
   <div>
     <Router>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/certification' element={<Certification/>} />
       <Route path='/iabac' element={<IABAC/>} />
       <Route path='/devops' element={<DEVOPS/>} />
       <Route path='/icfq' element={<ICFQ/>} />
       <Route path='/IIFIS' element={<IIFIS/>} />
     </Routes>
     <Footer/>
       </Router>
   </div>
   </>
  )
}

export default App

