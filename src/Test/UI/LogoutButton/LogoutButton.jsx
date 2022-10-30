import React from 'react'
import styles from './LogoutButton.module.css';
import LogoutIcon from '@mui/icons-material/Logout';



function LogoutButton() {
    return (
        <>
            <a href="" className={styles.LogoutButton}> <span> <LogoutIcon fontSize='large' /> </span>  &nbsp; Logout </a>

        </>
    )
}

export default LogoutButton
