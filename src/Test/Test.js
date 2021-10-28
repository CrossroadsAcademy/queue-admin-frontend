import classes from "./Test.module.css";
import LiveButton from "./UI/LiveButton/LiveButton";

const Test = () => {
  return (
    <div className={classes.container}>
      <div className={classes["test-space"]}>
        <h1>Test space</h1>
        {/* Write your code here */}
        <LiveButton/>
        
      </div>
    </div>
  );
};

export default Test;
