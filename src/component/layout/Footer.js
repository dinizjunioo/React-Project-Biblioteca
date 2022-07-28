import React from "react";
//import {Link} from 'react-router-dom'
//import Container from './Container'

import styles from './Footer.module.css'
import image1 from '../../imagens/ifrn.png'
import image2 from '../../imagens/facebook.png'
import image3 from '../../imagens/twitter.png'
import image4 from '../../imagens/instagram.png'
import image5 from '../../imagens/youtube.png'
import image6 from '../../imagens/smartphone.png'
import image7 from '../../imagens/email.png'
//import logo from ...
const Footer =() =>
{
    return(
        <footer className={`${styles.container_footer_all}`}>

      		<div class={styles.container_footer_all}>
      			<div class={styles.cont_body}>

      				<div class= {styles.coluna1}>
      					<center><img src={image1} alt="ifrn"/></center>
      					<p> Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte | Mossoró
      					Rua Raimundo Firmino de Oliveira, 400 - Conj. Ulrick Graff - Mossoró-RN CEP: 59.628-330 CNPJ: 10.877.412/0004-00</p>
      				</div>

      				<div class={styles.coluna2}>
      					<h1>Redes Sociais</h1>
      					<div class={styles.row1}>
      						<a href="https://www.facebook.com">
                                <img src={image2} alt="face"/></a>
      						<label> Siga-nos no Facebook! </label>
      					</div>
      					<div class={styles.row1}>
      						<a href="https://www.twitter.com">
                                <img src={image3} alt="twitter"/></a>
      						<label> Siga-nos no Twitter! </label>
      					</div>
      					<div class={styles.row1}>
      						<a href="https://www.instagram.com">
                                <img src={image4} alt="insta"/></a>
      						<label> Siga-nos no Instagram! </label>
      					</div>
      					<div class={styles.row1}>
      						<a href="https://www.youtube.com">
                                <img src={image5} alt="youtoba"/></a>
      						<label> Inscreva-se no nosso canal! </label>
      					</div>
      				</div>

      				<div class={styles.coluna3}>
      					<h1> Informações e Contatos</h1>
      					<div class={styles.row2}>
      						<img src={image6} alt="smartphone"/>
      						<label> 3422-2654 </label>
      					</div>
      					<div class={styles.row2}>
      						<img src={image7} alt="email"/>
      						<label> cobib.mo@gmail.com </label>
      					</div>
      				</div>

      			</div>
      		</div>
      		<div class={styles.container_footer}>
      			<div class={styles.copyright}>
      				@ 2022 Todos os direitos reservados | 
      				<a href="http://www.google.com"> Mais </a>
      			</div>

      			<div class={styles.information}>
      				<a href="http://www.google.com">Informações completas</a> | 
      				<a href="http://www.google.com">Privacidades e Política</a> | 
                              <a href="http://www.google.com">termos e condições</a>   
      			</div>
      		</div>

      	</footer>
    )
}

export default Footer;