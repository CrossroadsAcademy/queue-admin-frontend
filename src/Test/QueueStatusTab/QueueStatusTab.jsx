import React from "react";
import classes from "./QueueStatusTab.module.css";

function QueueStatusTab() {
  return (
    <div className={classes["tab-wrapper"]}>
      <button type="button" className={`${classes["tab-btn"]} ${classes["btn-active"]}`}>
        Upcoming
      </button>
      <button type="button" className={classes["tab-btn"]}>
        Finished
      </button>
      <button type="button" className={classes["tab-btn"]}>
        Absents
      </button>
    </div>
  );
}

export default QueueStatusTab;
