import React from "react"
//import {Link} from 'react-router-dom'
import image1 from '../../imagens/bibliotecamo.jpg'
import image2 from '../../imagens/siabi.jpg'
import Linkbutton from "../layout/LinkButton"
import styles from './Home.module.css'
import Side   from './side.js'
const Home = () =>
{
    return(
        <section class={styles.row}>
            <div className={styles.main}>          
      			<p>&ensp;</p>
      			<p>&ensp;</p>
      			<center><h2> Infraestrutura e serviços </h2><hr class="featurette-divider"/></center>
      			<p>&ensp;</p>
      			<div class={styles.card}>
      				<img class="" src={image1} alt="Card_image_cap"/>
      				<div class={styles.cardbody}>
      					<h5 class={styles.cardtitle}>Infraestrutura</h5>
      					<p class={styles.cardtext}>A Biblioteca Arnaldo Arsênio de Azevedo planejada para atender aos usuários do IFRN-Câmpus Mossoró através do cumprimento de sua missão de oferecer apoio ao processo de ensino aprendizagem e colaborar em prol do desenvolvimento intelectual de alunos, professores e demais funcionários da Instituição. </p>
      					<div class={styles.btn}>
                            
                            <Linkbutton to="/infraestrutura" text="infraestrutura">
                                Leia mais
                            </Linkbutton>
                        </div>
                    </div>
                </div> 
                <div class={styles.card}>
      				<img class="" src={image2} alt="Card_image_2"/>
      				<div class={styles.cardbody}>
      					<h5 class={styles.cardtitle}>Acervo</h5>
      					<p class={styles.cardtext}>O SIABI é um sistema completo, ideal para Instituições de Ensino avaliadas pelo MEC, Memoriais, Museus  e Bibliotecas Especializadas em Direito.</p>
                        <div class={styles.btn}>
                            <Linkbutton to="/" text="NoN">
                                Leia mais
                            </Linkbutton>
                        </div>             
      				</div>
      			</div>  
            </div>   
            <Side />   
        </section>
        
        )
}

export default Home