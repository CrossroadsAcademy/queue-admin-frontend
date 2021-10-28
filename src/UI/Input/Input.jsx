import React from 'react'
import styles from './input.module.css' 
function Input(props) {
    return (
        <input type={props.type} placeholder={props.holder} className={styles.input} name={props.name} />
    )
}

export default Input
