
import SideBar from "../Layout/SideBar";
import LiveButton from "../UI/Button/LiveButton";
import DaySelectionTable from "../UI/DaySelectionTable/DaySelectionTable";
import classes from "./Test.module.css";


const Test = () => {
  return (
    <div className={classes.container}>
      <div className={classes["test-space"]}>
        <h1>Test space</h1>
        <div className={classes["onboard-container"]}>
          <div className={classes["onboard-head"]}> ONBOARD  </div>
          <div className={classes["onboard-body"]}>
            <h3> Token No. </h3>
            <div className={classes["token-body"]}>
              <div className={classes["token-number"]}> 01 </div>
            </div>
            <div className={classes["onboard-details"]}>
              <span>Name: <name className={classes["name"]}> Nihal Avulan  </name></span>
              <span>Place: Malappuram</span>
              <span>Phone: 987654321</span>
            </div>
            <div className={classes["btn-group"]}>
              <div className={classes["done-btn"]}> Done </div>
              <div className={classes["absent-btn"]}> Absent </div>
            </div>
          </div>



        </div>


      </div>
    </div>
  );
};

export default Test;
