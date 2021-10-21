import classes from "./Test.module.css";
import { LogoutButton } from "../UI/Button/LogoutButton";
import { Dashboardcard } from "../UI/Card/Dashboardcard";

const Test = () => {
  return (
    <div className={classes.container}>
      <div className={classes["test-space"]}>
        <h1>Test space</h1>
        {/* Write your code here */}
        <LogoutButton/>
        <Dashboardcard></Dashboardcard>
      </div>
    </div>
  );
};

export default Test;
