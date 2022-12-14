import React from "react";
import { Link } from "react-router-dom";

import styles from './card.module.css'

import { BsPencil,BsFillTrashFill } from "react-icons/bs";

function Card ({id, name, budget, category, handleRemove})
{
    
    const remove = (e) =>
    {
        e.preventDefault()
        handleRemove(id)
    }
    return(
        <div className={styles.project_card}>
            <h4>
                {name}
            </h4>
            <p>
                {budget}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[category]}`}></span>{category}
            </p>
            <div className={styles.project_card_actions}>
                <Link to="/">
                    <BsPencil /> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill/>Remover
                </button>
                
            </div>
        </div>
    )
}
export default Card 