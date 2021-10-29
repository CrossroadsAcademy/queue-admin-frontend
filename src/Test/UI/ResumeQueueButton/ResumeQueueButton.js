import React from 'react'
import { Icon } from '@iconify/react';
import styles from './ResumeQueueButton.module.css';



function ResumeQueueButton() {
    return (
        <>
            <a href="" className={styles.ResumeQueueButton}> <Icon className={styles.ResumeIcon} icon="carbon:restart" color="#FFF9F9" /> Resume Queue </a>
        </>
    )
}



export default ResumeQueueButton
