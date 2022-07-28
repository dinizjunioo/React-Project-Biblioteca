import React from "react"

import styles from './Sobre.module.css'
import Side from './side.js'
const Sobre = () =>
{
    return( 
            <div className={`${styles.row}`}>

                <div className={`${styles.main}`}>
                  <p>&ensp;</p>
                  <center><h2>APRESENTAÇÃO</h2></center>
                  <p>&ensp;</p>
                  <p>A Biblioteca Arnaldo Arsênio de Azevedo planejada para atender aos usuários do IFRN-Câmpus Mossoró através do cumprimento de sua missão de oferecer apoio ao processo de ensino aprendizagem e colaborar em prol do desenvolvimento intelectual de alunos, professores e demais funcionários da Instituição. Tem com objetivo ser um centro de informações capaz de dar suporte bibliográfico e não bibliográfico (CD-ROM, DVD, Mapas etc) ao processo ensino-aprendizagem, à pesquisa e promover a democratização do conhecimento e cumprir sua função social de organizar e disseminar a informação junto à comunidade interna e externa.

                    A biblioteca iniciou as atividades em 1995 e em setembro de 1997 recebeu o nome de Arnaldo Arsênio de Azevedo.

                  Sua estrutura física é de 523,27m2. Todo o acervo de livros, periódicos, coleções especiais e multimeios está concentrado no térreo da biblioteca. Desta forma, a Biblioteca está acessível aos alunos, professores e funcionários, além da comunidade em geral, pois os usuários têm livre acesso ao acervo. Este encontra-se protegido com sistema antifurto e sistemas de câmeras.</p>
                  <p>&ensp;</p>
                  <p>&ensp;</p>
                  <p>&ensp;</p>
                  <p>&ensp;</p>
                  <p>&ensp;</p><p>&ensp;</p><p>&ensp;</p><p>&ensp;</p><p>&ensp;</p><p>&ensp;</p><p>&ensp;</p>
                </div>
                <Side/>

                

            </div>

    
    )
    
}

export default Sobre