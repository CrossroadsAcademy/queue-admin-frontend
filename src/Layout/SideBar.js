import React from 'react'
import styles from './SideBar.module.css';
import { Icon } from '@iconify/react';



function SideBar() {
    return (
    
            <div className={styles.SideBar}>  
            
                <div className={styles.navigation}>
                    <a href="" className={styles.SideBarItem}><Icon className={styles.SideBarIcon} icon="ic:twotone-speed" />Dashboard</a>
                    <a href="" className={styles.SideBarItem}><Icon className={styles.SideBarIcon} icon="clarity:group-line" />Setup Queue</a>
                    <a href="" className={styles.SideBarItem}><Icon className={styles.SideBarIcon} icon="clarity:employee-line" />Staff</a>
                    <a href="" className={styles.SideBarItem}><Icon className={styles.SideBarIcon} icon="iconoir:profile-circled" />Profile</a>
                   
                </div>

                <div className={styles.profile}>
                        <div className={styles.img}>
                            <img src="./download.png" alt="" />
                        </div>
                        <span>CROSSROADS</span>
                </div>
            
            </div>
        
    )
}

export default SideBar
