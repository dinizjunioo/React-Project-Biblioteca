import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './component/pages/Home'
import Aquisicoes from './component/pages/Aquisicoes'
import Contato from './component/pages/Contato'
import Infraestrutura from './component/pages/Infraestrutura'
import Sobre from './component/pages/Sobre'
import Container from './component/layout/Container'
import Navbar from './component/layout/Navbar'
import Footer from './component/layout/Footer'
import Books from './component/pages/books';
//import Carousel from './component/layout/carousel';
import './App.css';



//            <Route exact path="/about" element={Aboute} /> 
function App () {
  
  
  return (
    <div>
      <Navbar/> 
      
      <Container customClass='min-heght'>
        <Routes>       
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/books' element={<Books />} />
            <Route exact path='/aquisicoes' element={<Aquisicoes />} />
            <Route exact path='/Contato' element={<Contato />} />
            <Route exact path='/infraestrutura' element={<Infraestrutura />}/>
            <Route exact path='/sobre' element={<Sobre /> }/>              
        </Routes>
      </Container>
      <Footer/>
  
    </div>
  );
}

export default App;
