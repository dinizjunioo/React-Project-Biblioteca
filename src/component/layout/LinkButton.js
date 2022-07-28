import React from "react";
import styles from './LinkButton.module.css'
import {Link} from 'react-router-dom'

const Linkbutton = ({to, text}) =>
{
    return(
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}

export default Linkbutton;