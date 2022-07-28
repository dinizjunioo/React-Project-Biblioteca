import React from "react"
import { useNavigate } from "react-router-dom"
import Newsuggestion from "../project/Formulario"
import Side from "./side"
import styles from './Aquisicoes.module.css'

const Aquisicoes = () =>
{

    const navigate = useNavigate()

    function createPost(book)
    {
        book.cost = 0
        book.services = []

        fetch("http://localhost:5000/books",
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            }, body: JSON.stringify(book)
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate('/books', { state: {message: 'Projeto criado com sucesso!'} })
            })
        .catch((err) => console.log(err))      
    }

    return (
        <div className={styles.row}>
            <div className={styles.main}>
                <h1> Aquisicoes </h1>
                <Newsuggestion handleSubmit={createPost} btnText="SALVAR"/>
            </div>
            <Side/>
        </div>
    )
}

export default Aquisicoes