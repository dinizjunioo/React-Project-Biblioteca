import React from "react";

import styles from './side.module.css'

function Side () 
{
    return(
        <div className={`${styles.side}`}>
                  <p>&ensp;</p>
                  <h3> Conheça a Biblioteca</h3>
                  <ul type="circle"> 
                    <li>Apresentação</li>
                    <li>Infraestrutura</li>
                    <li>Normalização</li>
                    <li>Políticas e Regimentos</li>
                  </ul>
                  <h3> Serviços da Biblioteca</h3>
                  <ul type="circle"> 
                    <li>Empréstimo Domiciliar</li>
                    <li>Reserva de livros online</li>
                    <li>Orientação a pesquisa e Treinamentos de usuários</li>
                    <li>Normalização Bibliográfica</li>
                    <li>Pesquisa em Bases de Dados</li>
                    <li>Elaboração de catalogação na publicação</li>
                  </ul>
                </div>
    )
}

export default Side;