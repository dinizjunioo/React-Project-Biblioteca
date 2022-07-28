import React from "react";
import{useState, useEffect} from 'react'
import { useLocation } from "react-router-dom";
import Container from "../layout/Container";
import Linkbutton from "../layout/LinkButton";
import Message from '../layout/Message'
import Card from '../project/card'
import styles from './books.module.css'
import Side from "./side";
function Books()
{
    const [cards, setCard] = useState([])
    const [cardMessage, setCardMessage] = useState('')
    const location = useLocation()
    let message=''
    if(location.state)
    {
        message = location.state.message
    }

    useEffect(() => 
    {
        fetch("http://localhost:5000/books", 
    {
     method: "GET",
     headers:
     {
         'content-type': 'application/json',
     }
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCard(data)
    })
    .catch((err) => console.log(err))
    }, [])

    function removeBook(id)
    {
            fetch(`http://localhost:5000/books/${id}`, 
        {
         method: "DELETE",
         headers:
         {
             'content-type': 'application/json',
         }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCard(cards.filter((card) => card.id !== id))
            setCardMessage('Livro removido com sucesso!')
        })
        .catch((err) => console.log(err))
    }
    
    return(
        <div class={styles.row}>
            <div className={styles.main}> 
                <div className={styles.book_container}>
                    <div className={styles.title_container}>
                        <h1> Meus Livros</h1>
                        <Linkbutton to="/aquisicoes" text="Novo Livro"/>
                    </div>
                    {message && <Message  type="success" msg={message}/>}
                    {cardMessage && <Message  type="success" msg={cardMessage}/>}
                    <Container customClass="start">
                    <div className={styles.cards}>
                        {cards.length > 0 && cards.map((card) => (
                            <Card 
                                id={card.id}
                                name={card.name} 
                                budget={card.description}
                                category={card.category.name}
                                key={card.id}
                                handleRemove={removeBook}
                            />
                        ))}
                    </div>
                    </Container>
                </div>
            </div>
            <Side/> 
        </div>
    )
}
export default Books