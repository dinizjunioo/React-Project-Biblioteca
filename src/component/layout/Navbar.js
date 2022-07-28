import React from "react";
import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'

//import logo from ...
const  Navbar = () => 
{
    return(
        <nav className={`${styles.menu}`}>
           
            <Container>
                <ul>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/books">Livros</Link> </li>           
                    <li><Link to="/aquisicoes">Aquisições</Link> </li>
                    <li><Link to="/infraestrutura">Infraestrutura</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                </ul>
            </Container>
        </nav>

        
    )
}

export default Navbar;