import React from 'react'
import classes from './sidebar.module.css'
import { Icon } from '@iconify/react';

const Sidebar = () => {



    const sideBarItems = [
        {
            name : 'Dashboard',
            icon : 'ant-design:dashboard-outlined'
        },
        {
            name : 'Set Up Queue',
            icon : 'clarity:users-line'
        },
        {
            name : 'Staff',
            icon : 'clarity:employee-line'
        },
        {
            name : 'Profile',
            icon : 'iconoir:profile-circled'
        }
    ]   

  return (
    <div className={classes.wrapper}>
                <a href="" className={classes.listItem}>
                    <Icon icon='ant-design:dashboard-outlined' />
                    <span>Dashboard</span>
                </a>
    </div>
  )
}

export default Sidebar