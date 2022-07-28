import React from 'react'
import styles from './Button.module.css'

const SubmitButton = ({text}) =>
{
    return(
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default SubmitButton