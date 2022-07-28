import React, { useState, useEffect } from "react";
import SubmitButton from "../form/Button";
import Input from '../form/Input'
import Select from "../form/Select";
import styles from './Formulario.module.css'


function Newsuggestion ({handleSubmit, btnText, bookData}) 
{
    
    const [categories, setCategories] = useState([])
    const [book, setBooks] = useState(bookData || {})
    
    useEffect(() => 
    {
        fetch("http://localhost:5000/categories", 
    {
     method: "GET",
     headers:
     {
         'content-type': 'application/json',
     }
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCategories(data)
    })
    .catch((err) => console.log(err))
    }, [])

    const submit = (e) =>
    {
        e.preventDefault()
        handleSubmit(book)
    }

    function handleChange(e)
    {
        setBooks({ 
            ...book,
             [e.target.name]: e.target.value
        })
    }

    function handleCategory(e)
    {
        setBooks({ 
            ...book,
             category:{
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    return(      
            <form onSubmit={submit} className={styles.form}>
               
                <Input
                    type="text" 
                    name="name" 
                    text="Nome do livro" 
                    placeholder="Insira o nome do livro"
                    handleOnChange={handleChange}
                    value={book.name ? book.name : ''}
                 />
                 <Input
                    type="text" 
                    name="description" 
                    text="Descrição do livro" 
                    placeholder="Insira a descrição"
                    handleOnChange={handleChange}
                    value={book.description ? book.description : ''}
                 />
                <Input
                    type="number"
                    text="Quantidade de cópias"
                    name="livro"
                    placeholder="Insira a quantidade"
                    handleOnChange={handleChange}
                    value={book.livro ? book.livro : ''}
                    />
                <Select
                    name="category"
                    text="Selecione a categoria"
                    options={categories}
                    handleOnChange={handleCategory}
                    value={book.category ? book.category.id : ''}
                    />
                <SubmitButton text={btnText}/>
            </form>
         
    )
}

export default Newsuggestion