import React from 'react'
import classes from './LogoutButton.module.css'
import logout from '../../assets/icons/logOut.png'


export const LogoutButton = () => {
    return (
        <div className={classes.logoutBtn}>
            <div>
            <img src={logout} alt="" className={classes.logoutBtnImage} srcset="" />
            </div>
            <div>
                <p>Logout</p>
            </div>
          
            
            
        </div>
    )
}
