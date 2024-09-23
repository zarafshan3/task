
import './App.css';
import Nav from './components/nav/Nav';
import { useState } from 'react';
import SlidingMenu from './components/nav/slidingmenu/Slidingmenu';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';


function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);


  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <div className="App">
        <Nav toggleNav={toggleNav} />
        <SlidingMenu isNavOpen={isNavOpen} />
        
        <Routes >

          <Route element={<Layout/>}>

           <Route path='/' element={<Home/>} >

            <Route path='/' element={<Contact/>}/>

            
           </Route>

          </Route>

        </Routes>

      </div>
    </>
  );
}

export default App;
