import classes from "./Test.module.css";
import { LogoutButton } from "../UI/Button/LogoutButton";

const Test = () => {
  return (
    <div className={classes.container}>
      <div className={classes["test-space"]}>
        <h1>Test space</h1>
        {/* Write your code here */}
        <LogoutButton/>
      </div>
    </div>
  );
};

export default Test;
