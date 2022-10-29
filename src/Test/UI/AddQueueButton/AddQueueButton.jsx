import React from 'react'
import styles from './AddQueueButton.module.css';
import AddIcon from '@mui/icons-material/Add';
function AddQueueButton() {
    return (
        <>
            <a href="" className={styles.AddQueueButton}> <span className={styles.AddIcon}> <AddIcon fontSize="large" /> &nbsp; </span> Add Queue </a>

        </>
    )
}

export default AddQueueButton
