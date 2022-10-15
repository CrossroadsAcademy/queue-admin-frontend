import React from "react";
import { useState } from "react";
import classes from "./dayselection.module.css";

const DaySelectionTable = () => {
  const [selectedDays, setselectedDays] = useState([]);

  const daysArray = [
    {
      id: 1,
      day: "Sunday",
    },
    {
      id: 2,
      day: "Monday",
    },
    {
      id: 3,
      day: "Tuesday",
    },
    {
      id: 4,
      day: "Wednessday",
    },
    {
      id: 5,
      day: "Thursday",
    },
    {
      id: 6,
      day: "Friday",
    },
    {
      id: 7,
      day: "Saturday",
    },
    {
      id: 8,
      day: "Everyday",
    },
  ];

  const handleClick = (day) => {
    if (selectedDays.includes(day)) {
      setselectedDays(selectedDays.filter((id) => id !== day));
    } else {
      setselectedDays([...selectedDays, day]);
    }
  };

  return (
    <div className={classes.mainWrapper}>
      <div className={classes.heading}>
        <h6>Working Days</h6>
      </div>
      <div className={classes.daysWrapper}>
        {daysArray.map((day) => (
          <div
            onClick={() => handleClick(day.id)}
            className={`${classes.days} ${
              selectedDays.includes(day.id) && classes.active
            }`}
          >
            {day.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaySelectionTable;
