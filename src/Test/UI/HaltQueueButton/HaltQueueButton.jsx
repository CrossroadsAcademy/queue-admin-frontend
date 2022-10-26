import React from 'react'
import styles from './HaltQueueButton.module.css';
import { FaGithubAlt, GrHalt } from 'react-icons/fa';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';


function HaltQueueButton() {
    return (
        <>
            <a href="" className={styles.HaltQueueButton}> <span> <PanToolOutlinedIcon fontSize='large' /> </span>  &nbsp; Halt Queue </a>

        </>
    )
}

export default HaltQueueButton
