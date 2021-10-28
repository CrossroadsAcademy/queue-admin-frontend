import React from 'react'
import styles from './staffcard.module.css'

function StaffCard(props) {
    return (
        <div>
        <div className={styles.cardWrapper}>
           <div className={styles.imgWrapper}>
                <img src={props.src} alt={props.imgAlt} className={styles.profileImg}/>
           </div>
            <h4 className={styles.staffName}>{props.name}</h4>
            <h6 className={styles.staffNumber}>{props.number}</h6>
        </div>
        </div>
    )
}

export default StaffCard
