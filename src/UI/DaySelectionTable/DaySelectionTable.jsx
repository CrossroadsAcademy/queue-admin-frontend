import React from 'react'
import classes from './dayselection.module.css'

const DaySelectionTable = () => {
  return (
    <div className={classes.mainWrapper}>
        <div className={classes.heading}>
            <h6>Working Days</h6>
        </div>
        <div className={classes.daysWrapper}>
            <div className={classes.days}>Sunday</div>
        </div>
    </div>
  )
}

export default DaySelectionTable