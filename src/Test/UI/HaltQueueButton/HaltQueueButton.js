import React from 'react'
import { Icon } from '@iconify/react';
import styles from './HaltQueueButton.module.css';


function HaltQueueButton() {
    return (
        <>
        <a href="" className={styles.HaltQueueButton}> <Icon className={styles.haltIcon} icon="clarity:cursor-hand-open-line" color="teal" /> Halt Queue</a>
        </>
    )
}

export default HaltQueueButton
