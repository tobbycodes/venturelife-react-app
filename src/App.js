
// import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"

import "./server"

export default function App() {
  return (
    <BrowserRouter>
    <header>
      <div>
        <Link to="/">#VanLife</Link>
      </div>
      <nav>
      <Link to="/about">About</Link>
      <Link to="/vans">Vans</Link>
      </nav>
    </header>
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path = "/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  )
}


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);


  /***ORIGINAL REACT CODE ***ins*/

//   function App() {
//   return (
//     <BrowserRouter>
//       <header>
//         <Link className="site-logo" to="/">#VanLife</Link>
//         <nav>
//           <Link to="/about">About</Link>
//           <Link to="/vans">Vans</Link>
//         </nav>
//       </header>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/vans" element={<Vans />} />
//         <Route path="/vans/:id" element={<VanDetail />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// ReactDOM
//   .createRoot(document.getElementById('root'))
//   .render(<App />);