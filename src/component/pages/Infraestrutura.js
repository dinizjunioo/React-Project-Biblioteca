import React from "react"

import Side from './side.js'

import styles from './Infraestrutura.module.css'
const Infraestrutura = () =>
{
    return (
        <div class={styles.row}>
        <div class={styles.main}>
            <p>&ensp;</p>
            <center><h1>Infraestrutura</h1></center>
  
            <p>&ensp;</p>
            <h3> Descrição da organização do espaço físico: </h3>
            <p>&ensp;</p>
            <ul> Térreo 
  
                <li>Ø   Uma sala para Coordenação / Processos Técnicos;</li>
  
                <li> Ø   Uma sala Multimídia;</li>
  
                <li>Ø   Uma área de recepção</li>
  
                <li>Ø   Uma área de guarda-volumes</li>
  
                <li>Ø   Área para consulta a Internet com 08 terminais</li>
  
                <li>Ø   Roll de Entrada;</li>
  
                <li> Ø   Área livre dos acervos: livros, periódicos, acervos especiais e referência (dicionários e enciclopédias)</li>
            </ul>
            <p>&ensp;</p>
  
            <h3>Pavimento superior</h3>
            <p>&ensp;</p>
  
            <li>Área para estudo em grupo com  12 mesas redondas e 25 cadeiras</li>
  
            <li>Área para estudo individual com 36 cabines</li>
  
            <li>Os mobiliários e os equipamentos à disposição dos usuários estão adequados. As condições ambientais podem ser descritas como favoráveis, sendo o ambiente climatizado, localizado no térreo e no 1º andar.</li>
  
  
            <p>&ensp;</p>
            <h3>Pessoal Técnico e Administrativo</h3>
            <p>&ensp;</p>
            <li>O quadro de pessoal em exercício na biblioteca é constituído por 5 funcionários e 14 bolsistas. A biblioteca é coordenada por uma profissional graduada em Biblioteconomia, a equipe da biblioteca é representada da seguinte forma:</li>
  
            <li>• Bibliotecários: É o funcionário graduado em Biblioteconomia e com registro no Conselho regulamentador da profissão. Gerencia e executa as atividades técnicas e administrativas de sua competência.</li>
  
            <li>• Assistentes: São funcionários com exigência de formação com nível médio, treinados pelo Bibliotecário que desenvolvem trabalho de atendimento ao público e auxiliam nas demandas operacionais.</li> 
            <li>• Bolsistas: São alunos do IFRN, sem vínculo empregatício que auxiliam ao atendimento aos usuários e na organização do acervo.</li>
            <p>&ensp;&ensp;</p>
            
            <table>
        <tr>
          <th>Função</th>
          <th>Formação</th>
			<tr>
				<tr>
					<td>Bibliotecário Gestor da Biblioteca</td>
					<td>Bacharelado em Biblioteconomia</td>
				</tr>
				<tr>
					<td>Bibliotecário</td>
					<td>Bacharelado em Biblioteconomia</td>
				</tr>
				<tr>
					<td>Assistente</td>
					<td>Superior Completo</td>
				</tr>
				<tr>
					<td>Assistente</td>
					<td>Superior Completo</td>
				</tr>
				<tr>
					<td>Assistente</td>
					<td>Superior Completo</td>
				</tr>
			</tr>
			</tr>
        </table>
          <p>&ensp;</p>
          <p>&ensp;</p>
        </div>
          <Side/>
        </div>
    )
}

export default Infraestrutura